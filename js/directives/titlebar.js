app.directive('appTitlebar', function () {

    var menu_button = '<md-icon class="material-icons">menu</md-icon>';
    menu_button = '<md-button class="left-off-canvas-toggle md-icon-button">' + menu_button + '</md-button>';

    var menu_title = '{{ translate(\'general.\', \'menu\') }}';
    menu_title = '<h1 md-truncate class="md-hue-3">' + menu_title + '</h1>';

    //var language_selector = '<app-language-selector></app-language-selector>';

    //var small_menu = menu_button + menu_title + language_selector;
    var small_menu = '<span hide-gt-md layout="row" layout-align="begin center">' + menu_button + menu_title + '</span>';

    var left_buttons = '<md-button class="md-primary" style="min-width: 1%;" ng-if="link.position == \'left\'" ng-href="{{ link.href.substring(0,4) == \'http\' ? link.href : \'#!/\' + lang() + \'/\' + link.href }}" ng-repeat="(label, link) in nav">{{ label }}</md-button>';
    left_buttons = '<div layout="row" flex>' + left_buttons + '</div>';
    var right_buttons = '<md-button class="md-primary" style="min-width: 1%;" ng-if="link.position == \'right\'" ng-href="{{ link.href.substring(0,4) == \'http\' ? link.href : \'#!/\' + lang() + \'/\' + link.href }}" ng-repeat="(label, link) in nav">{{ label }}</md-button>';
    right_buttons = '<div layout="row">' + right_buttons + '</div>';

    var large_menu = left_buttons + right_buttons;
    large_menu = '<div hide-xs hide-gt-xs show-gt-md layout="row" flex>' + large_menu + '</div>';

    var template = large_menu + small_menu;

    template = '<div class="md-toolbar-tools">' + template + '</div>';
    template = '<md-toolbar class="md-hue-2 title-bar" ng-class="{\'sub-level\': level() > 1 }">' + template + '</md-toolbar>';

    return {
        scope: false,
        restrict: 'E',
        template: template
    };
});
