app.directive('appContentView', function () {

    var template = '<div layout="row" flex>' +
        '<div class="text-justify" layout="column" flex>' +
            '<div class="post-content" bind-html-compile="element().content"></div>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
