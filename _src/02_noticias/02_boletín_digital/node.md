---
title: "Boletín digital"
id: "boletin_digital"
---
<div ng-controller="staticDataCtrl as ctrl">
    <div flex-gt-xs="100" ng-repeat="element in elements()" ng-if="element.title == node.title" bind-html-compile="element.content"></div>
</div>
