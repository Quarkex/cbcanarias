function Languaje($location, $window, $resource, tmhDynamicLocale){

    var self = this;
    var scope_interface = [];

    this.variables = {
        'dictionary': {},
        'dictionary_lang': null,
        'available_languages': ['de', 'en', 'es'],
        //'available_languages': ['es', 'en'],
        // parameterized URL template with parameters prefixed by : as in /user/:username
        'url': function(){ return '/locales/' + self.current_language() + '.json'; },
        // default values for url parameters
        'parameters': {},
        // hash with declaration of custom actions
        'actions': {
            "get": {
                "method": "POST"
            }
        },
        // hash with custom settings
        'settings': {},
        'element_status': 'empty'
    };

    this.dictionary = function(o){
        if (o !== undefined){
            for (var k in o){
                if (o.hasOwnProperty(k)) {
                    self.variables.dictionary[k] = o[k];
                }
            }
        }
        return self.variables.dictionary;
    };
    scope_interface.push("dictionary");

    this.current_language = function(l) {
        if (l !== undefined){
            var current_location = $location.path().split('/');
            if (! self.isValid(l)) l = self.default_language();
            if (current_location[1] != l){
                current_location[1] = l;
                current_location = current_location.join('/');
                $location.path( current_location );
                self.get();
            }
        }
        return $location.path().split('/')[1];
    }
    scope_interface.push("current_language");
    self.variables.parameters["language"] = self.current_language;

    this.current_dictionary = function(a){
        if (a !== undefined) self.variables.dictionary_lang = a;
        return self.variables.dictionary_lang;
    };
    scope_interface.push("current_dictionary");

    this.available_languages = function(a){
        if (a !== undefined) if (Array.isArray(a)) self.variables.available_languages = a;
        return self.variables.available_languages;
    };
    scope_interface.push("available_languages");

    this.isValid = function(l){
        return this.available_languages().includes(l) ? true : false ;
    };

    this.window_lang = function(){
        return $window.navigator.language;
    };

    this.default_language = function(){
        var output = this.isValid(self.window_lang().split('-')[0]) ? self.window_lang().split('-')[0] : 'en';
        return output;
    };
    scope_interface.push("default_language");

    this.translate = function(stringA, stringB ) {
        // this is to respect the less surprise directive. Prefixes should precede the target string
        var string = stringB == undefined ? stringA : stringB;
        var prefix = stringB == undefined ? null : stringA;

        if ( self.dictionary().hasOwnProperty( prefix == null? string : prefix + string ) ){
            string = self.dictionary()[prefix == null ? string : prefix + string];
        }
        return string;
    };
    scope_interface.push("translate");

    // hash as seen by the final cgi
    this.values = {
        language: self.current_language
    };
    this.resource = $resource( self.variables.url(), self.variables.parameters, self.variables.actions, self.variables.settings );

    this.set_dictionary_values = function(data){
        if (data != null){
            for (var k in data){
                if (data.hasOwnProperty(k)) {
                    self.variables.dictionary[k] = data[k];
                }
            }
            tmhDynamicLocale.set(self.current_language());
            self.language_status('ok');
        } else {
            self.current_dictionary(self.default_language());
        }
    };

    this.retry_get_command = function(){
        self.language_status('error');
        self.current_language(self.current_language());
    };

    this.get = function(){
        if(self.variables.dictionary_lang != self.current_language() && self.language_status() != 'loading') {
            self.current_dictionary(self.current_language());
            self.language_status('loading');
            self.resource = $resource( self.variables.url(), self.variables.parameters, self.variables.actions, self.variables.settings );
            self.resource.get( self.values, this.set_dictionary_values, this.retry_get_command);
        }
    };

    this.language_status = function(e){
        if (e != undefined){
            self.variables.language_status = e;
        }
        return self.variables.language_status;
    };
    scope_interface.push("language_status");

    this.expose_interface = function(scope){
        for ( var i = 0; i < scope_interface.length; i++ ){
            scope[scope_interface[i]] = self[scope_interface[i]];
        }
    }
}
app.service('language', ["$location", "$window", "$resource", "tmhDynamicLocale", Languaje]);

