#!/bin/bash

/usr/bin/env bower --allow-root install

#ensure that our working dir is empty and user files are preserved
if [[ ! -d img ]]; then
    mkdir img;
fi
if [[ ! -d files ]]; then
    mkdir files;
fi
if [[ ! -d _site ]]; then
    mkdir _site;
else
    if [[ -f _site ]]; then
        mv _site _site.bak;
        mkdir _site;
    fi
    if [[ -d _site/files ]]; then
        rsync -r _site/files/ files/
    fi
    if [[ -d _site/img ]]; then
        rsync -r _site/img/ img/
    fi
    find _site -links 1 -exec rm "{}" \; ;
fi

# compile the navigation tree
/usr/bin/env ruby make.rb

# grabs all releant files in _sass folder and builds a single, minified css
echo "" > _sass/_sass_imports.scss;
if [[ -f _sass/_variables.scss ]]; then echo "@import '_variables.scss';" > _sass/_sass_imports.scss; fi
for folder in _sass/_{'tag','class','id'}; do 
    if [[ -d $folder ]]; then
        for i in $folder/*.scss; do
            if [[ -f $i ]]; then
                echo "@import '${i##_sass/}';" >> _sass/_sass_imports.scss;
            fi
        done;
    fi
done
sass --load-path _sass _sass/index.scss --style compressed > style.min.css;

olf_ifs="$IFS"
# grabs all files wich don't start with an underscore or in our blacklist
IFS=$'\n'; for i in $(find . -type f | grep -v -e "/_" -e ".sass-cache" -e '.git' -e '.gitignore' -e 'make.rb' -e 'compile.sh' -e 'config.json.example'); do
    if [[ ${i##./} == ${0##./} ]]; then continue; fi
    if [[ -e ${i} ]]; then continue; fi
    item="${i##./}";
    if [[ ! ${item%/*} == ${i##*/} ]]; then
        mkdir -p _site/${item%/*};
    fi
    mime="$(file --mime-type -b $item)";
    case $mime in
        "application/javascript")
            if [[ ${item##*.min.} == "js" ]]; then
                ln "$item" _site/"$item"
            else
                uglifyjs "$item" -o _site/"$item" -c
            fi
            ;;
        "text/css")
            if [[ ${item##*.min.} == "css" ]]; then
                ln "$item" _site/"$item"
            else
                sass "$item" --style compressed > _site/"${item%.css}.min.css"
            fi
            ;;
        "text/html")
            # Usually is not worth adding an HTML compressor tool, but just if necesary, it should be here
            ln "$item" _site/"$item"
            ;;
        *)
            echo "$item"
            ln "$item" _site/"$item"
            ;;
    esac;
done;
IFS="${old_ifs}";

find . -type d -exec chmod 775 "{}" \; ;
find . -type f -exec chmod 664 "{}" \; ;
for i in "api/" "_site/api/" "locales/" "_site/locales/" "admin/" "_site/admin/"; do
    find "$i" -type f \( -iname "*.rb" -o -iname "*.json"  -o -iname "*.sh" \) -exec chmod 774 "{}" \; ;
done;
chmod 774 "$0"
chown -R www-data:www-data .
