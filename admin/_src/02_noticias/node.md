---
id: "noticias"
title: "Noticias"
collection: "articles"
values_view: [ "id", "title", "figure", "excerpt", "content", "date", "published", "slider", "showcaser", "event" ]
values_list: [ "id", "title", "figure", "excerpt", "content", "date", "published", "slider", "showcaser", "event" ]
view: "article-editor"
pub: false
limit: 20
---

<div flex="100" layout="row" layout-align="center center" layout-margin>
    <md-content flex="100">
        <md-tabs md-dynamic-height md-border-bottom>

            <md-tab label="Nueva noticia">
                <form method="POST" enctype="multipart/form-data" action="api/publish_article.rb">
                    <md-content class="md-padding" ng-init="article = {'date': Date(), 'title': 'Nueva noticia', 'published': false, 'showcaser': false, 'slider': false, 'event': false};">

                        <md-toolbar class="md-menu-toolbar">
                            <div layout="row">
                                <div flex="100" layout="row" layout-wrap>
                                    <h2 md-truncate flex="100" class="md-toolbar-tools" ng-click="toolbar.changeName(article, $event)">{{ article.title }}</h2>

                                    <md-menu-bar flex="100">

                                        <md-menu>
                                            <button ng-click="$mdMenu.open()">
                                                Noticia
                                            </button>
                                            <md-menu-content>

                                                <md-menu-item>
                                                    <md-button ng-click="toolbar.changeName(article, $event)">
                                                        Modificar título
                                                    </md-button>
                                                </md-menu-item>

                                                <md-menu-item>
                                                    <md-button ng-click="toolbar.changeExcerpt(article, $event)">
                                                        Modificar resumen
                                                    </md-button>
                                                </md-menu-item>

                                                <md-menu-item>
                                                    <md-button ng-click="toolbar.changeDate(article, $event)">
                                                        Modificar fecha
                                                    </md-button>
                                                </md-menu-item>

                                            </md-menu-content>
                                        </md-menu>

                                        <md-menu>
                                            <button ng-click="$mdMenu.open()">
                                                Visibilidad
                                            </button>
                                            <md-menu-content width="3">

                                                <md-menu-item type="checkbox" ng-model="article.published">Publicado</md-menu-item>

                                                <md-menu-item type="checkbox" ng-model="article.event">Evento</md-menu-item>

                                                <md-menu-item type="checkbox" ng-model="article.slider">Slider</md-menu-item>

                                                <md-menu-item type="checkbox" ng-model="article.showcaser">Showcaser</md-menu-item>

                                            </md-menu-content>
                                        </md-menu>

                                        <md-menu>
                                            <button ng-click="$mdMenu.open()">
                                                Archivos
                                            </button>
                                            <md-menu-content width="3">

                                                <md-menu-item>
                                                    <md-button ng-click="toolbar.changeVideo($event)">
                                                        Modificar vídeo
                                                    </md-button>
                                                </md-menu-item>

                                                <md-menu-divider></md-menu-divider>
                                                <md-menu-item>
                                                    <span style="white-space: nowrap;">Imagen: <input name="article_image" type="file"></span>
                                                </md-menu-item>

                                                <md-menu-divider></md-menu-divider>
                                                <md-menu-item>
                                                    <span style="white-space: nowrap;">Poster: <input name="event_image" type="file"></span>
                                                </md-menu-item>

                                            </md-menu-content>
                                        </md-menu>

                                    </md-menu-bar>

                                </div>

                            </div>
                        </md-toolbar>
                        <div flex layout="row" layout-wrap>
                            <div layout="row" flex="100">
                                <div style="min-height: 50vh; width: 100%; padding: 1em;" class="article-content md-whiteframe-1dp" ng-model="article.content" ckeditor="ckOptions" ready="onReady()" contenteditable="true"></div>
                                <input type="hidden" name="title" value="{{ article.title }}">
                                <input type="hidden" name="excerpt" value="{{ article.excerpt }}">
                                <input type="hidden" name="day" value="{{ article.date.getDate() }}">
                                <input type="hidden" name="month" value="{{ article.date.getMonth() + 1 }}">
                                <input type="hidden" name="year" value="{{ article.date.getFullYear() }}">
                                <input type="hidden" name="published" value="{{ article.published }}">
                                <input type="hidden" name="event" value="{{ article.event }}">
                                <input type="hidden" name="slider" value="{{ article.slider }}">
                                <input type="hidden" name="showcaser" value="{{ article.showcaser }}">
                                <input type="hidden" name="video" value="{{ article.video }}">
                                <input type="hidden" name="content" value="{{ article.content }}">
                            </div>
                            <div layout="row" flex="100" layout-align="center">
                                <span ng-click="toolbar.changeDate(article, $event)">{{ article.date | date }}</span>
                            </div>
                            <div layout="row" flex="100" layout-align="end">
                                <input class="md-button" type="submit" value="Guardar">
                            </div>
                        </div>

                    </md-content>
                </form>
            </md-tab>

            <md-tab label="Editar noticia">
                <md-content class="md-padding">
                    <h1 class="md-display-2">Editar noticia</h1>

                    <app-paginator-browser>
                        <div flex-gt-xs="90" ng-repeat="card in elements()">
                            <app-card-article item="card" prefix="node.href"></app-card-article>
                        </div>
                    </app-paginator-browser>

                </md-content>
            </md-tab>

        </md-tabs>
    </md-content>
</div>
