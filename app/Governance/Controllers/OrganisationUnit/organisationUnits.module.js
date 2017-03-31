(function () {
    'use strict';

    ///**
    //* Module implementing organisation unit page.    
    //*
    //* It contains donors page.
    //* @module donors            
    //*/
    angular.module('mp.app.organisationUnits', [
        'ui.router', 'ui.grid.pagination', 'mp.components.navService', 'gg.vmsgs'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('organisationUnits', {
            url: '/organisationunits',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Governance/Views/OrganisationUnit/organisationUnits.tpl.html'
        });
        $stateProvider.state('organisationunitdetails', {
            url: '/organisationunit/:Id',
            params: {
                gridParams: null,
                mode: null
            },
            templateUrl: '../app/Governance/Views/OrganisationUnit/ouDetailsIndex.tpl.html',
        });
        $stateProvider.state('organisationunitDetailsEdit', {
            url: '/organisationUnitEdit/:Id',
            params: {
                gridParams: null,
                mode: null
            },
            templateUrl: '../app/Governance/Views/OrganisationUnit/ouDetailsEdit.tpl.html',
        });
    });
}());