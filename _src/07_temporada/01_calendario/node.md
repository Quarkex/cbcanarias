---
title: "Calendario"
id: "calendario"
collection: "matches"
"values_list": ['type', 'day_number', 'date', 'hour', 'local_team', 'visitor_team']
"values_view": ['type', 'day_number', 'date', 'hour', 'local_team', 'visitor_team']
"limit": 1000
"language": false
pub: false
---
<div class="page" layout="column" layout-margin>
    <div class="small-12 columns"><h1 class="page-title">Calendario</h1></div>
    <div class="small-12 columns calendar">
        <md-tabs md-selected="0" md-border-bottom md-dynamic-height>
            <md-tab ng-if="type != 'undefined'" ng-repeat="(type, matches) in elements() | orderBy: 'day_number' | groupBy: 'type'">
                <md-tab-label>
                    <img style="max-height: 100%; max-width: 100px;" alt="{{ type }}" src="/img/logos/leagues/{{ type | slugify }}.png" />
                </md-tab-label>
                <md-tab-body>
                    <table>
                        <tbody>
                            <tr>
                                <th class="show-for-medium">Jornada</th>
                                <th>Fecha</th>
                                <th colspan="2">Local</th>
                                <th class="show-for-large"></th>
                                <th colspan="2">Visitante</th>
                            </tr>
                            <tr ng-repeat="match in matches">
                                <td class="show-for-medium"><span class="show-for-large">Jornada </span>{{ match.day_number }}</td>
                                <td>
                                    <span class="hide-for-medium hide-for-sr">Jornada {{ match.day_number }}<br></span>
                                    {{ match.date | date : translate('date.schema') }}
                                    <br>
                                    <strong>{{ match.hour }}</strong>
                                </td>
                                <td>{{ match.local_team }}</td>
                                <td><img ng-if="match.local_team != null && match.local_team != ''" alt="{{ match.local_team }}" src="/img/logos/teams/{{ match.local_team | slugify }}.png"></td>
                                <td class="show-for-large">VS.</td>
                                <td><img ng-if="match.visitor_team != null && match.visitor_team != ''" alt="{{ match_visitor_team }}" src="/img/logos/teams/{{ match.visitor_team | slugify }}.png"></td>
                                <td>{{ match.visitor_team }}</td>
                            </tr>
                        </tbody>
                    </table>
                </md-tab-body>
            </md-tab>
        </md-tabs>
    </div>
</div>
