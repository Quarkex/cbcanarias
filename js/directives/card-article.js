app.directive('appCardArticle', function () {

    var template = '<article layout-gt-xs="row" layout="column" flex>' +
        '<div flex="100" flex-gt-xs="33">' +
            '<figure bind-html-compile="item.figure"></figure>' +
        '</div>' +
        '<div flex="100" flex-gt-xs="66" layout="column">' +
            '<header>' +
                '<h4><a href="{{ prefix }}/{{ item.id }}">{{ item.title }}</a></h4>' +
            '</header>' +
            '<small><date>{{ item.date | date }}</date></small>' +
            '<span class="item-content" bind-html-compile="item.excerpt"></span>' +
            '<footer>' +
                '<a href="{{ prefix }}/{{ item.id }}">Leer más</a><br>' +
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
