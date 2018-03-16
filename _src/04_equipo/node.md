---
title: "Equipo"
id: "equipo"
collection: "team"
pub: false
"language": false
"values_view": ['type', 'name', 'number', 'origin', 'birthdate', 'position', 'height', 'seasons', 'link']
"values_list": ['type', 'name', 'number', 'origin', 'birthdate', 'position', 'height', 'seasons', 'link']
"limit": 1000
---
<div class="page" layout="column" layout-margin>
    <div layout="row"><h1 flex class="page-title">Equipo</h1></div>
    <div flex class="team">
        <md-tabs md-selected="0" md-border-bottom md-dynamic-height>
        <md-tab ng-if="type != 'undefined'" ng-repeat="(type, members) in elements() | orderBy: 'order' | groupBy: 'type'">
            <md-tab-label>{{ type }}</md-tab-label>
            <md-tab-body flex>
                <div flex>
                    <md-grid-list md-cols-xs="1" md-cols-sm="2" md-cols-md="4" md-cols-gt-md="6" md-row-height-gt-md="1:1" md-row-height="2:2" md-gutter="12px">
                        <md-grid-tile ng-repeat="member in members" md-rowspan="1" md-colspan="1">
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
                        </md-grid-tile>
                    </md-grid-list>
                </div>
            </md-tab-body>
        </md-tab>
        </md-tabs>
    </div>
</div>
