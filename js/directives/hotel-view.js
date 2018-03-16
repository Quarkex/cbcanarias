app.directive('appHotelView', function () {

    var template = '<div class="territorial-view">' +
        '<div class="territorial-header" style="background-image: url(\'/files/images/{{ element().IMAGEN }}\');">' +
            '<div class="inner-wrapper">' +
                '<h1>{{  element().TITULO }}</h1>' +
                '<h2>{{  element().ZONA }}</h2>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="territorial-view">' +
        '<div class="row">' +
            '<div class="large-10 large-offset-1 columns">' +
                '<div layout-gt-xs="row" layout="column" class="territorial-info" layout-margin>' +
                    '<md-content bind-html-compile="element().MAPA_IFRAME" flex flex-gt-xs="66" class="territorial-map flex-video"></md-content>' +
                    '<md-card flex flex-gt-xs="33" class="territorial-contact">' +
                        '<md-card-content>' +
                            '<div class="row collapse">' +
                                '<p>{{  element().DIRECCION }}</p>' +
                            '</div>' +
                            '<div ng-if="element().TELEFONO != null" class="row collapse">' +
                                '<p>{{ translate("general.", \'telefono\') | capitalize }}: {{  element().TELEFONO }}</p>' +
                            '</div>' +
                            '<div ng-if="element().FAX != null" class="row collapse">' +
                                '<p>{{ translate("general.", \'fax\') | capitalize }}: {{  element().FAX }}</p>' +
                            '</div>' +
                        '</md-card-content>' +
                        '<md-card-footer>' +
                            '<md-card-actions layout="row" layout-align="begining center">' +
                                '<md-button class="md-primary" ng-href="mailto:{{  element().EMAIL }}">{{ translate("general.", \'email\') }}</md-button>' +
                                '<md-button class="md-primary" ng-href="{{  element().WEB_PROPIA }}">{{ translate("general.", \'website\') }}</md-button>' +
                            '</md-card-actions>' +
                        '</md-card-footer>' +
                    '</md-card>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="row" style="margin-top: 1em;">' +
            '<div class="large-10 large-offset-1 columns">' +
                '<div layout-margin>' +
                    '<h1 class="territorial-services-title">{{ translate(\'general.\', \'servicios_del_establecimiento\') }}</h1>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="row">' +
            '<div class="large-10 large-offset-1 columns">' +
                '<div layout-margin>' +
                    '<div class="row small-up-2 large-up-3" style="margin-left: -0.45em; margin-right: -0.45em;">' +
                        '<div class="services-list column" ng-repeat="(section, section_body) in element().INDICADORES">' +
                            '<h3>{{ translate( \'servicio.seccion_\', section ) | capitalize }}</h3>' +
                            '<ul>' +
                                '<li ng-repeat="item in section_body.contents">' +
                                    '<md-tooltip ng-if="\'categoria\' != section && \'zona_turistica\' != section" md-direction="top">{{ item.label }}</md-tooltip>' +
                                    '<img ng-if="\'categoria\' != section && \'zona_turistica\' != section" ng-src="{{ item.image }}" alt="{{ item.label }}">' +
                                    '<span ng-if="\'categoria\' == section || \'zona_turistica\' == section">{{ item.label }}</span>' +
                                '</li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="row">' +
            '<div class="large-10 large-offset-1 columns">' +
                '<app-related-content></app-related-content>' +
            '</div>' +
        '</div>' +
        '<div class="row">' +
            '<div class="large-10 large-offset-1 columns">' +
                '<div layout-margin>' +
                    '<app-back-bar layout-margin></app-back-bar>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});

