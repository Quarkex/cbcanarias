app.directive('appFooter', function () {

    var template = '';

    var footer_dialogs = [
        ['POLÍTICA DE PRIVACIDAD/AVISO LEGAL', 'politica-de-privacidad-aviso-legal'],
        ['CONDICIONES COMERCIALES', 'condiciones-comerciales']
    ];

    var footer_left = [
        'Cantera Base 1939 Canarias, Sociedad Anónima Deportiva ',
        'Año de fundación: 1939'
    ];

    var footer_center = [
        'E-mail: secretaria@cbcanarias.es ',
        'Teléfono: 922-25-36-84',
        'Fax: 922-31-59-09'
    ];

    var footer_right = [
        'C/Mercedes, s/n, Pabellón Insular de Tenerife Santiago Martín',
        'Casa del Deporte / 3ª planta / 38108 – La Laguna'
    ];

    var footer_string = '';
    var footer_patreons_string = '';
    var footer_logo_string = '';
    var footer_dialogs_string = '';
    var footer_left_string = '';
    var footer_center_string = '';
    var footer_right_string = '';

    footer_patreons_string = '<img ' + [
        'ng-src="/img/patreons/{{ patreon.name | slugify }}.png"',
        'alt="{{ patreon.name }}"'
    ].join(' ') + '>';

    footer_patreons_string = '<a ' + [
        'ng-href="{{ patreon.link }}"'
    ].join(' ') + '>' + footer_patreons_string  + '</a>';

    footer_patreons_string = '<div ' + [
        'flex="100"',
        'flex-gt-sm="50"',
        'flex-gt-md="25"',
        'class="column centered"',
        'ng-if="sections()[sections().length -1] != \'patrocinadores\'"',
        'ng-repeat="patreon in elements() | orderBy: \'weight\'"'
    ].join(' ') + '>' + footer_patreons_string  + '</div>';

    footer_patreons_string = '<div ' + [
        'class="patreons-footer"',
        'flex="100"',
        'layout="row"',
        'layout-wrap',
        'layout-padding',
        'layout-align="center center"',
        'ng-controller="patreonsFooterCtrl"'
    ].join(' ') + '>' + footer_patreons_string  + '</div>';

    var i = 0;
    var dialogs_length = 0;

    for ( i = 0; i < footer_dialogs.length; i++){
        if (footer_dialogs[i][0].length > dialogs_length) dialogs_length = footer_dialogs[i][0].length;
    }

    footer_logo_string = '<img style="height: 12em;" src="img/logo.png">'
    footer_logo_string = '<a href="#!/{{ lang() }}/">' + footer_logo_string + '</a>'
    footer_logo_string = '<div flex layout="row" layout-align="center center" layout-margin>' + footer_logo_string + '</div>'

    for ( i = 0; i < footer_dialogs.length; i++){
        string = footer_dialogs[i][0]
        while (string.length < dialogs_length) string += ' ';
        if ( string.match(/[\ ]+$/) != null ){
            space = string.match(/[\ ]+$/)[0];
            space = space.replace(/ /g, '&puncsp;');
            string = string.replace(/[\ ]+$/, space)
        }
        footer_dialogs_string = footer_dialogs_string + '<a style="font-family: monospace; font-size: 150%;" ng-click="dialog=\'assets/dialogs/' + footer_dialogs[i][1] + '.tmpl.html\'; showDialog();">' + string + '</a>';
        if ( i != (footer_dialogs.length - 1) ) footer_dialogs_string = footer_dialogs_string + ' <span hide-xs>|</span> ';
    }
    footer_dialogs_string = '<div flex layout="column" layout-gt-xs="row" layout-align="center center" layout-margin>' + footer_dialogs_string + '</div>';

    for ( i = 0; i < footer_right.length; i++){
        footer_right[i] = '<span>' + footer_right[i] + '</span>';
    }
    footer_right_string = '<div class="right" flex flex-gt-sm="33" layout="column" layout-align="begin center" layout-align-gt-sm="begin end">' + footer_right.join('') + '</div>';

    for ( i = 0; i < footer_center.length; i++){
        footer_center[i] = '<span>' + footer_center[i] + '</span>';
    }
    footer_center_string = '<div class="center" flex flex-gt-sm="33" layout="column" layout-align="begin center">' + footer_center.join('') + '</div>';

    for ( i = 0; i < footer_left.length; i++){
        footer_left[i] = '<span>' + footer_left[i] + '</span>';
    }
    footer_left_string = '<div class="left" flex flex-gt-sm="33" layout="column" layout-align="begin center" layout-align-gt-sm="begin begin">' + footer_left.join('') + '</div>';

    footer_string = footer_left_string + footer_center_string + footer_right_string;
    footer_string = '<div flex layout="column" layout-gt-sm="row" layout-padding>' + footer_string + '</div>';
    footer_string = '<div ng-controller="footerCtrl" class="footer-wrapper hide-for-print" layout="column" flex>' + footer_patreons_string + footer_logo_string + footer_dialogs_string + footer_string + '</div>';


    template = footer_string;

    return {
        restrict: 'EA',
        template: template
    };
});
