(function () {
    'use strict';

    angular.module('app', [               
        'ngRoute',
        'ui.router',
        'ui.bootstrap',        
        'ui.grid',
        'ui.grid.selection',
        'ui.grid.exporter',
        'ui.grid.moveColumns',
        'ui.bootstrap.datepicker',
        'AxelSoft',
        'gg.vmsgs',
        'ngMdIcons',
        'mp.components.navService',
        'mp.components.localStorage',
        'mp.components.notification',
        'mp.components.webService',
        'mp.components.dataGrid',        
        'mp.components.validation',
        'mp.components.loginService',
        'mp.components.tabset',
        'mp.components.dateControl',
        'mp.components.autoComplete',
        'mp.app.home',
        'mp.app.patients',
        'mp.app.donors',
        'mp.app.governance',
        'mp.app.organisationUnits',
        'mp.app.admin',
        'mp.app.authentication'        
      //ToDo: Look at how to load the module on need basis.
    ]);
}());
