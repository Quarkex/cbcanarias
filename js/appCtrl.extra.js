app.controller("footerCtrl", function($scope, $mdDialog) {
    $scope.showDialog = function ( ev ){
        $mdDialog.show({
            controller: 'footerCtrl',
            templateUrl: $scope.dialog,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
});

app.service('slider', ["language", "$resource", ResourcePaginator]);
app.controller("sliderCtrl", function($rootScope, $scope, slider) {

    slider.expose_interface($scope);

    slider.set_values({
        "language": '',
        "pub": false,
        "collection": "slider",
        "filters": {},
        "values": [ "content" ],
        "offset": 0,
        "limit": 0
    });

    $rootScope['slider_status'] = slider.element_status;
});

app.service('patreons', ["language", "$resource", ResourcePaginator]);
app.controller("patreonsCtrl", function($rootScope, $scope, patreons) {

    patreons.expose_interface($scope);

    patreons.set_values({
        "language": '',
        "pub": false,
        "collection": "patreons",
        "filters": {"featured": true},
        "values": [ "name", "link", "weight" ],
        "offset": 0,
        "limit": 0
    });

    $rootScope['patreons_status'] = patreons.element_status;
});

app.service('patreonsFooter', ["language", "$resource", ResourcePaginator]);
app.controller("patreonsFooterCtrl", function($rootScope, $scope, patreonsFooter) {

    patreonsFooter.expose_interface($scope);

    patreonsFooter.set_values({
        "language": '',
        "pub": false,
        "collection": "patreons",
        "filters": {"in_footer": true},
        "values": [ "name", "link", "weight" ],
        "offset": 0,
        "limit": 0
    });

    $rootScope['patreons_footer_status'] = patreonsFooter.element_status;
});

app.service('patreonsScroll', ["language", "$resource", ResourcePaginator]);
app.controller("patreonsScrollCtrl", function($rootScope, $scope, patreonsScroll) {

    patreonsScroll.expose_interface($scope);

    patreonsScroll.set_values({
        "language": '',
        "pub": false,
        "collection": "patreons",
        "filters": {"scrolleable": true},
        "values": [ "name", "link", "weight" ],
        "offset": 0,
        "limit": 0
    });

    $rootScope['patreons_scroll_status'] = patreonsScroll.element_status;
});

app.service('slideshow', ["language", "$resource", ResourcePaginator]);
app.controller("slideshowCtrl", function($rootScope, $scope, slideshow) {

    slideshow.expose_interface($scope);

    slideshow.set_values({
        "language": $scope.lang(),
        "pub": false,
        "collection": "articles",
        "filters": {"slider": true, "published": true},
        "values": [ "video", "figure", "id", "title", "date", "excerpt" ],
        "offset": 0,
        "limit": 5
    });

    $rootScope['slideshow_status'] = slideshow.element_status;

});

app.service('showcase', ["language", "$resource", ResourcePaginator]);
app.controller("showcaseCtrl", function($rootScope, $scope, showcase) {

    showcase.expose_interface($scope);

    showcase.set_values({
        "language": $scope.lang(),
        "pub": false,
        "collection": "articles",
        "filters": {"showcaser": true, "published": true},
        "values": [ "figure", "id", "title", "date", "excerpt" ],
        "offset": 0,
        "limit": 5
    });

    $rootScope['showcase_status'] = showcase.element_status;

});

app.service('poster', ["language", "$resource", ResourcePaginator]);
app.controller("posterCtrl", function($rootScope, $scope, poster) {

    poster.expose_interface($scope);

    poster.set_values({
        "language": $scope.lang(),
        "pub": false,
        "collection": "articles",
        "filters": {'event': true, "published": true},
        "values": ["id","figure", "title"],
        "offset": 0,
        "limit": 1
    });

    $rootScope['poster_status'] = poster.element_status;

});

app.service('buttons', ["language", "$resource", ResourcePaginator]);
app.controller("buttonsCtrl", function($rootScope, $scope, buttons) {

    buttons.expose_interface($scope);

    buttons.set_values({
        "language": '',
        "pub": false,
        "collection": "buttons",
        "filters": {},
        "values": [],
        "offset": 0,
        "limit": 0
    });
});

app.service('staticData', ["language", "$resource", ResourcePaginator]);
app.controller("staticDataCtrl", function($rootScope, $scope, staticData) {

    staticData.expose_interface($scope);

    staticData.set_values({
        "language": '',
        "pub": false,
        "collection": "static",
        "filters": {},
        "values": [ "id", "title", "content" ],
        "offset": 0,
        "limit": 0
    });
});
