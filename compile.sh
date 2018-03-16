#!/bin/bash

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
