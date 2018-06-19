#!/usr/bin/env ruby

require "cgi"
require 'json'
require 'date'
require 'mongo'
require 'digest'

begin

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

    cgi = CGI.new("html4")

    collection = client["static"]
    collection.indexes.create_one( { :id => -1 }, unique: true )

    $doc = {}

    if cgi.params.has_key? 'id' then
        $doc['id'] = cgi['id'].to_i
    else
        $last_db_entry = collection.find().sort({"id": -1}).first
        $last_db_id = $last_db_entry.nil? ? 0 : $last_db_entry['id'].to_i
        $doc['id'] = $last_db_id + 1
    end

    target = '/admin/#!/es/contenido'

    if cgi.params.has_key? 'title' then
        $doc['title'] = cgi['title'] unless cgi['title'] == ""
    end

    if cgi.params.has_key? 'content' then
        $doc['content'] = cgi['content'] unless cgi['content'] == ""
    end

    $doc['IDIOMA'] = 'es'

    collection.find_one_and_update({ id: $doc['id']}, { "$set" => $doc}, :upsert => true)

    puts cgi.header("status" => "REDIRECT", "Location"=>target)
rescue Exception => e
    headers = "documentType=application/json; charset=utf-8"
    content = {"error": {"message": e.message, "backtrace": e.backtrace}}
    cgi.out(headers){content.to_json}
end
