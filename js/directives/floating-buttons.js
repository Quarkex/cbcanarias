app.directive('appFloatingButtons', function () {

    var template = 
    '<div class="tiny button-group show-for-medium hide-for-sr floating-buttons" ng-controller="buttonsCtrl">' +
        '<span ng-if="group != \'undefined\'" ng-repeat="(group, buttons) in elements() | groupBy: \'group\'">' +
            '<span ng-if="!$first" class="button inactive">/</span>' +
            '<a ng-repeat="button in buttons" class="button" href="{{ button.link }}"><img alt="{{ button.name }}" src="/img/buttons/{{ button.name | slugify }}.png"></a>' +
        '</span>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
