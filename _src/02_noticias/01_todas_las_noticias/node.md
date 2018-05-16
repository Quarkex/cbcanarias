---
title: "Todas las noticias"
id: "todas_las_noticias"
view: "article"
"language": true
"collection": "articles"
"filters": {"published": true}
"values_view": ["video","image","figure","id","title","date","content"]
"values_list": ["video","image","figure","id","title","date","excerpt"]
"limit": 10
"pub": false
---
<div class="page news-list" layout="column" layout-margin>
    <h1>Noticias</h1>
    <app-paginator-browser>
        <div flex-gt-xs="100" ng-repeat="card in elements()">
            <app-card-article item="card" prefix="node.href"></app-card-article>
        </div>
    </app-paginator-browser>
</div>
