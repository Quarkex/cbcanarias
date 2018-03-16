---
id: "elementos_generales"
title: "Elementos generales"
collection: "articles"
---

<div flex="100" layout="row" layout-align="center center" layout-margin>
    <md-content flex="100">
        <md-tabs md-dynamic-height md-border-bottom>

            <md-tab label="Subir archivo">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Subir archivo</h1>

<div class="row">
    <div class="medium-6 medium-offset-3 columns">
        <form action="api/upload_file.rb?response=none" method="POST" enctype="multipart/form-data">
            <div class="row columns">
                <label>Nombre: <input type="text" ng-model="name" placeholder="Nombre del jugador, equipo, liga o similar"></label>
                <input type="hidden" name="name" value="{{ name | slugify }}">
            </div>
            <div class="row columns">
                <label>Tipo:
                    <select name="type">
                        <option value="file">Archivo</option>
                        <option value="ads">Anuncio</option>
                        <option value="banner">Banner</option>
                        <option value="team_member">Foto de miembro</option>
                        <option value="league_logo">Logo de liga</option>
                        <option value="team_logo">Logo de equipo</option>
                        <option value="patreon_logo">Logo de patrocinador</option>
                    </select>
                </label>
            </div>
            <div class="row columns">
                <label>Archivo: <input type="file" name="upload"></label>
            </div>
            <div class="row columns text-right">
                <input class="button" type="submit" value="Subir">
            </div>
        </form>
    </div>
</div>

                </md-content>
            </md-tab>

            <md-tab label="Editar prompter">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Editar prompter</h1>

<div class="row" ng-controller="sliderCtrl">
    <div class="medium-10 medium-offset-1 columns">
        <form action="api/change_headers.rb" method="POST">
            <div class="row column" ng-if="line.content != undefined" ng-repeat="line in elements()">
                <input type="text" name="line" ng-model="line.content">
            </div>
            <div class="row column">
                <input type="text" name="line" ng-model="line.content">
            </div>
            <div class="row column text-right">
                <input class="button" type="submit" value="Guardar">
            </div>
        </form>
    </div>
</div>

                </md-content>
            </md-tab>

        </md-tabs>
    </md-content>
</div>
