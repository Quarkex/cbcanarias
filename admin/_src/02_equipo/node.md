---
id: "equipo"
title: "Equipo"
collection: "team"
values_list: [ "name", "type", "number", "seasons", "origin", "birthdate", "position", "height", "link", "ID" ]
values_view: [ "name", "type", "number", "seasons", "origin", "birthdate", "position", "height", "link", "ID" ]
view: "team-member-editor"
pub: false
---

<div flex="100" layout="row" layout-align="center center" layout-margin>
    <md-content flex="100">
        <md-tabs md-dynamic-height md-border-bottom>

            <md-tab label="Editar miembros">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Editar miembros</h1>

<div class="page" layout="column">
    <div flex class="team">
        <md-tabs md-selected="0" md-border-bottom md-dynamic-height>
        <md-tab ng-if="type != 'undefined'" ng-repeat="(type, members) in elements() | groupBy: 'type'">
            <md-tab-label>{{ type }}</md-tab-label>
            <md-tab-body flex>
                <div flex>
                    <md-grid-list md-cols-xs="1" md-cols-sm="2" md-cols-md="4" md-cols-gt-md="6" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px">
                        <md-grid-tile ng-repeat="member in members" md-rowspan="1" md-colspan="1">
                            <a style="margin: 0;" ng-href="/admin/#!/{{ lang() }}/equipo/{{ member.ID }}">
                                <md-content flex>
                                    <figure class="fader-caption" flex>
                                        <img alt="{{ member.name }}" src="/img/team/{{ member.name | slugify }}.png">
                                        <figcaption layout="column" layout-align="center center">
                                        <h6>{{ member.name }}</h6>
                                        <p>
                                        <span ng-if="member.number != undefined">Nº: {{member.number}}</span>
                                        <span ng-if="member.number != undefined && member.origin != undefined">, </span>
                                        <span ng-if="member.origin != undefined">{{member.origin}}</span>
                                        <span ng-if="member.origin != undefined && member.birthdate != undefined">, </span>
                                        <span ng-if="member.birthdate != undefined">{{member.birthdate}}</span>
                                        </p>
                                        <p>
                                        <span ng-if="member.position != undefined">{{member.position}}</span>
                                        <span ng-if="member.position != undefined && member.height != undefined">, </span>
                                        <span ng-if="member.height != undefined">{{member.height}}</span>
                                        </p>
                                        <p>
                                        <span ng-if="member.seasons != undefined">Temporadas: {{member.seasons}}</span>
                                        </p>
                                        <a ng-if="member.link != undefined" href="{{ member.link }}"><span class="button label">+Info</span></a>
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

            <md-tab label="Nuevo miembro">
                <md-content layout="row" layout-wrap layout-padding>
                    <h1 flex="100" class="md-display-2">Nuevo miembro</h1>

                    <div layout="row" ng-init="member = {};" layout-align="center center" layout-wrap>
                        <form flex="100" method="POST" enctype="multipart/form-data" action="api/set_member.rb" layout="row" layout-wrap>
                            <input type="hidden" name="IDIOMA"     value="{{ lang() }}"                required>
                            <input type="hidden" name="image_name" value="{{ member.name | slugify }}" required>
                            <md-input-container flex="100" flex-gt-sm="50" ng-repeat="(label, data) in 
                                {
                                    'Nombre':                   ['text',   'name',      true ],
                                    'Tipo':                     ['text',   'type',      true ],
                                    'Número':                   ['text',   'number',    false],
                                    'Temporadas':               ['text',   'seasons',   false],
                                    'Origen':                   ['text',   'origin',    false],
                                    'Fecha de nacimiento':      ['text',   'birthdate', false],
                                    'Posición':                 ['text',   'position',  false],
                                    'Altura':                   ['text',   'height',    false],
                                    'Enlace a más información': ['text',   'link',      false]
                                }
                            ">
                                <label>{{ label }}</label>
                                <input flex="100" ng-type="data[0]" name="{{ data[1] }}" ng-model="member[data[1]]" ng-if="data[2]" required>
                                <input flex="100" ng-type="data[0]" name="{{ data[1] }}" ng-model="member[data[1]]" ng-if="!data[2]">
                            </md-input-container>

                            <md-input-container flex="100" flex-gt-sm="50">
                                <label>Fotografía</label>
                                <input class="button" type="file" name="upload">
                            </md-input-container>

                            <div layout="row" layout-align="end center" flex="100">
                                <input class="md-button md-primary md-raised" type="submit" value="Guardar nuevo miembro">
                            </div>
                        </form>
                    </div>

                </md-content>
            </md-tab>

        </md-tabs>
    </md-content>
</div>
