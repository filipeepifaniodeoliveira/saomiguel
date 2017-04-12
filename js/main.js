/**
 * Inicializamos o angular.module com o mesmo nome que definimos na diretiva ng-app
 * E inclu�mos a depend�ncia do ngRoute
 */
var app = angular.module('app', ['ngRoute']);

/**
 * Como possu�mos a variavel app definida acima com a inicializa��o do Angular
 * atrav�s do app.config conseguimos criar as configura��es
 * definimos que essa configura��o depende do $routeProvider e usamos na function($routeProvider)
 */
app.config(['$routeProvider', function ($routeProvider){

    $routeProvider


        .when("/", {
            templateUrl: "templates/home.html", 
            controller: "HomeCtrl"
        })

        .when("/comunidade", {
            templateUrl: "templates/comunidade.html", 
            controller: "ComunidadeCtrl"
        })

        .when("/carisma", {
            templateUrl: "templates/carisma.html", 
            controller: "CarismaCtrl"
        })

        .when("/vocacao", {
            templateUrl: "templates/vocacao.html", 
            controller: "VocacaoCtrl"
        })

        .when("/missoes", {
            templateUrl: "templates/missoes.html", 
            controller: "MissoesCtrl"
        })

        .when("/eventos", {
            templateUrl: "templates/eventos.html", 
            controller: "EventosCtrl"
        })

        .when("/projetos", {
            templateUrl: "templates/projetos.html", 
            controller: "ProjetosCtrl"
        })

        .otherwise("/home");
}]);

/*
 * Controllers
 */

/*
 * Controllers
 */
app.controller('HomeCtrl', function ($scope, $location) {

});

app.controller('ComunidadeCtrl', function ($scope, $location) {

});

app.controller('CarismaCtrl', function ($scope, $location) {

});

app.controller('VocacaoCtrl', function ($scope, $location) {

});

app.controller('MissoesCtrl', function ($scope, $location) {

});

app.controller('EventosCtrl', function ($scope, $location) {

});

app.controller('ProjetosCtrl', function ($scope, $location) {

});
