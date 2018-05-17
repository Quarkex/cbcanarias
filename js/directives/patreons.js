app.directive('appPatreons', function () {

    var template = '' +
    '<div flex="100" layout="column" class="patreons" ng-controller="patreonsCtrl">' +
        '<a flex ng-repeat="patreon in elements() | orderBy: \'weight\'" ng-href="{{ patreon.link }}" style="text-align: right;"><img ng-src="/img/patreons/{{ patreon.name | slugify }}.png" alt="{{ patreon.name }}"></a>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
