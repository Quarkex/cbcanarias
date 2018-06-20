app.directive('appSocialMedia', function () {

    var template = '' + //'<h2>Redes</h2>' +
    '<div flex="100" layout="column" layout-gt-md="row" layout-wrap>' +
        '<div flex="100" flex-gt-md="65">' +
            '<div class="flex-video"><iframe src="http://www.youtube.com/embed/?listType=user_uploads&list=Canarias1939" width="480" height="400"></iframe></div>' +
        '</div>' +
        '<div flex="100" flex-gt-md="5"></div>' +
        '<div flex="100" flex-gt-md="30">' +
            '<a class="twitter-timeline" data-height="560" href="https://twitter.com/CB1939Canarias?ref_src=twsrc%5Etfw">Tweets by CB1939Canarias</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' +
        '</div>' +
    '</div>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});
