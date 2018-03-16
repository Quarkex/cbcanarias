app.directive('appCardSimple', function () {

    var href = '{{ item.RECURSOS[0].RECURSO.substring(0,4) == \'http\' ? item.RECURSOS[0].RECURSO : \'/files/images/\' + item.RECURSOS[0].RECURSO }}';

    var text = '<h1 ng-bind="item.TITULO"></h1>' + '<p bind-html-compile="item.DESCRIPCION_COMUN"></p>';
    text = '<div flex>' + text + '</div>';

    var image = '<div class="square" style="background-image: url(/files/images/{{ item.IMAGEN }})"></div>';

    var template = image + text;
    template = '<a layout="row" flex ng-href="' + href + '" layout-margin>' + template + '</a>';
    template = '<div layout="row" class="row video-list">' + template + '</div>';

    return {
        restrict: 'E',
        scope: {
            item: '=',
        },
        template: template
    };
});
