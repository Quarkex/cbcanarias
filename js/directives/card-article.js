app.directive('appCardArticle', function () {

    var template = '<article layout-gt-xs="row" layout="column" flex>' +
        '<div flex="100" flex-gt-xs="33">' +
            '<figure bind-html-compile="item.figure"></figure>' +
        '</div>' +
        '<div flex="100" flex-gt-xs="66" layout="column">' +
            '<header>' +
                '<h4 ng-if="article.href == null"><a ng-href="{{ prefix }}/{{ item.id }}">{{ item.title }}</a></h4>' +
                '<h4 ng-if="article.href != null"><a ng-href="{{ tiem.href }}">{{ item.title }}</a></h4>' +
            '</header>' +
            '<small><date>{{ item.date | date }}</date></small>' +
            '<span class="item-content" bind-html-compile="item.excerpt"></span>' +
            '<footer>' +
                '<a  ng-if="article.href == null" ng-href="{{ prefix }}/{{ item.id }}">Leer más</a><br>' +
                '<a  ng-if="article.href != null" ng-href="{{ item.href }}">Leer más</a><br>' +
            '</footer>' +
        '</div>' +
        '<div hide-xs show-gt-xs style="margin-right: 2.5em;">' +
        '</div>' +
    '</article>';

    return {
        restrict: 'E',
        scope: {
            item: '=',
            prefix: '='
        },
        template: template
    };
});
