app.directive('appInstitutionalBanner', function () {

    var template = '<div flex layout="column" layout-gt-xs="row">' +
        '<div flex flex-gt-xs="50" layout="column" layout-align="center center">' +
            '<a href="#"><img src="/img/ads/Imberostar-H.gif"></a>' +
        '</div>' +
        '<div flex flex-gt-xs="50" layout="column" layout-align="center center">' +
            '<a href="#"><img src="/img/ads/Tenerife.gif"></a>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
