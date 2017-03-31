(function () {
    'use strict';

    /**
    * Module implementing donors page.    
    *
    * It contains donors page.
    * @module donors            
    */
    angular.module('mp.app.donors', [
        'ui.router'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('donors', {
            url: '/donors',
            templateUrl: '../app/Donors/Views/donors.tpl.html'
        });
    });
}());