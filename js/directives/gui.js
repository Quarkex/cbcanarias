app.directive('appGui', function () {

    var template = 
        '<app-header class="hide-for-print"></app-header>' +
        '<app-titlebar class="hide-for-print"></app-titlebar>' +
        '<app-sliding-banner class="hide-for-print"></app-sliding-banner>' +
        '<div ng-transclude flex layout="column" class="main"></div>';
    template = '<div layout="column" flex flex-gt-xs="90">' + template + '</div>';
    template = '<div layout="row" flex="100" layout-align="center start" style="min-height: 100vh;">' + template + '</div>';

    template = '<app-off-canvas class="content-wrapper" flex="100" layout="column">' + template + '<app-footer></app-footer>' + '</app-off-canvas>';

    return {
        restrict: 'E',
        scope: false,
        transclude: true,
        template: template
    };
});
