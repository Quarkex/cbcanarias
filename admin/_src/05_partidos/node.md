---
id: "partidos"
title: "Partidos"
collection: "matches"
values_list: ['ID', 'type', 'day_number', 'date', 'hour', 'local_team', 'visitor_team']
values_view: ['ID', 'type', 'day_number', 'date', 'hour', 'local_team', 'visitor_team']
pub: false
limit: 1000
---

<div flex="100" layout="row" layout-align="center center" layout-margin>
    <md-content flex="100">
        <md-tabs md-dynamic-height md-border-bottom>

            <md-tab label="Editar partidos">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Editar partidos</h1>
<form method="POST" action="api/set_calendar.rb">
    <div class="row small-up-3 medium-up-6" ng-repeat="match in elements() | orderBy : 'day_number'">
        <input type="hidden" name="match_{{ $index }}_ID" ng-model="match.ID">
        <div class="column"><label> Liga:             <input type="text"   name="match_{{ $index }}_type"         placeholder="Liga"               ng-model="match.type"        ></label></div>
        <div class="column"><label> Jornada:          <input type="text"   name="match_{{ $index }}_day_number"   placeholder="Jornada"            ng-model="match.day_number"  ></label></div>
        <div class="column"><label> Fecha:            <input type="text"   name="match_{{ $index }}_date"         placeholder="Fecha (DD/MM/AAAA)" ng-model="match.date"        ></label></div>
        <div class="column"><label> Hora:             <input type="text"   name="match_{{ $index }}_hour"         placeholder="Hora (HH:MM)"       ng-model="match.hour"        ></label></div>
        <div class="column"><label> Equipo local:     <input type="text"   name="match_{{ $index }}_local_team"   placeholder="Equipo local"       ng-model="match.local_team"  ></label></div>
        <div class="column"><label> Equipo visitante: <input type="text"   name="match_{{ $index }}_visitor_team" placeholder="Equipo visitante"   ng-model="match.visitor_team"></label></div>
    </div>
    <div class="row small-up-3 medium-up-6" ng-repeat="empty in empty_rows track by $index">
        <div class="column"><label> Liga:             <input type="text"   name="match_{{ $index + elements().length }}_type"         placeholder="Liga"              ></label></div>
        <div class="column"><label> Jornada:          <input type="text"   name="match_{{ $index + elements().length }}_day_number"   placeholder="Jornada"           ></label></div>
        <div class="column"><label> Fecha:            <input type="text"   name="match_{{ $index + elements().length }}_date"         placeholder="Fecha (DD/MM/AAAA)"></label></div>
        <div class="column"><label> Hora:             <input type="text"   name="match_{{ $index + elements().length }}_hour"         placeholder="Hora (HH:MM)"      ></label></div>
        <div class="column"><label> Equipo local:     <input type="text"   name="match_{{ $index + elements().length }}_local_team"   placeholder="Equipo local"      ></label></div>
        <div class="column"><label> Equipo visitante: <input type="text"   name="match_{{ $index + elements().length }}_visitor_team" placeholder="Equipo visitante"  ></label></div>
    </div>
    <div class="row column text-right">
        <input class="button" type="submit" value="Guardar">
    </div>
</form>

                </md-content>
            </md-tab>

        </md-tabs>
    </md-content>
</div>
