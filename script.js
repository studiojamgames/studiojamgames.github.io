// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute', 'angularCSS']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController',
        css: ['/css/main.css', '/style.css']
    })

    // route for the about page
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController',
        css: ['/css/about.css', '/style.css']
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController',
        css: ['/css/contact.css', '/style.css']
    })

    .when('/animatics', {
        templateUrl: 'pages/animatics.html',
        controller: 'animaticsController',
        css: ['/css/animatics.css']
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {});

scotchApp.controller('aboutController', function ($scope) {});

scotchApp.controller('contactController', function ($scope) {});

scotchApp.controller('animaticsController', function ($scope) {});