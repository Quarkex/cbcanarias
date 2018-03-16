#!/usr/bin/env ruby

require "cgi"
require 'json'
require 'mongo'

Mongo::Logger.logger.level = ::Logger::FATAL

$config = {}

# Default config values
$config["mongo-ip"]   = "127.0.0.1"
$config["mongo-port"] = 27017
$config["mongo-db"]   = "cbcanarias"

configFile = File.expand_path(File.dirname(__FILE__)) + '/../../config.json'
load configFile if File.file? configFile

Mongo::Logger.logger.level = ::Logger::FATAL

client = Mongo::Client.new([ $config['mongo-ip'] + ':' + $config['mongo-port'].to_s ], :database => $config['mongo-db'])
$db = client.database

collection = client["team"]

cgi = CGI.new("html4")
begin
    $member = {}
    $order = nil
    $id = nil
    $language = 'es'
    $image_name = nil
    $name = nil
    $type = nil
    $number = nil
    $seasons = nil
    $origin = nil
    $birthdate = nil
    $position = nil
    $height = nil
    $link = nil
    $image = nil
    cgi.params.keys.each do |param|
        case param
        when "ID"
            $id = cgi[param].to_i if cgi[param] != nil and cgi[param] != ''
        when "IDIOMA"
            $language = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "image_name"
            $image_name = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "order"
            $order = cgi[param].to_i if cgi[param] != nil and cgi[param] != ''
        when "name"
            $name = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "type"
            $type = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "number"
            $number = cgi[param].to_i if cgi[param] != nil and cgi[param] != ''
        when "seasons"
            $seasons = cgi[param].to_i if cgi[param] != nil and cgi[param] != ''
        when "origin"
            $origin = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "birthdate"
            $birthdate = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "position"
            $position = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "height"
            $height = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "link"
            $link = cgi[param] if cgi[param] != nil and cgi[param] != ''
        when "upload"
            $image = cgi[param] if cgi[param] != nil and cgi[param] != ''
        end
    end
    if $id != nil then
        doc = collection.find( { "ID": $id } ).first
        $member = doc if doc != nil
    else
        last = collection.find().sort({"ID":-1}).first
        $member['ID'] = (last == nil or last["ID"] == nil) ? 0 : last["ID"] + 1
    end
    $member['IDIOMA']    = $language
    $member['order']     = $order
    $member['name']      = $name
    $member['type']      = $type
    $member['number']    = $number
    $member['seasons']   = $seasons
    $member['origin']    = $origin
    $member['birthdate'] = $birthdate
    $member['position']  = $position
    $member['height']    = $height
    $member['link']      = $link

    if $image != nil and $image_name != nil then
        fileName = "../../img/team/" + $image_name + File.extname($image.original_filename)
        File.open( fileName,"w"){|sf| sf.puts $image.read }
    end

    collection.find_one_and_update({ ID: $member['ID']}, { "$set" => $member}, :upsert => true)

    puts cgi.header("status" => "REDIRECT", "Location"=>'/admin/#!/es/equipo')
rescue Exception => e
    headers = "documentType=application/json; charset=utf-8"
    content = {"error": {"message": e.message, "backtrace": e.backtrace, "object_status": $image.inspect}}
    cgi.out(headers){content.to_json}
end
