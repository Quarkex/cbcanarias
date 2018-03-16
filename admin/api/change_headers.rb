#!/usr/bin/env ruby

require "cgi"
require 'json'
require 'mongo'

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
begin
    $lines = []
    if cgi.params.has_key? 'line' then
        $id = 0
        cgi.params["line"].each do |line|
            if line != '' then
                $id = $id + 1
                $object = { "content": line, "IDIOMA": "es", "ID": $id }
                $lines.push $object
            end
        end
    end

    if $lines.count > 0 then
        collection = client["slider"]

        collection.drop
        collection.insert_many($lines)
    end

    puts cgi.header("status" => "REDIRECT", "Location"=>'/')
rescue Exception => e
    headers = "documentType=application/json; charset=utf-8"
    content = {"error": {"message": e.message, "backtrace": e.backtrace}}
    cgi.out(headers){content.to_json}
end
