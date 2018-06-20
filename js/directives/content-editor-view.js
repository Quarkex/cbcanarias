app.directive('appContentEditorView', function () {

    var template = '' + 
    '<form method="POST" enctype="multipart/form-data" action="api/publish_content.rb">' +
        '<md-content class="md-padding" ng-repeat="content in elements()">' +

            '<md-toolbar class="md-menu-toolbar">' +
                '<div layout="row">' +
                    '<div flex="100" layout="row" layout-wrap>' +
                        '<h2 md-truncate flex="100" class="md-toolbar-tools" ng-click="toolbar.changeName(content, $event)">{{ content.title }}</h2>' +
                    '</div>' +

                '</div>' +
            '</md-toolbar>' +
            '<div flex layout="row" layout-wrap>' +
                '<div layout="row" flex="100">' +
                    '<div style="min-height: 50vh; width: 100%; padding: 1em;" class="content-content md-whiteframe-1dp" ng-model="content.content" ckeditor="ckOptions" ready="onReady()" contenteditable="true"></div>' +
                    '<input type="hidden" name="title" value="{{ content.title }}">' +
                    '<input type="hidden" name="id" value="{{ content.id }}">' +
                    '<input type="hidden" name="content" value="{{ content.content }}">' +
                '</div>' +
                '<div layout="row" flex="100" layout-align="end">' +
                    '<a class="md-button md-warn" ng-click="remove_content(content);">Borrar contenido</a>' +
                    '<input class="md-button" type="submit" value="Guardar">' +
                '</div>' +
            '</div>' +

        '</md-content>' +
    '</form>';

    return {
        restrict: 'E',
        scope: false,
        template: template
    };
});


