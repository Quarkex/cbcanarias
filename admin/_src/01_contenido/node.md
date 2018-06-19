---
id: "contenido"
title: "Contenido"
collection: "static"
values_view: [ "id", "title", "content" ]
values_list: [ "id", "title", "content" ]
view: "content-editor"
pub: false
limit: 1000
---

<div flex="100" layout="row" layout-align="center center" layout-margin>
    <md-content flex="100">
        <md-tabs md-dynamic-height md-border-bottom>

            <md-tab label="Editar contenido">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Editar contenido</h1>

                    <app-paginator-browser>
                        <div flex-gt-xs="40" ng-repeat="card in elements() | orderBy: 'title'">
                            <app-card-content item="card" prefix="node.href"></app-card-content>
                        </div>
                    </app-paginator-browser>

                </md-content>
            </md-tab>

            <md-tab label="Nuevo contenido">
                <form method="POST" enctype="multipart/form-data" action="api/publish_content.rb">
                    <md-content class="md-padding" ng-init="content = {'title': 'Nuevo contenido'};">

                        <md-toolbar class="md-menu-toolbar">
                            <div layout="row">
                                <div flex="100" layout="row" layout-wrap>
                                    <h2 md-truncate flex="100" class="md-toolbar-tools" ng-click="toolbar.changeName(content, $event)">{{ content.title }}</h2>
                                </div>

                            </div>
                        </md-toolbar>
                        <div flex layout="row" layout-wrap>
                            <div layout="row" flex="100">
                                <div style="min-height: 50vh; width: 100%; padding: 1em;" class="content-content md-whiteframe-1dp" ng-model="content.content" ckeditor="options" ready="onReady()" contenteditable="true"></div>
                                <input type="hidden" name="title" value="{{ content.title }}">
                                <input type="hidden" name="content" value="{{ content.content }}">
                            </div>
                            <div layout="row" flex="100" layout-align="end">
                                <input class="md-button" type="submit" value="Guardar">
                            </div>
                        </div>

                    </md-content>
                </form>
            </md-tab>

        </md-tabs>
    </md-content>
</div>
