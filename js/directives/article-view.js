app.directive('appArticleView', function () {

    var template = '<div layout="row" flex>' +
        '<div class="post-content text-justify" layout="column" flex>' +
            '<div ng-if="(element().image != null || element().video != null)" class="post-figure" bind-html-compile="element().figure"></div>' +
            '<div><h1 class="post-title" ng-bind="element().title"></h1></div>' +
            '<span class="post-date" ng-bind="element().date | date : translate(\'date.schema\')"></span>' +
            '<div bind-html-compile="element().content"></div>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});


