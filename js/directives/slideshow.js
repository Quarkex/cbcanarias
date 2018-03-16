app.directive('appSlideshow', function () {

    var template = '' +
       // '<div layout="row"><h2>destacados</h2></div>' +
       '<div ng-controller="slideshowCtrl">' +
           '<slick adaptiveHeight="true" infinite="true" dots="false" arrows="false" data="elements()" init-onload="true" autoplay="true">' +
               '<div class="orbit-slider" ng-repeat="item in elements()">' +
                   '<div bind-html-compile="item.figure"></div>' +
                   '<figcaption class="orbit-caption">' +
                       '<span>{{ item.title.lenght > 60 ? ( item.title | limitTo: 59 ) + \'…\' : item.title }}<br><a href="#!/{{ lang() }}/noticias/{{ item.id }}">Leer más…</a></span>' +
                   '</figcaption>' +
               '</div>' +
           '</slick>' +
       '</div>' +
       '';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
