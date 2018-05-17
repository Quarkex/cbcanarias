---
"title": "Inicio"
"collection": "articles"
"limit": 1
---

<div flex="100" layout="column" layout-align="center strech" layout-margin>
    <div layout="column" layout-gt-xs="row" layout-padding>
        <app-slideshow flex></app-slideshow>
        <div layout="row" flex>
            <app-poster flex="50" ng-controller="posterCtrl"></app-poster>
            <app-patreons flex="50"></app-patreons>
        </div>
    </div>
    <div layout="row" layout-padding>
        <app-patreon-slider flex="100"></app-patreon-slider>
    </div>
    <div layout="row" layout-padding>
        <app-social-media hide-xs hide-gt-xs show-gt-md flex="100"></app-social-media>
    </div>
    <div layout="row" layout-padding>
        <app-ads-banner flex="100"></app-ads-banner>
    </div>
    <div layout="row" layout-padding>
        <app-article-showcaser flex="100"></app-article-showcaser>
    </div>
</div>
