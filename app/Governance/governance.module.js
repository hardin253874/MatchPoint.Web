(function () {
    'use strict';

    /**
    * Module implementing governance page.    
    *
    * It contains governance page.
    * @module donors            
    */
    angular.module('mp.app.governance', [
        'ui.router', 'ngRoute', 'gg.vmsgs', 'mp.components.dataGrid'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('governance', {
            url: '/governance',
            templateUrl: '../app/Governance/Views/governance.tpl.html'
        });

       
    });



 
}());