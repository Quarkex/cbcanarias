---
title: "Todas las noticias"
id: "todas_las_noticias"
---
<div class="page news-list" layout="column" layout-margin>
    <h1>Noticias</h1>
    <app-paginator-browser>
        <div flex-gt-xs="100" ng-repeat="card in elements()">
            <app-card-article item="card" prefix="node.href"></app-card-article>
        </div>
    </app-paginator-browser>
</div>
