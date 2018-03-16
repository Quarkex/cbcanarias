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

collection = client["matches"]

cgi = CGI.new("html4")
begin
    $matches = []
    index = 0

    while cgi['match_' + index.to_s + '_date'] != "" and cgi['match_' + index.to_s + '_date'] != nil do
        id           = index
        type         = cgi['match_' + index.to_s + '_type']
        date         = cgi['match_' + index.to_s + '_date']
        day_number   = cgi['match_' + index.to_s + '_day_number']
        date         = cgi['match_' + index.to_s + '_date']
        hour         = cgi['match_' + index.to_s + '_hour']
        local_team   = cgi['match_' + index.to_s + '_local_team']
        visitor_team = cgi['match_' + index.to_s + '_visitor_team']

        day_number = day_number.to_i if day_number != nil

        match = { "type": type, "IDIOMA": "es", "ID": id, "day_number": day_number, "date": date, "hour": hour, "local_team": local_team, "visitor_team": visitor_team }
        $matches.push match if date != ""

        index += 1
    end

    collection.drop
    collection.insert_many($matches)

    puts cgi.header("status" => "REDIRECT", "Location"=>"/admin")
rescue Exception => e
    headers = "documentType=application/json; charset=utf-8"
    content = {"error": {"message": e.message, "backtrace": e.backtrace}}
    cgi.out(headers){content.to_json}
end
