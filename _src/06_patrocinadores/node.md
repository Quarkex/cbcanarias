---
title: "Patrocinadores"
id: "patrocinadores"
collection: "patreons"
values-view: ["type", "name", "link","weight", "in_page"]
values-list: ["type", "name", "link","weight", "in_page"]
pub: false
limit: 0
---
<div class="page patreons" layout="row" layout-margin layout-wrap>
    <div flex="100"><h1 class="page-title">Patrocinadores</h1></div>
    <div layout="row" flex="100" ng-if="type != 'undefined'" ng-repeat="(type, patreons) in elements() | filter:true:in_page | orderBy:'weight' | groupBy: 'type'" layout-wrap>
        <div flex="100">
            <h2>{{ type }}</h2>
        </div>
        <div class="patreons-icons" flex="100" layout="row" layout-wrap layout-padding layout-align="center center">
            <div ng-if="type == 'Empresas Colaboradoras'" flex="100" flex-gt-sm="50" flex-gt-md="20" class="column centered" ng-repeat="patreon in patreons">
                <a href="{{ patreon.link }}"><img alt="{{ patreon.name }}" src="/img/patreons/{{ patreon.name | slugify }}.png"></a>
            </div>
            <div ng-if="type != 'Empresas Colaboradoras'" flex="100" flex-gt-sm="50" flex-gt-md="25" class="column centered" ng-repeat="patreon in patreons">
                <a href="{{ patreon.link }}"><img alt="{{ patreon.name }}" src="/img/patreons/{{ patreon.name | slugify }}.png"></a>
            </div>
        </div>
    </div>
</div>
