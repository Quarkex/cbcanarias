app.directive('appAdsBanner', function () {

    var template = '' +
    '<div flex flex-gt-xs="50" layout="column" layout-align="center center">' +
        '<a href="#"><img src="/img/ads/01.gif"></a>' +
    '</div>' +
    '<div flex flex-gt-xs="50" layout="column" layout-align="center center">' +
        '<a href="#"><img src="/img/ads/02.gif"></a>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
