app.directive('appTitlebar', function () {

    var menu_button = '<md-icon class="material-icons">menu</md-icon>';
    menu_button = '<md-button class="left-off-canvas-toggle md-icon-button">' + menu_button + '</md-button>';

    var menu_title = '{{ translate(\'general.\', \'menu\') }}';
    menu_title = '<h1 md-truncate class="md-hue-3">' + menu_title + '</h1>';

    //var language_selector = '<app-language-selector></app-language-selector>';

    //var small_menu = menu_button + menu_title + language_selector;
    var small_menu = '<span hide-gt-md layout="row" layout-align="begin center">' + menu_button + menu_title + '</span>';

    var permanent_class = "md-primary";
    var current_condition = 'sections()[sections().length -1] == link.href.split(\'/\').pop()';
    var ng_class='ng-class=" ' + current_condition + ' ? \'' + permanent_class + ' active' + '\' : \'' + permanent_class + '\'"';
    var ng_href='ng-href="{{ link.href.substring(0,4) == \'http\' ? link.href : \'#!/\' + lang() + \'/\' + link.href }}"';
    var sublink_ng_href='ng-href="{{ sublink.href.substring(0,4) == \'http\' ? sublink.href : \'#!/\' + lang() + \'/\' + sublink.href }}"';
    var at_left = 'ng-if="link.position == \'left\'"';
    var at_right = 'ng-if="link.position == \'right\'"';
    var with_sublinks = 'ng-if="link.sublinks.length > 0"';
    var without_sublinks = 'ng-if="link.sublinks.length == 0"';
    var open_menu = 'ng-click="$mdMenu.open()"';

    var button = '<md-button ' + without_sublinks + ' ' + ng_class + ' ' + ng_href + '>{{ label }}</md-button>' +
        '<md-menu ' + with_sublinks + '>' +
            '<md-button ' + open_menu + ' ' + ng_class + '>{{ label }}</md-button>' +
            '<md-menu-content width="4">' +
                '<md-menu-item ng-repeat="sublink in link.sublinks">' +
                    '<md-button ' + sublink_ng_href + '>{{ sublink.title }}</md-button>' +
                '</md-menu-item>' +
            '</md-menu-content>' +
        '</md-menu>';

    var left_buttons = '<div ng-repeat="(label, link) in nav" style="min-width: 1%;" ' + at_left + '>' + button + '</div>';
    left_buttons = '<div layout="row" flex>' + left_buttons + '</div>';
    var right_buttons = '<div ng-repeat="(label, link) in nav" style="min-width: 1%;" ' + at_right + '>' + button + '</div>';
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
