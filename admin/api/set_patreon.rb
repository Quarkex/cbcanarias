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

collection = client["patreons"]

cgi = CGI.new("html4")
begin
    $patreon = {}
    $id = nil
    $language = 'es'
    $image_name = nil
    $name = nil
    $type = nil
    $weight = nil
    $scrolleable = false
    $link = nil
    $image = nil
    cgi.params.keys.each do |param|
        case param
        when "ID"
            $id = cgi[param].to_i                 if cgi[param] != nil and cgi[param] != ''
        when "IDIOMA"
            $language = cgi[param]                if cgi[param] != nil and cgi[param] != ''
        when "image_name"
            $image_name = cgi[param]              if cgi[param] != nil and cgi[param] != ''
        when "name"
            $name = cgi[param]                    if cgi[param] != nil and cgi[param] != ''
        when "type"
            $type = cgi[param]                    if cgi[param] != nil and cgi[param] != ''
        when "weight"
            $weight = cgi[param].to_i             if cgi[param] != nil and cgi[param] != ''
        when "scrolleable"
            $scrolleable = (cgi[param] == 'true') if cgi[param] != nil and cgi[param] != ''
        when "link"
            $link = cgi[param]                    if cgi[param] != nil and cgi[param] != ''
        when "upload"
            $image = cgi[param]                   if cgi[param] != nil and cgi[param] != ''
        end
    end
    if $id != nil then
        doc = collection.find( { "ID": $id } ).first
        $patreon = doc if doc != nil
    else
        last = collection.find().sort({"ID":-1}).first
        $patreon['ID'] = (last == nil) ? 0 : last["ID"] + 1
    end
    $patreon['IDIOMA']      = $language
    $patreon['name']        = $name
    $patreon['type']        = $type
    $patreon['weight']      = $weight
    $patreon['scrolleable'] = $scrolleable
    $patreon['link']        = $link

    if $image != nil and $image_name != nil then
        fileName = "../../img/patreons/" + $image_name + File.extname($image.original_filename)
        File.open( fileName,"w"){|sf| sf.puts $image.read }
    end

    collection.find_one_and_update({ ID: $patreon['ID']}, { "$set" => $patreon}, :upsert => true)

    puts cgi.header("status" => "REDIRECT", "Location"=>'/admin/#!/es/patrocinadores')
rescue Exception => e
    headers = "documentType=application/json; charset=utf-8"
    content = {"error": {"message": e.message, "backtrace": e.backtrace, "object_status": $image.inspect}}
    cgi.out(headers){content.to_json}
end
