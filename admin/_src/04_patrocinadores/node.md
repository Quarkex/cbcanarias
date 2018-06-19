---
id: "patrocinadores"
title: "Patrocinadores"
collection: "patreons"
values_list: [ "name", "type", "link", "ID", "scrolleable", "weight" ]
values_view: [ "name", "type", "link", "ID", "scrolleable", "weight" ]
view: "patreon-editor"
pub: false
---

<div flex="100" layout="row" layout-align="center center" layout-margin>
    <md-content flex="100">
        <md-tabs md-dynamic-height md-border-bottom>

            <md-tab label="Editar patrocinadores">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Editar patrocinadores</h1>

<div class="page" layout="column">
    <div flex class="team">
        <md-tabs md-selected="0" md-border-bottom md-dynamic-height>
        <md-tab ng-if="type != 'undefined'" ng-repeat="(type, patreons) in elements() | groupBy: 'type'">
            <md-tab-label>{{ type }}</md-tab-label>
            <md-tab-body flex>
                <div flex>
                    <md-grid-list md-cols-xs="1" md-cols-sm="2" md-cols-md="4" md-cols-gt-md="6" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px">
                        <md-grid-tile ng-repeat="patreon in patreons" md-rowspan="1" md-colspan="1">
                            <a style="margin: 0;" ng-href="/admin/#!/{{ lang() }}/patrocinadores/{{ patreon.ID }}">
                                <md-content flex>
                                    <figure class="fader-caption" flex style="background-color: rgba(255,255,255,0.5);background-image: url('/img/patreons/{{ patreon.name | slugify }}.png');background-position: center center; background-repeat: no-repeat; background-size: contain;">
                                        <figcaption layout="column" layout-align="center center">
                                        <h6>{{ patreon.name }}</h6>
                                        <a ng-if="patreon.link != undefined" href="{{ patreon.link }}"><span class="button label">Enlace</span></a>
                                        </figcaption>
                                    </figure>
                                </md-content>
                            </a>
                        </md-grid-tile>
                    </md-grid-list>
                </div>
            </md-tab-body>
        </md-tab>
        </md-tabs>
    </div>
</div>
                </md-content>
            </md-tab>

            <md-tab label="Nuevo patrocinador">
                <md-content layout="row" layout-wrap layout-padding>
                    <h1 flex="100" class="md-display-2">Nuevo patrocinador</h1>

                    <div layout="row" ng-init="patreon = {'weight': 50};" layout-align="center center" layout-wrap>
                        <form flex="100" method="POST" enctype="multipart/form-data" action="api/set_patreon.rb" layout="row" layout-wrap>
                            <input type="hidden" name="IDIOMA"     value="{{ lang() }}"                required>
                            <input type="hidden" name="image_name" value="{{ patreon.name | slugify }}" required>
                            <md-input-container flex="100" flex-gt-sm="50" ng-repeat="(label, data) in 
                                {
                                    'Nombre':                   ['text',     'name',        true ],
                                    'Tipo':                     ['text',     'type',        true ],
                                    'Visible en slider':        ['checkbox', 'scrolleable', false],
                                    'Destacado':                ['checkbox', 'featured',    false],
                                    'Peso':                     ['number',   'weight',      false],
                                    'Enlace':                   ['text',     'link',        false]
                                }
                            ">
                                <label ng-if="data[0] != 'checkbox'">{{ label }}</label>

                                <md-checkbox flex="100" ng-model="patreon[data[1]]" ng-if="data[0] == 'checkbox'" ng-required="data[2]">{{ label }}</md-checkbox>
                                <input ng-if="data[0] == 'checkbox'" type="hidden"  name="{{ data[1] }}" value="{{ patreon[data[1]] }}" ng-required="data[2]">

                                <input flex="100" type="{{ data[0] }}" name="{{ data[1] }}" ng-model="patreon[data[1]]" ng-if="data[0] != 'checkbox'" ng-required="data[2]">

                            </md-input-container>

                            <md-input-container flex="100" flex-gt-sm="50">
                                <label>Imagen</label>
                                <input class="button" type="file" name="upload">
                            </md-input-container>

                            <div layout="row" layout-align="end center" flex="100">
                                <input class="md-button md-primary md-raised" type="submit" value="Guardar nuevo patrocinador">
                            </div>
                        </form>
                    </div>

                </md-content>
            </md-tab>

        </md-tabs>
    </md-content>
</div>
