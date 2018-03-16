#!/usr/bin/env ruby

require "cgi"
require 'json'
require 'digest'
#require 'tempfile'
#require 'fileutils'


$headers = ''
$content = ''
$redirection = "/admin/" 
cgi = CGI.new("html4")
begin
    parameters = {}
    cgi.query_string.split('&').each do |querylet|
        if querylet != nil then
            parameter = querylet.split('=')
            parameters[parameter[0]] = parameter[1].split(',')
        end
    end if cgi.query_string != nil

    response = "json"
    if cgi.params.has_key? "response" then response = cgi.params["response"][0] unless cgi.params["response"] == nil end
    if parameters.has_key? "response" then response = parameters["response"][0] unless parameters["response"] == nil end

    type = "file"
    if cgi.params.has_key? "type" then type = cgi.params["type"][0] unless cgi.params["type"] == nil end
    if parameters.has_key? "type" then type = parameters["type"][0] unless parameters["type"] == nil end

    funcNum = 0
    if cgi.params.has_key? "CKEditorFuncNum" then funcNum = cgi.params["CKEditorFuncNum"][0].to_i unless cgi.params["CKEditorFuncNum"] == nil end
    if parameters.has_key? "CKEditorFuncNum" then funcNum = parameters["CKEditorFuncNum"][0].to_i unless parameters["CKEditorFuncNum"] == nil end

    url = ''

    output = {}
    output['uploaded'] = 0

    # directory where the uploaded files are saved.
    # Remember setting owner and group to www-data.
    case type
    when "file"
        base_dir = "/files/"
    when "image"
        base_dir = "/img/"
    when "ads"
        base_dir = "/img/ads/"
    when "banner"
        base_dir = "/img/banners/"
    when "event_poster"
        base_dir = "/img/events/"
    when "team_member"
        base_dir = "/img/team/"
    when "league_logo"
        base_dir = "/img/logos/leagues/"
    when "team_logo"
        base_dir = "/img/logos/teams/"
    when "patreon_logo"
        base_dir = "/img/patreons/"
    when "article_image"
        base_dir = "/img/articles/"
    end

    if cgi.params.has_key? 'upload' then
        cgi.params["upload"].each do | file |

            $filename = file.original_filename
            case type
            when 'article_image' 
                sha1 = Digest::SHA1.file file
                $filename = sha1.to_s + File.extname(file.original_filename)
            when 'team_member', 'team_logo', 'patreon_logo', 'league_logo', 'banner'
                basename = File.basename(file.original_filename)
                basename = cgi.params['name'][0] if cgi.params['name'][0] != nil and cgi.params['name'][0] != ''
                $filename = basename + File.extname(file.original_filename)
            end
            url = base_dir + $filename
            fileName = '../..' + url

            begin
                #tempfile = Tempfile.new('cbcanarias')
                #File.open( tempfile.path,"w"){|sf| sf.write(file.read) }
                #FileUtils.mv(tempfile.path, fileName.untaint)
                File.open( fileName.untaint,"w"){|sf| sf.write(file.read) }
                output['uploaded'] = 1
                output['fileName'] = file.original_filename
                output['url'] = url
                $redirection = output['url']
            rescue Exception => e
                output['error'] = {}
                output['fileName'] = file.original_filename
                output['error']['message'] = e.message
            end

        end
    else
        output['error'] = {}
        output['error']['message'] = "No file uploaded"
    end

    case response
    when 'none'
        $headers = { "Status"=>"303", "Connection"=>"close", "Content-Length"=>"1", "Location"=>$redirection }
        $content = ' '
    when 'json'
        $headers = "documentType=application/json; charset=utf-8"
        $content = output.to_json
    when 'ckeditor'
        $headers = ""
        $content = '<script type="text/javascript">window.parent.CKEDITOR.tools.callFunction( ' + funcNum.to_s + ', "' + url + '" );</script>'
    end

    cgi.out($headers){$content.to_s}
rescue Exception => e
    $headers = "documentType=application/json; charset=utf-8"
    $content = {"error": {"message": e.message, "backtrace": e.backtrace, "parameters": cgi.params['upload'][0].original_filename }}
    cgi.out($headers){$content.to_json}
end
