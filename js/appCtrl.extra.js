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

    $rootScope['patreons_status'] = patreonsScroll.element_status;
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
