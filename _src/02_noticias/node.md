---
title: "Noticias"
id: "noticias"
view: "article"
"language": true
"collection": "articles"
"filters": {"published": true}
"values_view": ["figure","id","title","date","content"]
"values_list": ["figure","id","title","date","excerpt"]
"limit": 10
"pub": false
---
<div class="page" layout="column" layout-margin>
    <h1>Noticias</h1>
    <app-paginator-browser>
        <div flex-gt-xs="90" ng-repeat="card in elements()">
            <app-card-article item="card" prefix="node.href"></app-card-article>
        </div>
    </app-paginator-browser>
</div>
