(function () {
    'use strict';

    /**
    * Module implementing donors page.    
    *
    * It contains donors page.
    * @module donors            
    */
    angular.module('mp.app.authentication', [
        'ui.router',
        'mp.components.localStorage',
        'mp.components.notification',
        'mp.components.webService'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '../app/Authentication/Views/login.tpl.html'
        });
    });
}());