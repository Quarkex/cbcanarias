app.directive('appPoster', function () {

    var template = '<div layout="column" flex="100" layout-align="begin strech">'+
        // '<div layout="row"><h2>Eventos</h2></div>' +
        '<div layout="row" layout-align="center center" ng-controller="posterCtrl">' +
            '<a ng-if="elements()[0].href == null" ng-href="#!/{{ lang() }}/noticias/{{ elements()[0].id }}"><img alt="{{ elements()[0].title }}" src="/img/events/{{ elements()[0].id }}.png"></a>' +
            '<a ng-if="elements()[0].href != null" ng-href="{{ elements()[0].href }}"><img alt="{{ elements()[0].title }}" src="/img/events/{{ elements()[0].id }}.png"></a>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
