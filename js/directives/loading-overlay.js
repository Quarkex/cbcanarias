app.directive('appLoadingOverlay', function () {

    var logo = '<img src="{{ logo }}">';
    logo = '<div layout-margin ng-if="logo != null">' + logo + '</div>';

    var loader = '<md-progress-circular md-mode="indeterminate"></md-progress-circular>';

    var template = logo + loader;
    var template_style = 'position:fixed; top:0; left:0;background: #e6e6e6; width: 100%; height: 100%;';

    template = '<div class="angular-animate" ng-show="showIf" layout="column" layout-align="center center" style="' + template_style + '">' + template + '</div>';

    return {
        scope: { showIf: '=', logo: '='},
        restrict: 'E',
        template: template
    };
});
