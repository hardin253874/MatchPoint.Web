(function () {
    'use strict';

    /**
    * Module implementing patients page.    
    *
    * It contains patients page.
    * @module patients            
    */
    angular.module('mp.app.patients', [
        'ui.router'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('patients', {
            url: '/patients',
            templateUrl: '../app/Patients/Views/patients.tpl.html',
            data: {}
        });
        $stateProvider.state('patientDetail', {
            url: '/patientDetail/:Id',
            templateUrl: '../app/Patients/Views/patientDetail.tpl.html',
            data: {}
        });
        $stateProvider.state('patientTabDetail', {
            url: '/patientTabDetail/:Id/:Tab',
            templateUrl: '../app/Patients/Views/patientDetail.tpl.html',
            data: {}
        });
    });
}());