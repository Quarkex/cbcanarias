---
title: Pre mini basket
id: pre_mini_basket
---
<div ng-controller="staticDataCtrl as ctrl">
    <div flex-gt-xs="100" ng-repeat="element in elements()" ng-if="element.title == node.title" bind-html-compile="element.content"></div>
</div>