(function () {
    'use strict';

    /**
    * Module implementing home page.    
    *
    * It contains home page.
    * @module home            
    */
    angular.module('mp.app.home', [
        'ui.router'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/app/Navigation/Views/home.tpl.html'
        });
        $stateProvider.state('error', {
            url: '/error',
            templateUrl: '/app/Navigation/Views/error.tpl.html'
        });
    });
}());