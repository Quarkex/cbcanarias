app.directive('appArticleShowcaser', function () {

    var template = '<h1 style="display: inherit;">Noticias</h1>' +
    '<div id="news_contents" class="news" layout="row" ng-controller="showcaseCtrl" layout-wrap layout-padding>' +
        '<div layout="column" flex="100" flex-gt-xs="50" flex-gt-md="20" ng-repeat="article in elements() | limitTo: 5" layout-align="space-between strech">' +
            '<article flex="100" layout="column" layout-padding>' +
                '<figure bind-html-compile="article.figure"></figure>' +
                '<div style="height: 150px; overflow-y: hidden;">' +
                    '<header>' +
                        '<h6><a href="#!/{{ lang() }}/noticias/{{ article.id }}">{{ article.title }}</a></h6>' +
                    '</header>' +
                '</div>' +
                '<small flex="5"><date>{{ article.date | date : translate(\'date.schema\') }}</date></small>' +
                '<div flex="70" bind-html-compile="article.excerpt"></div>' +
                '<footer flex="5">' +
                    '<a href="#!/{{ lang() }}/noticias/{{ article.id }}">leer más</a>' +
                    '<br>' +
                '</footer>' +
            '</article>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        transclude: true,
        template: template
    };
});
