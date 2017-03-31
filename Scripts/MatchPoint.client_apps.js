/**
 * MatchPoint.client - v3.0.1 - 2017-03-29
 * http://www.artisgroup.com.au/
 *
 * Copyright 2011-2017 Artis Group
 */
(function () {
    'use strict';

    /**
    * Module implementing user account page.    
    *
    * It contains user account page.
    * @module useraccount            
    */
    angular.module('mp.app.admin', [
        'ui.router', 'ui.grid.pagination', 'mp.components.navService', 'mp.components.webService', 'mp.components.validation', 'gg.vmsgs', 'mp.components.dataGrid'
    ])
    .config(function ($stateProvider) {
        //$stateProvider.state('admin', {
        //    url: '/admin',
        //    templateUrl: '../app/Admin/Views/admin.tpl.html'
        //});
        $stateProvider.state('useradminindex', {
            url: '/useradminindex/',
            templateUrl: '../app/Admin/Views/UserAdmin/userAdminIndex.tpl.html',
        });
        $stateProvider.state('useraccounts', {
            url: '/useraccounts',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccounts.tpl.html'
        });
        //$stateProvider.state('useraccountdetailindex', {
        //    url: '/useraccountdetailindex/:Id',
        //    params: {
        //        gridParams: null
        //    },
        //    templateUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetailIndex.tpl.html',
        //});
        $stateProvider.state('useraccountdetail', {
            url: '/useraccountdetail/:Id',
            params: {
                gridParams: null,
                mode: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetailIndex.tpl.html',
        });
        $stateProvider.state('useraccounteditdetail', {
            url: '/useraccounteditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountEditDetail.tpl.html',
        });


        // Organization Unit Representative Roles
        $stateProvider.state('orgunitreproles', {
            url: '/orgunitreproles',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeRoles.tpl.html'
        });
        $stateProvider.state('orgunitreprolesdetail', {
            url: '/orgunitreprolesdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeRolesDetail.tpl.html',
        });
        $stateProvider.state('orgunitreproleseditdetail', {
            url: '/orgunitreproleseditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeRolesEditDetail.tpl.html',
        });
        $stateProvider.state('orgunitcreatereprole', {
            url: '/orgunitcreatereprole',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeCreateRole.tpl.html'
        });   
                
        //Reference Entities
        $stateProvider.state('refentitiesindex', {
            url: '/refentitiesindex',
            params: {},
            templateUrl: '../app/Admin/Views/ReferenceEntities/refEntitiesIndex.tpl.html'
        });

        //Reference Entities - Titles
        $stateProvider.state('refentitytitles', {
            url: '/refentitytitles',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Titles/refEntitiesTitles.tpl.html'
        });
        $stateProvider.state('refentitytitledetail', {
            url: '/refentitytitledetail/:Id',
            params: {
                gridParams: null                
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Titles/refEntitiesTitleDetail.tpl.html'
        });
        $stateProvider.state('refentitytitleeditdetail', {
            url: '/refentitytitleeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Titles/refEntitiesTitleEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatetitle', {
            url: '/refentitycreatetitle',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Titles/refEntitiesCreateTitle.tpl.html'
        });

        //Reference Entities - Australian Postal Code
        $stateProvider.state('refentityauspostcode', {
            url: '/refentityauspostcode',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesAusPostalCode.tpl.html'
        });
        $stateProvider.state('refentityauspostcodedetail', {
            url: '/refentityauspostcodedetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesAusPostCodeDetail.tpl.html'
        });
        $stateProvider.state('refentityauspostcodeeditdetail', {
            url: '/refentityauspostcodeeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesAusPostCodeEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatepostcode', {
            url: '/refentitycreatepostcode',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesCreateAusPostalCode.tpl.html'
        });   

        //Reference Entities - Countries
        $stateProvider.state('refentitycountry', {
            url: '/refentitycountry',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCountries.tpl.html'
        });
        $stateProvider.state('refentitycountrydetail', {
            url: '/refentitycountrydetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCountryDetail.tpl.html'
        });
        $stateProvider.state('refentitycountryeditdetail', {
            url: '/refentitycountryeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCountryEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatecountry', {
            url: '/refentitycreatecountry',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCreateCountry.tpl.html'
        });

        //Languages
        $stateProvider.state('refentitylanguage', {
            url: '/refentitylanguage',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Languages/refEntitiesLanguage.tpl.html'
        });
        $stateProvider.state('refentitylanguagedetail', {
            url: '/refentitylanguagedetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Languages/refEntitiesLanguageDetail.tpl.html'
        });
        $stateProvider.state('refentitylanguageeditdetail', {
            url: '/refentitylanguageeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Languages/refEntitiesLanguageEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatelanguage', {
            url: '/refentitycreatelanguage',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Languages/refEntitiesCreateLanguage.tpl.html'
        });

        // Diagnosis
        $stateProvider.state('refentitydiagnosis', {
            url: '/refentitydiagnosis',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesDiagnosis.tpl.html'
        });
        $stateProvider.state('refentitydiagnosisdetail', {
            url: '/refentitydiagnosisdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesDiagnosisDetail.tpl.html'
        });
        $stateProvider.state('refentitydiagnosiseditdetail', {
            url: '/refentitydiagnosiseditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesDiagnosisEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatediagnosis', {
            url: '/refentitycreatediagnosis',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesCreateDiagnosis.tpl.html'
        });

        // Drive Focus
        $stateProvider.state('refentitydrivefocus', {
            url: '/refentitydrivefocus',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesDriveFocus.tpl.html'
        });
        $stateProvider.state('refentitydrivefocusdetail', {
            url: '/refentitydrivefocusdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesDriveFocusDetail.tpl.html'
        });
        $stateProvider.state('refentitydrivefocuseditdetail', {
            url: '/refentitydrivefocuseditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesDriveFocusEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatedrivefocus', {
            url: '/refentitycreatedrivefocus',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesCreateDriveFocus.tpl.html'
        });

         // Drive Type
        $stateProvider.state('refentitydrivetype', {
            url: '/refentitydrivetype',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesDriveType.tpl.html'
        });
        $stateProvider.state('refentitydrivetypedetail', {
            url: '/refentitydrivetypedetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesDriveTypeDetail.tpl.html'
        });
        $stateProvider.state('refentitydrivetypeeditdetail', {
            url: '/refentitydrivetypeeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesDriveTypeEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatedrivetype', {
            url: '/refentitycreatedrivetype',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesCreateDriveType.tpl.html'
        });

        // Drive Status
        $stateProvider.state('refentitydrivestatus', {
            url: '/refentitydrivestatus',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesDriveStatus.tpl.html'
        });
        $stateProvider.state('refentitydrivestatusdetail', {
            url: '/refentitydrivestatusdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesDriveStatusDetail.tpl.html'
        });
        $stateProvider.state('refentitydrivestatuseditdetail', {
            url: '/refentitydrivestatuseditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesDriveStatusEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatedrivestatus', {
            url: '/refentitycreatedrivestatus',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesCreateDriveStatus.tpl.html'
        });

        //Status Change Reason
        $stateProvider.state('refentitystatuschangedreason', {
            url: '/refentitystatuschangedreason',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesStatusChangedReason.tpl.html'
        });
        $stateProvider.state('refentitystatuschangedreasondetail', {
            url: '/refentitystatuschangedreasondetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesStatusChangedReasonDetail.tpl.html'
        });
        $stateProvider.state('refentitystatuschangedreasoneditdetail', {
            url: '/refentitystatuschangedreasoneditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesStatusChangedReasonEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatestatuschangedreason', {
            url: '/refentitycreatestatuschangedreason',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesCreateStatusChangedReason.tpl.html'
        });      
        
        //CBU Status Change Reason
        $stateProvider.state('refentitycbustatuschangedreason', {
            url: '/refentitycbustatuschangedreason',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCBUStatusChangedReason.tpl.html'
        });
        $stateProvider.state('refentitycbustatuschangedreasondetail', {
            url: '/refentitycbustatuschangedreasondetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCBUStatusChangedReasonDetail.tpl.html'
        });
        $stateProvider.state('refentitycbustatuschangedreasoneditdetail', {
            url: '/refentitycbustatuschangedreasoneditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCBUStatusChangedReasonEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatecbustatuschangedreason', {
            url: '/refentitycreatecbustatuschangedreason',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCreateCBUStatusChangedReason.tpl.html'
        });

        // Invoice Number Counter
        $stateProvider.state('refentityinvoicenumcounter', {
            url: '/refentityinvoicenumcounter',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesInvoiceNumCounters.tpl.html'
        });
        $stateProvider.state('refentityinvoicenumcounterdetail', {
            url: '/refentityinvoicenumcounterdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesInvoiceNumCountersDetail.tpl.html'
        });
        $stateProvider.state('refentityinvoicenumcountereditdetail', {
            url: '/refentityinvoicenumcountereditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesInvoiceNumCountersEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreateinvoicenumcounter', {
            url: '/refentitycreateinvoicenumcounter',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesCreateInvoiceNumCounters.tpl.html'
        });

        //Price Item
        $stateProvider.state('refentitypriceitem', {
            url: '/refentitypriceitem',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesPriceItem.tpl.html'
        });
        $stateProvider.state('refentitypriceitemdetail', {
            url: '/refentitypriceitemdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesPriceItemDetail.tpl.html'
        });
        $stateProvider.state('refentitypriceitemeditdetail', {
            url: '/refentitypriceitemeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesPriceItemEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatepriceitem', {
            url: '/refentitycreatepriceitem',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesCreatePriceItem.tpl.html'
        });

        //Relationship Type
        $stateProvider.state('refentityrelationshiptype', {
            url: '/refentityrelationshiptype',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesRelationType.tpl.html'
        });
        $stateProvider.state('refentityrelationshiptypedetail', {
            url: '/refentityrelationshiptypedetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesRelationTypeDetail.tpl.html'
        });
        $stateProvider.state('refentityrelationshiptypeeditdetail', {
            url: '/refentityrelationshiptypeeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesRelationTypeEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreaterelationshiptype', {
            url: '/refentitycreaterelationshiptype',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesCreateRelationType.tpl.html'
        });

        // Item Mappings
        $stateProvider.state('refentityitemmapping', {
            url: '/refentityitemmapping',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesItemMappings.tpl.html'
        });
        $stateProvider.state('refentityitemmappingdetail', {
            url: '/refentityitemmappingdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesItemMappingsDetail.tpl.html'
        });
        $stateProvider.state('refentityitemmappingeditdetail', {
            url: '/refentityitemmappingeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesItemMappingsEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreateitemmapping', {
            url: '/refentitycreateitemmapping',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesCreateItemMappings.tpl.html'
        });

        //Funding Type
        $stateProvider.state('refentityfundingtype', {
            url: '/refentityfundingtype',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesfundingtype.tpl.html'
        });
        $stateProvider.state('refentityfundingtypedetail', {
            url: '/refentityfundingtypedetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesFundingTypeDetail.tpl.html'
        });
        $stateProvider.state('refentityfundingtypeeditdetail', {
            url: '/refentityfundingtypeeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesFundingTypeEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatefundingtype', {
            url: '/refentitycreatefundingtype',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesCreateFundingType.tpl.html'
        });

        //Operational Metrics
        $stateProvider.state('refentityoperationalmetrics', {
            url: '/refentityoperationalmetrics',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/OperationalMetrics/refentitiesOperationalMetrics.tpl.html'
        });      
        $stateProvider.state('refentityoperationalmetricseditdetail', {
            url: '/refentityoperationalmetriceditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/OperationalMetrics/refEntitiesOperationalMetricsEditDetail.tpl.html'
        });
       
        //Configuration
        $stateProvider.state('refentityconfiguration', {
            url: '/refentityconfiguration',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Configuration/refEntitiesConfiguration.tpl.html'
        });
        $stateProvider.state('refentityconfigurationdetail', {
            url: '/refentityconfigurationdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Configuration/refEntitiesConfigurationDetail.tpl.html'
        });
        $stateProvider.state('refentityconfigurationeditdetail', {
            url: '/refentityconfigurationeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Configuration/refEntitiesConfigurationEditDetail.tpl.html'
        });

        //Request Notification Configuration - Start
        $stateProvider.state('refentityreqnotifyconfigurationdetail', {
            url: '/refentityreqnotifyconfigurationdetail',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/ReqNotifyConfiguration/refEntitiesReqNotifyConfigurationDetail.tpl.html'
        });
        $stateProvider.state('refentityreqnotifyconfigurationeditdetail', {
            url: '/refentityreqnotifyconfigurationeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/ReqNotifyConfiguration/refEntitiesReqNotifyConfigurationEditDetail.tpl.html'
        });

        //Request Notification Configuration - End

        // Nationalities - Start

        $stateProvider.state('refentitynationality', {
            url: '/refentitynationality',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesNationalities.tpl.html'
        });
        $stateProvider.state('refentitynationalitydetail', {
            url: '/refentitynationalitydetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesNationalitiesDetail.tpl.html'
        });
        $stateProvider.state('refentitynationalityeditdetail', {
            url: '/refentitynationalityeditdetail/:Id',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesNationalitiesEditDetail.tpl.html'
        });
        $stateProvider.state('refentitycreatenationality', {
            url: '/refentitycreatenationality',
            params: {
                gridParams: null
            },
            templateUrl: '../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesCreateNationalities.tpl.html'
        });

        // Nationalities - End



    });
}());







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

(function () {
    "use strict";

    angular.module('mp.app.authentication')

    .factory('AuthenticationService',
        ['Base64', '$http',  '$rootScope', 'mpLocalStorage', 'mpWebService','$httpParamSerializerJQLike',
        function (Base64, $http, $rootScope, mpLocalStorage, mpWebService, $httpParamSerializerJQLike) {
            var service = {};


            service.Login = function (loginName, password) {
               
                var data = {
                    loginName: loginName,
                    password: password
                };

                return mpWebService.callWebApi('POST', data, '/LoginAPI/Login').then(function (response) {
                    return response ? response.data : null;
                });

            };

            service.registerMVCWebApi = function (username, password) {
                var data = JSON.stringify(
                    {
                        Email: username,
                        Password: password,
                        ConfirmPassword: password
                    });

                

                return mpWebService.registerWebApi(data).then(function (response) {
                    return response ? response.data : null;
                });

            };

            service.logoutMVCWebApi = function () {
                return mpWebService.logoutWebApi().then(function (response) {
                    return response ? response.data : null;
                });
            };

            service.LoginMVCWebApi = function (loginName, password) {

                var data = {
                    grant_type: 'password',
                    username: loginName,
                    password: password
                };


                return mpWebService.loginWebApi($httpParamSerializerJQLike(data)).then(function (response) {
                    return response ? response.data : null;
                });
            };

            service.SetCredentials = function (response, username) {
                var authdata = Base64.encode(username);

                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        authdata: authdata
                    }
                };
                mpLocalStorage.setObject("credential", { id: response.Id, name: response.UserName, role: response.Roles });
                mpLocalStorage.setItem("TokenInfo", 'Basic ' + authdata); //response.Token todo, MVC will return token from server
                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                mpLocalStorage.setItem('globals', $rootScope.globals);
               
            };

            service.SetBearerCredentials = function (response) {
                var userName = response.userName;
                var token = response.access_token;
                var credential = null;
                switch (userName) {
                    case 'test@test.com':
                        credential = { id: 3, name: 'other user', role: 'allRole' };
                        break;
                    case 'patientuser@test.com':
                        credential = { id: 1, name: 'patient user', role: 'patientRole' };
                        break;
                    case 'donoruser@test.com':
                        credential = { id: 2, name: 'donor user', role: 'donorRole' };
                        break;
                    default:
                        credential = { id: 3, name: 'other user', role: 'allRole' };
                        break;
                }

                //{ id: response.Id, name: response.UserName, role: response.Roles }

                mpLocalStorage.setObject("credential", credential);
                mpLocalStorage.setItem("TokenInfo", 'bearer ' + token); //response.Token todo, MVC will return token from server
                $http.defaults.headers.common['Authorization'] = 'bearer ' + token; // jshint ignore:line
                mpLocalStorage.setItem('globals', $rootScope.globals);

            };

            service.ClearCredentials = function () {
                $rootScope.globals = {};
                mpLocalStorage.removeItem('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
            };

            return service;
        }])

        .factory('Base64', function () {
        /* jshint ignore:start */

        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        return {
            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },

            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    window.alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";

                } while (i < input.length);

                return output;
            }
        };

        /* jshint ignore:end */
    });
}());
(function () {
    "use strict";

    angular.module('mp.app.home')

    .factory('homeService',
        ['$http',
        function ($http) {
            var service = {};

            //service.GetSecureData = function (callback) {
            //    $http.get('/api/securedata')
            //        .success(function (response) {
            //            callback(response);
            //        });
            //};

            return service;
        }]);
}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesAusPostCodeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesAusPostCodeDetailController]);

    function refEntitiesAusPostCodeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Australian Postal Code Details";
        
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.AusPostalCodeDetail = {};
        
        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getPostalCodeDetail($scope.pId).then(function (response) {
                console.log('Get Postal Codes Service.... ');
                if (response) {
                    $scope.AusPostalCodeDetail = response.Data;
                    console.log('The value for AusPostalCodeDetail: ' + $scope.AusPostalCodeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcodeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjAusPostalCodeDetail = {
                PostalCode: $scope.AusPostalCodeDetail.PostalCode,
                Locality: $scope.AusPostalCodeDetail.Locality,
                State: $scope.AusPostalCodeDetail.State,
                Category: $scope.AusPostalCodeDetail.Category,
                Comments: $scope.AusPostalCodeDetail.Comments
            };

            ReferenceEntitiesService.updateAusPostalCodeDetails($scope.pId, ObjAusPostalCodeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });
            
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcodedetail', params);
        };

        $scope.Cancel = function () {            
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcodedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcode', params);
        };

        init();


    }



}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesAusPostalCodeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesAusPostalCodeController]);

    function refEntitiesAusPostalCodeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Australian Postal Code";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'PostalCode', field: 'PostalCode', displayName: 'Postal Code', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'Locality', field: 'Locality', displayName: 'Locality', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'State', field: 'State', displayName: 'State', width: '20%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityauspostcodedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Postal Code Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getPostalCodes(options).then(function (response) {
                console.log('Get Postal Code Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreatePostalCode = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatepostcode', params);
        };

        load();

    }



}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateAusPostCodeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateAusPostCodeController]);

    function refEntitiesCreateAusPostCodeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, state) {

        $scope.title = "Postal Code";
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.AusPostalCodeDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreatePostCode = function () {
            console.log('Save function triggered');
            var ObjAusPostalCodeDetail = {
                PostalCode: $scope.AusPostalCodeDetail.PostalCode,
                Locality: $scope.AusPostalCodeDetail.Locality,
                State: $scope.AusPostalCodeDetail.State,
                Category: $scope.AusPostalCodeDetail.Category,
                Comments: $scope.AusPostalCodeDetail.Comments
            };

            ReferenceEntitiesService.CreatePostalCode($scope.pId, ObjAusPostalCodeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcode', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcode', params);
        };

        init();


    }



}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCBUStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesCBUStatusChangedReasonController]);

    function refEntitiesCBUStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "CBU Status Change Reason";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '40%', headerCellClass: 'gridHeader' },
                             { name: 'Status', field: 'Status', displayName: 'Status', width: '40%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '20%', enableFiltering: false, headerCellClass: 'gridHeader', cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }
        ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitycbustatuschangedreasondetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Status Changed Reason Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getCBUStatusChangedReasons(options).then(function (response) {
                console.log('Get Status Changed Reason Service.... ');
                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                    $scope.gridOptions.searchText = options.searchText;
                }
            });
        }


        $scope.CreateCBUStatusChangedReason = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatecbustatuschangedreason', params);
        };

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCBUStatusChangedReasonDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCBUStatusChangedReasonDetailController]);

    function refEntitiesCBUStatusChangedReasonDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "CBU Status Changed Reason Details";

        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CBUStatusChangedReasonDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getCBUStatusChangedReasonDetail($scope.scrId).then(function (response) {
                console.log('Get CBUStatusChangedReason Service.... ');
                if (response) {
                    $scope.CBUStatusChangedReasonDetail = response.Data;
                    console.log('The value for CBUStatusChangedReasonDetail: ' + $scope.CBUStatusChangedReasonDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreasoneditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjCBUStatusChangedReasonDetail = {
                Status: $scope.CBUStatusChangedReasonDetail.Status,
                Description: $scope.CBUStatusChangedReasonDetail.Description
            };

            ReferenceEntitiesService.updateCBUStatusChangedReasonDetails($scope.scrId, ObjCBUStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreasondetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreasondetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreason', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateCBUStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateCBUStatusChangedReasonController]);

    function refEntitiesCreateCBUStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create CBUStatusChangedReason";
        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CBUStatusChangedReasonDetail = {};
        $scope.StatusItems = {};

        function init() {
            console.log('init loading...');
            $scope.LoadCBUStatusChangedReasonItems();
        }

        $scope.LoadCBUStatusChangedReasonItems = function () {
            console.log('Load Status Changed Reason Items');

            ReferenceEntitiesService.loadCBUStatusChangedReasonItems().then(function (response) {
                console.log('Load Status Changed Reason Service.... ');
                if (response) {
                    console.log('The Status Changed Reason Items: ' + response.Data);
                    $scope.StatusItems = response.Data;
                }
            });
        };




        $scope.CreateCBUStatusChangedReason = function () {
            console.log('Save function triggered');
            var ObjCBUStatusChangedReasonDetail = {
                Status: $scope.CBUStatusChangedReasonDetail.Status,
                Description: $scope.CBUStatusChangedReasonDetail.Description
            };

            ReferenceEntitiesService.createCBUStatusChangedReason($scope.scrId, ObjCBUStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreason', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreason', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesConfigurationController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesConfigurationController]);

    function refEntitiesConfigurationController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Configuration";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                                  { name: 'Key', field: 'Key', displayName: 'Key', width: '50%', headerCellClass: 'gridHeader' },
                                  { name: 'Value', field: 'Value', displayName: 'Value', width: '50%', headerCellClass: 'gridHeader' }                             
                                ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityconfigurationdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            enableFiltering: true
        };
        console.log("Calling Configuration Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getConfigurations(options).then(function (response) {
                console.log('Get Configuration Service.... ');
                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                    $scope.gridOptions.searchText = options.searchText;
                }
            });
        }       

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesConfigurationDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesConfigurationDetailController]);

    function refEntitiesConfigurationDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Configuration Details";

        $scope.conId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ConfigurationDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getConfigurationDetail($scope.conId).then(function (response) {
                console.log('Get Configuration Service.... ');
                if (response) {
                    $scope.ConfigurationDetail = response.Data;
                    console.log('The value for ConfigurationDetail: ' + $scope.ConfigurationDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.conId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfigurationeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjConfigurationDetail = {
                Status: $scope.ConfigurationDetail.Status,
                Description: $scope.ConfigurationDetail.Description
            };

            ReferenceEntitiesService.updateConfigurationDetails($scope.conId, ObjConfigurationDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.conId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfigurationdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.conId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfigurationdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfiguration', params);
        };

        init();
    }

}());
(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCountryController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesCountryController]);

    function refEntitiesCountryController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils)
    {

        $scope.title = "Countries";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'CountryName', field: 'CountryName', displayName: 'Country Name', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'CountryCode', field: 'CountryCode', displayName: 'Country Code', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'DiallingCode', field: 'DiallingCode', displayName: 'Dialling Code', width: '20%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitycountrydetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Country Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getCountries(options).then(function (response) {
                console.log('Get Country Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateCountry = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatecountry', params);
        };

        load();


    }


}());
(function () {

    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCountryDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCountryDetailController]);

    function refEntitiesCountryDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Country Details";

        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CountryDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getCountryDetail($scope.cId).then(function (response) {
                console.log('Get Country Service.... ');
                if (response) {
                    $scope.CountryDetail = response.Data;
                    console.log('The value for CountryDetail: ' + $scope.CountryDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountryeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjCountryDetail = {
                CountryName: $scope.CountryDetail.CountryName,
                CountryCode: $scope.CountryDetail.CountryCode,
                DiallingCode: $scope.CountryDetail.DiallingCode,
                IsActive: $scope.CountryDetail.IsActive
            };

            ReferenceEntitiesService.updateCountryDetails($scope.cId, ObjCountryDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountrydetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountrydetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountry', params);
        };

        init();


    }


}());
(function () {

    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateCountryController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateCountryController]);

    function refEntitiesCreateCountryController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create Country";
        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CountryDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateCountry = function () {
            console.log('Save function triggered');
            var ObjCountryDetail = {
                CountryName: $scope.CountryDetail.CountryName,
                CountryCode: $scope.CountryDetail.CountryCode,
                DiallingCode: $scope.CountryDetail.DiallingCode                
            };

            ReferenceEntitiesService.CreateCountry($scope.cId, ObjCountryDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountry', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountry', params);
        };

        init();

    }


}());
(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDiagnosisController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDiagnosisController]);

    function refEntitiesCreateDiagnosisController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state)
    {
        $scope.title = "ICD10";
        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DiagnosisDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateDiagnosis = function () {
            console.log('Save function triggered');
            var ObjDiagnosisDetail = {
                CategoryCode: $scope.DiagnosisDetail.CategoryCode,
                CategoryDescription: $scope.DiagnosisDetail.CategoryDescription,
                SubCategoryCode: $scope.DiagnosisDetail.SubCategoryCode,
                SubCategoryDescription: $scope.DiagnosisDetail.SubCategoryDescription,
                IsAcceptableTreatment: $scope.DiagnosisDetail.IsAcceptableTreatment
            };

            ReferenceEntitiesService.createDiagnosis($scope.cId, ObjDiagnosisDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydiagnosis', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydiagnosis', params);
        };

        init();

    }


}());
(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDiagnosisController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils',refEntitiesDiagnosisController]);

    function refEntitiesDiagnosisController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "ICD10";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);


        $scope.gridColumnDefs =  [
                             { name: 'CategoryCode', field: 'CategoryCode', displayName: 'Category Code', width: '20%', headerCellClass: 'gridHeader' },
                             { name: 'CategoryDescription', field: 'CategoryDescription', displayName: 'Category Description', width: '20%', headerCellClass: 'gridHeader' },
                             { name: 'SubCategoryCode', field: 'SubCategoryCode', displayName: 'Sub Category Code', width: '20%', headerCellClass: 'gridHeader' },
                             { name: 'SubCategoryDescription', field: 'SubCategoryDescription', displayName: 'Sub Category Description', width: '20%', headerCellClass: 'gridHeader' },                             
                             { name: 'IsAcceptableTransplant', field: 'IsAcceptableTransplant', displayName: 'Is Acceptable Transplant', type: 'boolean', width: '20%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsAcceptableTransplant">' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitydiagnosisdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Diagnosis Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDiagnosis(options).then(function (response) {
                console.log('Get Diagnosis Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDiagnosis = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatediagnosis', params);
        };

        load();

    }

}());


(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDiagnosisDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDiagnosisDetailController]);

    function refEntitiesDiagnosisDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "ICD10 Details";

        $scope.diagId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DiagnosisDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDiagnosisDetail($scope.diagId).then(function (response) {
                console.log('Get Diagnosis Service.... ');
                if (response) {
                    $scope.DiagnosisDetail = response.Data;
                    console.log('The value for DiagnosisDetail: ' + $scope.DiagnosisDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.diagId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydiagnosiseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDiagnosisDetail = {
                CategoryCode: $scope.DiagnosisDetail.CategoryCode,
                CategoryDescription: $scope.DiagnosisDetail.CategoryDescription,
                SubCategoryCode: $scope.DiagnosisDetail.SubCategoryCode,
                SubCategoryDescription: $scope.DiagnosisDetail.SubCategoryDescription,
                IsAcceptableTreatment: $scope.DiagnosisDetail.IsAcceptableTreatment
            };

            ReferenceEntitiesService.updateDiagnosisDetails($scope.diagId, ObjDiagnosisDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";    
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.diagId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydiagnosisdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.diagId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydiagnosisdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydiagnosis', params);
        };

        init();


    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDriveFocusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDriveFocusController]);

    function refEntitiesCreateDriveFocusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Drive Focus";
        $scope.dFId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveFocusDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateDriveFocus = function () {
            console.log('Save function triggered');
            var ObjDriveFocusDetail = {
                Name: $scope.DriveFocusDetail.Name,                
                IsActive: $scope.DriveFocusDetail.IsActive
            };

            ReferenceEntitiesService.createDriveFocus($scope.dFId, ObjDriveFocusDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocus', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocus', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveFocusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesDriveFocusController]);

    function refEntitiesDriveFocusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Drive Focus";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);


        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '50%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitydrivefocusdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling DriveFocus Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDriveFocus(options).then(function (response) {
                console.log('Get DriveFocus Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDriveFocus = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatedrivefocus', params);
        };

        load();

    }

}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveFocusDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDriveFocusDetailController]);

    function refEntitiesDriveFocusDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Drive Focus Details";

        $scope.dFId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveFocusDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDriveFocusDetail($scope.dFId).then(function (response) {
                console.log('Get DriveFocus Service.... ');
                if (response) {
                    $scope.DriveFocusDetail = response.Data;
                    console.log('The value for DriveFocusDetail: ' + $scope.DriveFocusDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocuseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDriveFocusDetail = {
                Name: $scope.DriveFocusDetail.Name,                
                IsActive: $scope.DriveFocusDetail.IsActive
            };

            ReferenceEntitiesService.updateDriveFocusDetails($scope.dFId, ObjDriveFocusDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocusdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocusdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocus', params);
        };

        init();


    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDriveStatusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDriveStatusController]);

    function refEntitiesCreateDriveStatusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Drive Status";
        $scope.dSId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveStatusDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateDriveStatus = function () {
            console.log('Save function triggered');
            var ObjDriveStatusDetail = {
                Name: $scope.DriveStatusDetail.Name,
                IsActive: $scope.DriveStatusDetail.IsActive
            };

            ReferenceEntitiesService.createDriveStatus($scope.dSId, ObjDriveStatusDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatus', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatus', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveStatusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state','mpDataGridUtils', refEntitiesDriveStatusController]);

    function refEntitiesDriveStatusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Drive Status";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '50%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        $scope.gridOptions = {
            detailPageState: 'refentitydrivestatusdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        console.log("Calling DriveStatus Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDriveStatus(options).then(function (response) {
                console.log('Get DriveStatus Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDriveStatus = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatedrivestatus', params);
        };

        load();

    }

}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveStatusDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDriveStatusDetailController]);

    function refEntitiesDriveStatusDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Drive Status Details";

        $scope.dSId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveStatusDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDriveStatusDetail($scope.dSId).then(function (response) {
                console.log('Get DriveStatus Service.... ');
                if (response) {
                    $scope.DriveStatusDetail = response.Data;
                    console.log('The value for DriveStatusDetail: ' + $scope.DriveStatusDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatuseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDriveStatusDetail = {
                Name: $scope.DriveStatusDetail.Name,
                IsActive: $scope.DriveStatusDetail.IsActive
            };

            ReferenceEntitiesService.updateDriveStatusDetails($scope.dSId, ObjDriveStatusDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatusdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatusdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatus', params);
        };

        init();


    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDriveTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDriveTypeController]);

    function refEntitiesCreateDriveTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Drive Type";
        $scope.dTId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveTypeDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateDriveType = function () {
            console.log('Save function triggered');
            var ObjDriveTypeDetail = {
                Name: $scope.DriveTypeDetail.Name,
                IsActive: $scope.DriveTypeDetail.IsActive
            };

            ReferenceEntitiesService.createDriveType($scope.dTId, ObjDriveTypeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetype', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetype', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils',refEntitiesDriveTypeController]);

    function refEntitiesDriveTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Drive Type";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },                            
                            { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '50%',  headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        $scope.gridOptions = {
            detailPageState: 'refentitydrivetypedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);


        console.log("Calling DriveType Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDriveType(options).then(function (response) {
                console.log('Get DriveType Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDriveType = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatedrivetype', params);
        };

        load();

    }

}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveTypeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDriveTypeDetailController]);

    function refEntitiesDriveTypeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Drive Type Details";

        $scope.dTId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveTypeDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDriveTypeDetail($scope.dTId).then(function (response) {
                console.log('Get DriveType Service.... ');
                if (response) {
                    $scope.DriveTypeDetail = response.Data;
                    console.log('The value for DriveTypeDetail: ' + $scope.DriveTypeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetypeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDriveTypeDetail = {
                Name: $scope.DriveTypeDetail.Name,
                IsActive: $scope.DriveTypeDetail.IsActive
            };

            ReferenceEntitiesService.updateDriveTypeDetails($scope.dTId, ObjDriveTypeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetypedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetypedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetype', params);
        };

        init();


    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateFundingTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateFundingTypeController]);

    function refEntitiesCreateFundingTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Funding Type";
        $scope.dSId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.FundingTypeDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateFundingType = function () {
            console.log('Save function triggered');
            var ObjFundingTypeDetail = {
                Name: $scope.FundingTypeDetail.Name,
                IsActive: $scope.FundingTypeDetail.IsActive
            };

            ReferenceEntitiesService.createFundingType($scope.dSId, ObjFundingTypeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtype', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtype', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesFundingTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesFundingTypeController]);

    function refEntitiesFundingTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Funding Type";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', enableFiltering: false, headerCellClass: 'gridHeader', type: 'boolean', width: '50%', cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        $scope.gridOptions = {
            detailPageState: 'refentityfundingtypedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,           
            showSearch: false,
            showDeactvated: false,
            includeDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        console.log("Calling FundingType Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getFundingType(options).then(function (response) {
                console.log('Get FundingType Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateFundingType = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatefundingtype', params);
        };

        load();

    }

}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesFundingTypeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesFundingTypeDetailController]);

    function refEntitiesFundingTypeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Funding Type Details";

        $scope.fId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.FundingTypeDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getFundingTypeDetail($scope.fId).then(function (response) {
                console.log('Get FundingType Service.... ');
                if (response) {
                    $scope.FundingTypeDetail = response.Data;
                    console.log('The value for FundingTypeDetail: ' + $scope.FundingTypeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.fId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtypeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjFundingTypeDetail = {
                Name: $scope.FundingTypeDetail.Name,
                IsActive: $scope.FundingTypeDetail.IsActive
            };

            ReferenceEntitiesService.updateFundingTypeDetails($scope.fId, ObjFundingTypeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.fId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtypedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.fId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtypedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtype', params);
        };

        init();


    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateInvoiceNumCounterController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateInvoiceNumCounterController]);

    function refEntitiesCreateInvoiceNumCounterController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Invoice Number Counters";
        $scope.iNumId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.InvoiceNumCounterDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateInvoiceNumCounter = function () {
            console.log('Save function triggered');
            var ObjInvoiceNumCounterDetail = {
                Name: $scope.InvoiceNumCounterDetail.Name,
                IsActive: $scope.InvoiceNumCounterDetail.IsActive
            };

            ReferenceEntitiesService.createInvoiceNumCounter($scope.iNumId, ObjInvoiceNumCounterDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityinvoicenumcounter', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityinvoicenumcounter', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesInvoiceNumCounterController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesInvoiceNumCounterController]);

    function refEntitiesInvoiceNumCounterController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Invoice Number Counters";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                            { name: 'DonorInvoicePrefix', field: 'DonorInvoicePrefix', displayName: 'Donor Invoice Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'DonorInvoiceCounter', field: 'DonorInvoiceCounter', displayName: 'DonorInvoice Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'DonorCreditPrefix', field: 'DonorCreditPrefix', displayName: 'Donor Credit Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'DonorCreditCounter', field: 'DonorCreditCounter', displayName: 'Donor Credit Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordInvoicePrefix', field: 'CordInvoicePrefix', displayName: 'Cord Invoice Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordInvoiceCounter', field: 'CordInvoiceCounter', displayName: 'Cord Invoice Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordCreditPrefix', field: 'CordCreditPrefix', displayName: 'Cord Credit Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordCreditCounter', field: 'CordCreditCounter', displayName: 'Cord Credit Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNInvoicePrefix', field: 'NCBCNInvoicePrefix', displayName: 'NCBCN Invoice Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNInvoiceCounter', field: 'NCBCNInvoiceCounter', displayName: 'NCBCN Invoice Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNCreditPrefix', field: 'NCBCNCreditPrefix', displayName: 'NCBCN Credit Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNCreditCounter', field: 'NCBCNCreditCounter', displayName: 'NCBCN Credit Counter', width: '8.3%', headerCellClass: 'gridHeader' }];

        $scope.gridOptions = {
            detailPageState: 'refentityinvoicenumcounterdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            showDeactvated : false,        
            includeDeactvated: false,
            enableFiltering: false
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);


        console.log("Calling InvoiceNumCounter Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getInvoiceNumCounter(options).then(function (response) {
                console.log('Get InvoiceNumCounter Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateInvoiceNumCounter = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreateinvoicenumcounter', params);
        };

        load();

    }

}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesInvoiceNumCounterDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesInvoiceNumCounterDetailController]);

    function refEntitiesInvoiceNumCounterDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Invoice Number Counter Details";

        $scope.iNumId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.InvoiceNumCounterDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getInvoiceNumCounterDetail($scope.iNumId).then(function (response) {
                console.log('Get InvoiceNumCounter Service.... ');
                if (response) {
                    $scope.InvoiceNumCounterDetail = response.Data;
                    console.log('The value for InvoiceNumCounterDetail: ' + $scope.InvoiceNumCounterDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityinvoicenumcountereditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjInvoiceNumCounterDetail = {
                Name: $scope.InvoiceNumCounterDetail.Name,
                IsActive: $scope.InvoiceNumCounterDetail.IsActive
            };

            ReferenceEntitiesService.updateInvoiceNumCounterDetails($scope.iNumId, ObjInvoiceNumCounterDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityinvoicenumcounterdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityinvoicenumcounterdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityinvoicenumcounter', params);
        };

        init();


    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateItemMappingController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateItemMappingController]);

    function refEntitiesCreateItemMappingController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Item Mappings";
        $scope.iNumId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ItemMappingDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateItemMapping = function () {
            console.log('Save function triggered');
            var ObjItemMappingDetail = {
                Name: $scope.ItemMappingDetail.Name,
                IsActive: $scope.ItemMappingDetail.IsActive
            };

            ReferenceEntitiesService.createItemMapping($scope.iNumId, ObjItemMappingDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmapping', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmapping', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesItemMappingController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesItemMappingController]);

    function refEntitiesItemMappingController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Item Mappings";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                            { name: 'SourceEntity', field: 'SourceEntity', displayName: 'Source Entity', width: '33.3%', headerCellClass: 'gridHeader' },
                            { name: 'MappedFrom', field: 'MappedFrom', displayName: 'Mapped From', width: '33.3%', headerCellClass: 'gridHeader' },
                            { name: 'MappedTo', field: 'MappedTo', displayName: 'Mapped To', width: '33.3%', headerCellClass: 'gridHeader' }
                          ];

        $scope.gridOptions = {
            detailPageState: 'refentityitemmappingdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            showDeactvated: false,
            includeDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);


        console.log("Calling ItemMapping Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getItemMapping(options).then(function (response) {
                console.log('Get ItemMapping Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateItemMapping = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreateitemmapping', params);
        };

        load();

    }

}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesItemMappingDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesItemMappingDetailController]);

    function refEntitiesItemMappingDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Item Mappings Details";

        $scope.iMapId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ItemMappingDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getItemMappingDetail($scope.iMapId).then(function (response) {
                console.log('Get ItemMapping Service.... ');
                if (response) {
                    $scope.ItemMappingDetail = response.Data;
                    console.log('The value for ItemMappingDetail: ' + $scope.ItemMappingDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.iMapId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmappingeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjItemMappingDetail = {
                Name: $scope.ItemMappingDetail.Name,
                IsActive: $scope.ItemMappingDetail.IsActive
            };

            ReferenceEntitiesService.updateItemMappingDetails($scope.iMapId, ObjItemMappingDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.iMapId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmappingdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.iMapId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmappingdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmapping', params);
        };

        init();


    }


}());
(function()
{
    "use strict";
    
    angular.module('mp.app.admin').controller('refEntitiesCreateLanguageController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateLanguageController]);

    function refEntitiesCreateLanguageController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) { 

        $scope.title = "Create Language";
        $scope.langId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.LanguageDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateLanguage = function () {
            console.log('Save function triggered');
            var ObjLanguageDetail = {
                BroadGroupCode: $scope.LanguageDetail.BroadGroupCode,
                BroadGroupName: $scope.LanguageDetail.BroadGroupName,
                NarrowGroupCode: $scope.LanguageDetail.NarrowGroupCode,
                NarrowGroupName: $scope.LanguageDetail.NarrowGroupName,
                LanguageCode: $scope.LanguageDetail.LanguageCode,
                LanguageDescription: $scope.LanguageDetail.LanguageDescription
            };

            ReferenceEntitiesService.createLanguage($scope.langId, ObjLanguageDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguage', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguage', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesLanguageController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesLanguageController]);

    function refEntitiesLanguageController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Languages";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'BroadGroupCode', field: 'BroadGroupCode', displayName: 'Broad Group Code', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'BroadGroupName', field: 'BroadGroupName', displayName: 'Broad Group Name', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'NarrowGroupCode', field: 'NarrowGroupCode', displayName: 'Narrow Group Code', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'NarrowGroupName', field: 'NarrowGroupName', displayName: 'Narrow Group Name', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'LanguageCode', field: 'LanguageCode', displayName: 'Language Code', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'LanguageDescription', field: 'LanguageDescription', displayName: 'Language Description', width: '25%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitylanguagedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Language Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getLanguages(options).then(function (response) {
                console.log('Get Language Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response); 
                }
            });
        }


        $scope.CreateLanguage = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatelanguage', params);
        };

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesLanguageDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesLanguageDetailController]);

    function refEntitiesLanguageDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state)
    {
        $scope.title = "View Language Details";

        $scope.langId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.LanguageDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getLanguageDetail($scope.langId).then(function (response) {
                console.log('Get language Service.... ');
                if (response) {
                    $scope.LanguageDetail = response.Data;
                    console.log('The value for LanguageDetail: ' + $scope.LanguageDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguageeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjLanguageDetail = {
                BroadGroupCode: $scope.LanguageDetail.BroadGroupCode,
                BroadGroupName: $scope.LanguageDetail.BroadGroupName,
                NarrowGroupCode: $scope.LanguageDetail.NarrowGroupCode,
                NarrowGroupName: $scope.LanguageDetail.NarrowGroupName,
                LanguageCode: $scope.LanguageDetail.LanguageCode,
                LanguageDescription: $scope.LanguageDetail.LanguageDescription
            };

            ReferenceEntitiesService.updateLanguageDetails($scope.langId, ObjLanguageDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguagedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguagedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguage', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateNationalitiesController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateNationalitiesController]);

    function refEntitiesCreateNationalitiesController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Nationality";
        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.NationalityDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateNationalities = function () {
            console.log('Save function triggered');
            var ObjNationalityDetail = {
                CountryName: $scope.NationalityDetail.CountryName,
                CountryCode: $scope.NationalityDetail.CountryCode,
                ISOCode: $scope.NationalityDetail.ISOCode,
                NationalityValue: $scope.NationalityDetail.NationalityValue
            };

            ReferenceEntitiesService.createNationality($scope.cId, ObjNationalityDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationality', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationality', params);
        };

        init();

    }


}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesNationalitiesController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesNationalitiesController]);

    function refEntitiesNationalitiesController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Nationality";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                                { name: 'CountryName', field: 'CountryName', displayName: 'Country Name', width: '20%', headerCellClass: 'gridHeader' },
                                { name: 'CountryCode', field: 'CountryCode', displayName: 'Country Code', width: '20%', headerCellClass: 'gridHeader' },
                                { name: 'ISOCode', field: 'ISOCode', displayName: 'Iso Code', width: '20%', headerCellClass: 'gridHeader' },
                                { name: 'NationalityValue', field: 'NationalityValue', displayName: 'Nationality', width: '20%', headerCellClass: 'gridHeader' }
                               ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitynationalitydetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs, 
            showSearch: false,
            showDeactvated: false,
            includeDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Nationality Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getNationalities(options).then(function (response) {
                console.log('Get Nationality Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateNationality = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatenationality', params);
        };

        load();

    }



}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesNationalitiesDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesNationalitiesDetailController]);

    function refEntitiesNationalitiesDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Nationality Details";

        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.NationalityDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getNationalityDetail($scope.pId).then(function (response) {
                console.log('Get Nationality Service.... ');
                if (response) {
                    $scope.NationalityDetail = response.Data;
                    console.log('The value for Nationality Detail: ' + $scope.NationalityDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationalityeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjNationalityDetail = {
                CountryName: $scope.NationalityDetail.CountryName,
                CountryCode: $scope.NationalityDetail.CountryCode,
                ISOCode: $scope.NationalityDetail.ISOCode,
                NationalityValue: $scope.NationalityDetail.NationalityValue
            };

            ReferenceEntitiesService.updateNationalityDetails($scope.pId, ObjNationalityDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationalitydetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationalitydetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationality', params);
        };

        init();


    }



}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesOperationalMetricsController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesOperationalMetricsController]);

    function refEntitiesOperationalMetricsController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Operational Metrics";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '30%', headerCellClass: 'gridHeader' },
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '70%', headerCellClass: 'gridHeader' }
                             ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityoperationalmetricseditdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling OperationalMetrics Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getOperationalMetrics(options).then(function (response) {
                console.log('Get OperationalMetrics Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesOperationalMetricEditDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesOperationalMetricEditDetailController]);

    function refEntitiesOperationalMetricEditDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Edit Operational Metrics Details";

        $scope.oMId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.OperationalMetricsDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getOperationalMetricsDetail($scope.oMId).then(function (response) {
                console.log('Get OperationalMetrics Service.... ');
                if (response) {
                    $scope.OperationalMetricsDetail = response.Data;
                    console.log('The value for OperationalMetricsDetail: ' + $scope.OperationalMetricsDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.oMId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetricseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjOperationalMetricsDetail = {
                Name: $scope.OperationalMetricsDetail.Name,
                Description: $scope.OperationalMetricsDetail.Description
                };

            ReferenceEntitiesService.updateOperationalMetricsDetails($scope.oMId, ObjOperationalMetricsDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.oMId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetrics', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.oMId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetrics', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetrics', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreatePriceItemController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreatePriceItemController]);

    function refEntitiesCreatePriceItemController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create PriceItem";
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.PriceItemDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreatePriceItem = function () {
            console.log('Save function triggered');
            var ObjPriceItemDetail = {
                ItemCode: $scope.PriceItemDetail.ItemCode,
                Description: $scope.PriceItemDetail.Description,
                InvoiceDescription: $scope.PriceItemDetail.InvoiceDescription
            };

            ReferenceEntitiesService.createPriceItem($scope.pId, ObjPriceItemDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitem', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitem', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesPriceItemController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesPriceItemController]);

    function refEntitiesPriceItemController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Price Items";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'ItemCode', field: 'ItemCode', displayName: 'Item Code', width: '35%', headerCellClass: 'gridHeader' },
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '35%', headerCellClass: 'gridHeader' },
                             { name: 'InvoiceDescription', field: 'InvoiceDescription', displayName: 'Invoice Description', width: '30%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitypriceitemdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling PriceItem Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getPriceItems(options).then(function (response) {
                console.log('Get PriceItem Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreatePriceItem = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatepriceitem', params);
        };

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesPriceItemDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesPriceItemDetailController]);

    function refEntitiesPriceItemDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "View Price Item Details";

        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.PriceItemDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getPriceItemDetail($scope.pId).then(function (response) {
                console.log('Get PriceItem Service.... ');
                if (response) {
                    $scope.PriceItemDetail = response.Data;
                    console.log('The value for PriceItemDetail: ' + $scope.PriceItemDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitemeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjPriceItemDetail = {
                ItemCode: $scope.PriceItemDetail.ItemCode,
                Description: $scope.PriceItemDetail.Description,
                InvoiceDescription: $scope.PriceItemDetail.InvoiceDescription
            };

            ReferenceEntitiesService.updatePriceItemDetails($scope.pId, ObjPriceItemDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitemdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitemdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitem', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateRelationshipTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateRelationshipTypeController]);

    function refEntitiesCreateRelationshipTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create RelationshipType";
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.RelationshipTypeDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateRelationshipType = function () {
            console.log('Save function triggered');
            var ObjRelationshipTypeDetail = {
                Name: $scope.RelationshipTypeDetail.Name,
                Solitary: $scope.RelationshipTypeDetail.Solitary                
            };

            ReferenceEntitiesService.createRelationshipType($scope.pId, ObjRelationshipTypeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptype', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptype', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesRelationshipTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesRelationshipTypeController]);

    function refEntitiesRelationshipTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Relationship Type Items";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '35%', headerCellClass: 'gridHeader' },
                             { name: 'Solitary', field: 'Solitary', displayName: 'Solitary', width: '35%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }
                             ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityrelationshiptypedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling RelationshipType Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getRelationshipTypes(options).then(function (response) {
                console.log('Get RelationshipType Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateRelationshipType = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreaterelationshiptype', params);
        };

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesRelationshipTypeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesRelationshipTypeDetailController]);

    function refEntitiesRelationshipTypeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "View Relationship Type Details";

        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.RelationshipTypeDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getRelationshipTypeDetail($scope.pId).then(function (response) {
                console.log('Get RelationshipType Service.... ');
                if (response) {
                    $scope.RelationshipTypeDetail = response.Data;
                    console.log('The value for RelationshipTypeDetail: ' + $scope.RelationshipTypeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptypeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjRelationshipTypeDetail = {
                ItemCode: $scope.RelationshipTypeDetail.ItemCode,
                Description: $scope.RelationshipTypeDetail.Description,
                InvoiceDescription: $scope.RelationshipTypeDetail.InvoiceDescription
            };

            ReferenceEntitiesService.updateRelationshipTypeDetails($scope.pId, ObjRelationshipTypeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptypedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptypedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptype', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesReqNotifyConfigurationDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesReqNotifyConfigurationDetailController]);

    function refEntitiesReqNotifyConfigurationDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Request Notification Configuration Details";

        $scope.reqNotifyId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ReqNotifyConfigurationDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getReqNotifyConfigurationDetail($scope.reqNotifyId).then(function (response) {
                console.log('Get ReqNotifyConfiguration Service.... ');
                if (response) {
                    $scope.ReqNotifyConfigurationDetail = response.Data;
                    console.log('The value for ReqNotifyConfigurationDetail: ' + $scope.ReqNotifyConfigurationDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.ReqNotifyConfigurationDetail.Id,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfigurationeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjReqNotifyConfigurationDetail = {
                ItemCode: $scope.ReqNotifyConfigurationDetail.ItemCode,
                Description: $scope.ReqNotifyConfigurationDetail.Description,
                InvoiceDescription: $scope.ReqNotifyConfigurationDetail.InvoiceDescription
            };

            ReferenceEntitiesService.updateReqNotifyConfigurationDetails($scope.reqNotifyId, ObjReqNotifyConfigurationDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.reqNotifyId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfigurationdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.reqNotifyId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfigurationdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfiguration', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateStatusChangedReasonController]);

    function refEntitiesCreateStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create StatusChangedReason";
        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.StatusChangedReasonDetail = {};
        $scope.StatusItems = {};

        function init() {
            console.log('init loading...');
            $scope.LoadStatusChangedReasonItems();
        }

        $scope.LoadStatusChangedReasonItems = function () {
            console.log('Load Status Changed Reason Items');
            
            ReferenceEntitiesService.loadStatusChangedReasonItems().then(function (response) {
                console.log('Load Status Changed Reason Service.... ');
                if (response) {
                    console.log('The Status Changed Reason Items: ' + response.Data);
                    $scope.StatusItems = response.Data;

                    //Selection of dropdown value
                    //var authMethodValue = $scope.UserAccountDetails.authMethod;
                    //var selectedIndex = 0;
                    //for (var i = 0; i < $scope.authMethodValues.length; i++) {
                    //    var auValue = $scope.authMethodValues[i].name;
                    //    if (auValue == authMethodValue) {
                    //        selectedIndex = i;
                    //        break;
                    //    }
                    //}
                    //$scope.selectedAuthValue = $scope.authMethodValues[selectedIndex];
                    //console.log('Selected Option: ' + $scope.selectedAuthValue);


                }
            });
        };




        $scope.CreateStatusChangedReason = function () {
            console.log('Save function triggered');
            var ObjStatusChangedReasonDetail = {
                Status: $scope.StatusChangedReasonDetail.Status,
                Description: $scope.StatusChangedReasonDetail.Description                
            };

            ReferenceEntitiesService.createStatusChangedReason($scope.scrId, ObjStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreason', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreason', params);
        };

        init();
    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesStatusChangedReasonController]);

    function refEntitiesStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Status Changed Reason";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '40%', headerCellClass: 'gridHeader' },
                             { name: 'Status', field: 'Status', displayName: 'Status', width: '40%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '20%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }
                             ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitystatuschangedreasondetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Status Changed Reason Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getStatusChangedReasons(options).then(function (response) {
                console.log('Get Status Changed Reason Service.... ');
                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                    $scope.gridOptions.searchText = options.searchText;
                }
            });
        }


        $scope.CreateStatusChangedReason = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatestatuschangedreason', params);
        };

        load();


    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesStatusChangedReasonDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesStatusChangedReasonDetailController]);

    function refEntitiesStatusChangedReasonDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "View StatusChangedReason Details";

        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.StatusChangedReasonDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getStatusChangedReasonDetail($scope.scrId).then(function (response) {
                console.log('Get StatusChangedReason Service.... ');
                if (response) {
                    $scope.StatusChangedReasonDetail = response.Data;
                    console.log('The value for StatusChangedReasonDetail: ' + $scope.StatusChangedReasonDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreasoneditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjStatusChangedReasonDetail = {
                Status: $scope.StatusChangedReasonDetail.Status,
                Description: $scope.StatusChangedReasonDetail.Description                
            };

            ReferenceEntitiesService.updateStatusChangedReasonDetails($scope.scrId, ObjStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreasondetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreasondetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreason', params);
        };

        init();
    }

}());
(function()
{
    'use strict';

    angular.module('mp.app.admin').controller('refEntitiesCreateTitleController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateTitleController]);

    function refEntitiesCreateTitleController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state)
    {

        $scope.title = "Create Title";
        $scope.TitleId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.Name = '';        

        function init() {
            console.log('init loading...');
        }
        
        $scope.CreateTitle = function () {
            console.log('Save function triggered');
            var ObjTitleDetailDetail = {
                Name: $scope.Name
            };

            ReferenceEntitiesService.createTitle($scope.TitleId, ObjTitleDetailDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });
                     
            var params = {
                Id: $scope.TitleId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitytitles', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.TitleId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitytitles', params);
        };

        init();


    }



}());
(function () {


    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesTitleDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesTitleDetailController]);

    function refEntitiesTitleDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Titles";
        $scope.titleId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.TitleDetail = {};
              
        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.titleId,
                gridParams: $scope.gridParams,
                mode: 'edit'
            };
            mpNavService.navigateToState('refentitytitleeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjTitleDetail = {
                Name: $scope.TitleDetail.Name,
                IsActive: $scope.TitleDetail.IsActive
            };

            ReferenceEntitiesService.updateTitleDetails($scope.titleId, ObjTitleDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.titleId,
                gridParams: $scope.gridParams,
                mode: 'detail'
            };
            mpNavService.navigateToState('refentitytitledetail', params);
        };

        $scope.Cancel = function () {

            var params = {
                Id: $scope.titleId,
                gridParams: $scope.gridParams,
                mode: 'detail'
            };
            mpNavService.navigateToState('refentitytitledetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams,
                mode: null
            };
            mpNavService.navigateToState('refentitytitles', params);
        };


        function getTitleDetail() {

            ReferenceEntitiesService.getTitleDetail($scope.titleId).then(function (response) {
                console.log('Get Title Service.... ');
                if (response) {
                    $scope.TitleDetail = response.Data;
                    console.log('The value for TitleDetail: ' + $scope.TitleDetail);
                }
            });
        }

             
        getTitleDetail();


    }



}());


(function()
{
    'use strict';

    angular.module('mp.app.admin').controller('refEntitiesTitleController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesTitleController]);

    function refEntitiesTitleController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Titles";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '100%', headerCellClass: 'gridHeader' }
        ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitytitledetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Titles...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getTitles(options).then(function (response) {
                console.log('Get Titles Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }
            
        
        $scope.CreateTitle = function () {

            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatetitle', params);
        };

        load();
    }





}());
(function()
{

    angular.module('mp.app.admin').controller('refEntitiesIndexController', ['ReferenceEntitiesService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', refEntitiesIndexController]);
 
    function refEntitiesIndexController(ReferenceEntitiesService, $scope, $routeParams, $location, mpNavService, $stateParams, $state) {

        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;

        $scope.GoToTitles = function () {
            mpNavService.navigateToState('refentitytitles', null);
        };

        $scope.GoToAusPostalCodes = function () {
            mpNavService.navigateToState('refentityauspostcode', null);
        };

        $scope.GoToCountries = function () {
            mpNavService.navigateToState('refentitycountry', null);
        };

        $scope.GoToLanguages = function () {
            mpNavService.navigateToState('refentitylanguage', null);
        };

        $scope.GoToDiagnosis = function () {
            mpNavService.navigateToState('refentitydiagnosis', null);
        };

        $scope.GoToDriveFocus = function () {
            mpNavService.navigateToState('refentitydrivefocus', null);
        };

        $scope.GoToDriveType = function () {
            mpNavService.navigateToState('refentitydrivetype', null);
        };

        $scope.GoToDriveStatus = function () {
            mpNavService.navigateToState('refentitydrivestatus', null);
        };

        $scope.GoToStatusChangedReason = function () {
            mpNavService.navigateToState('refentitystatuschangedreason', null);
        };

        $scope.GoToCBUStatusChangedReason = function () {
            mpNavService.navigateToState('refentitycbustatuschangedreason', null);
        };

        $scope.GoToInvoiceNumCounters = function () {
            mpNavService.navigateToState('refentityinvoicenumcounter', null);
        };

        $scope.GoToPriceItem = function () {
            mpNavService.navigateToState('refentitypriceitem', null);
        };

        $scope.GoToRelationshipType = function () {
            mpNavService.navigateToState('refentityrelationshiptype', null);
        };
        
        $scope.GoToItemMapping = function () {
            mpNavService.navigateToState('refentityitemmapping', null);
        };               
        
        $scope.GoToFundingType = function () {
            mpNavService.navigateToState('refentityfundingtype', null);
        };                

        $scope.GoToOperationalMetrics = function () {
            mpNavService.navigateToState('refentityoperationalmetrics', null);
        };

        $scope.GoToConfiguration = function () {
            mpNavService.navigateToState('refentityconfiguration', null);
        };

        $scope.GoToReqNotifyConfiguration = function () {
            mpNavService.navigateToState('refentityreqnotifyconfigurationdetail', null);
        };
        
        $scope.GoToNationalities = function () {
            mpNavService.navigateToState('refentitynationality', null);
        };
    }


}());
(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('orgUnitRepCreateRoleController', ['OrgUnitRepresentativeRoleService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', orgUnitRepCreateRoleController]);
 
    function orgUnitRepCreateRoleController(OrgUnitRepresentativeRoleService, $scope, $routeParams, $location, mpNavService, $stateParams, $state) {

        $scope.title = "Create Organisation Unit Representative Role";        
        $scope.uRepId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.OrgUnitRepRolesDetail = {};
           
        function init() {
            console.log('init loading...');

            OrgUnitRepresentativeRoleService.loadOrgUnitRepRoleValues().then(function (response) {
                console.log('Get Org Unit Rep Roles Service.... ');
                if (response) {
                    $scope.OrgUnitRepRolesDetail = response.Data;
                    console.log('The value for OrgUnitRepRolesDetail: ' + $scope.OrgUnitRepRolesDetail);
                }
            });
        }
              

        $scope.CreateOURole = function () {
            console.log('Save function triggered');
            var ObjOrgUnitRepRolesDetail = {
                RoleName: $scope.OrgUnitRepRolesDetail.RoleName,
                UserRoles: $scope.OrgUnitRepRolesDetail.UserRoles,
                OrgUnitTypes: $scope.OrgUnitRepRolesDetail.OrgUnitTypes
            };

            OrgUnitRepresentativeRoleService.CreateOrgUnitRepRole($scope.uRepId, ObjOrgUnitRepRolesDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            $scope.editing = false;

            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproles', params);
        };

        $scope.Cancel = function () {          
            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproles', params);
        };              

        init();

    }


}());



(function()
{

    "use strict";

    angular.module('mp.app.admin').controller('orgUnitRepresentativeRolesController', ['OrgUnitRepresentativeRoleService', '$scope', 'mpNavService', '$stateParams', 'mpDataGridUtils', orgUnitRepresentativeRolesController]);

    function orgUnitRepresentativeRolesController(OrgUnitRepresentativeRoleService, $scope, mpNavService, $stateParams, mpDataGridUtils) {


        $scope.title = "Organisation Unit Representative Roles";
        $scope.gridParams = $stateParams.gridParams;
        
        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [                           
                             { name: 'RoleName', field: 'RoleName', displayName: 'Organisation Unit Representative Rep Role', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: ' Is Active', width: '50%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<div class="ui-grid-cell-contents"><span ng-if="row.entity.IsActive === true">Yes</span><span ng-if="row.entity.IsActive === false">No</span></div>' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'orgunitreprolesdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            enableFiltering: true
        };
        console.log("Calling Organisation Unit Representative Roles...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            OrgUnitRepresentativeRoleService.getOrgUnitRepRoles(options).then(function (response) {
                console.log('Get Organization Unit Representative Service.... ');
                if (response) {                    
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }

        $scope.CreateOURepRole = function () {
                        
            var params = {                
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitcreatereprole', params);

        };
        
        load();
        
    }



}());
(function () {

    "use strict";

    angular.module('mp.app.admin').controller('orgUnitRepRolesDetailController', ['OrgUnitRepresentativeRoleService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', orgUnitRepRolesDetailController]);
 
    function orgUnitRepRolesDetailController(OrgUnitRepresentativeRoleService, $scope, $routeParams, $location, mpNavService, $stateParams, $state)
    {
        $scope.title = "Organisation Unit Representative Role";              
        $scope.editing = true;
        $scope.uRepId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.OrgUnitRepRolesDetail = {};
        
        //$scope.checkUserRepRoleValue = function (name) {
        //    if (name === 'Administrator')
        //        return true;
        //    else
        //        return false;
        //};

        //$scope.checkOrgUnitValue = function (name) {
        //    if (name === 'Independent Transplant Centre')
        //        return true;
        //    else
        //        return false;
        //};
        
        function init() {
            console.log('init loading...');           
              
            OrgUnitRepresentativeRoleService.getOrgUnitRepRolesDetail($scope.uRepId).then(function (response) {
                console.log('Get Org Unit Rep Roles Service.... ');
                if (response) {
                    $scope.OrgUnitRepRolesDetail = response.Data;
                    console.log('The value for OrgUnitRepRolesDetail: ' + $scope.OrgUnitRepRolesDetail);
                }
            });           
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
                var params = {
                    Id: $scope.uRepId,
                    gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproleseditdetail', params);
        };
        
        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjOrgUnitRepRolesDetail = {
                RoleName: $scope.OrgUnitRepRolesDetail.RoleName,
                UserRoles: $scope.OrgUnitRepRolesDetail.UserRoles,
                OrgUnitTypes: $scope.OrgUnitRepRolesDetail.OrgUnitTypes                
            };

            OrgUnitRepresentativeRoleService.updateOrgUnitRepRoleDetails($scope.uRepId, ObjOrgUnitRepRolesDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            $scope.editing = false;
            
            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreprolesdetail', params);
        };

        $scope.Cancel = function () {
            $scope.editing = false;
            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreprolesdetail', params);            
        };
        
        $scope.Close = function () {          
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproles', params);
        };
        
        init();

    }




}());
(function () {

    "use strict";

    angular.module('mp.app.admin').controller('userAccountAttachmentsController', ['$scope', 'mpNavService', '$stateParams', userAccountAttachmentsController]);

    function userAccountAttachmentsController($scope, mpNavService, $stateParams) {
        $scope.NewItem = function () {
            console.log('New Item');
        };

        $scope.Close = function () {
            mpNavService.navigateToState('useraccounts', null);
        };

    }

}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('userAccountDetailController', ['UserAccountService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', userAccountDetailController])
                                  .controller('userAccountDetailTab1Controller', ['UserAccountService', 'mpNavService', '$scope', '$stateParams', userAccountDetailTab1Controller]);
   
    function userAccountDetailController(UserAccountService, $scope, $routeParams, $location, mpNavService, $stateParams, $state) {


        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.model = {
            mode: "detail",
            tabs: [
                {
                    heading: 'Details', tabUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html', isLoaded: false, active: true
                },
                {
                    heading: 'Attachments', tabUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountAttachments.tpl.html', isLoaded: false
                }
            ],
            tabContentUrl: ''
        };

        var params = {
            Id: $scope.ucId,
            gridParams: $scope.gridParams,
        };
        $scope.Errors = null;

        function init() {

        }

        init();

        $scope.select = function (tabData) {
            $scope.model.tabContentUrl = tabData.tabUrl;
        };
    }
       

    function userAccountDetailTab1Controller(UserAccountService, mpNavService, $scope, $stateParams) {
        console.log('The user Account Tab1 Details .. controller loading');

        $scope.mode = "detail";
        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.UserAccountDetails = {};
        $scope.UserRoles = {};
        $scope.title = "User Account Details";
        $scope.Errors = null;

        var params = {
            Id: $scope.ucId,
            gridParams: $scope.gridParams,
        };

        $scope.authMethodValues = {};
        $scope.selectedAuthValue = '';
        //$scope.authMethodValues = [{ name: "RSA (Token)", id: 1 }, { name: "Symantec (Token)", id: 2 }, { name: "Symantec (Email)", id: 3 }, { name: "Symantec (SMS)", id: 4 }];
        //$scope.selectedAuthValue = $scope.authMethodValues[0];

        $scope.editing = true;
        $scope.selectedAuthMethod = {};


        if ($scope.model.mode == 'detail') {

            //Load UserAccountDetails            
            UserAccountService.getUserAccountDetails($scope.ucId).then(function (response) {
                console.log('User Account Details Service.... ' + response.data);
                $scope.UserAccountDetails = angular.fromJson(response.data);
                $scope.UserAccountDetails.mobileNumber = '0414141414';
                if (!$scope.UserAccountDetails.comment)
                    $scope.UserAccountDetails.comment = '1234567890';

                $scope.UserAccountDetails.newUserName = '';              

            }, function (err) {
                console.log("Error" + err);
            });

            //Load UserRoles
            UserAccountService.getUserRoles($scope.ucId).then(function (response) {
                console.log('User Roles .... ' + response.data);
                $scope.UserRoles = angular.fromJson(response.data);
            }, function (err) {
                console.log("Error" + err);
            });
        }
        else
            {
            //loadAuthMethodValues
            UserAccountService.loadAuthMethodValues().then(function (response) {
                $scope.authMethodValues = response.data.Data;

                //Load UserAccountDetails            
                UserAccountService.getUserAccountDetails($scope.ucId).then(function (response) {
                    console.log('User Account Details Service.... ' + response.data);
                    $scope.UserAccountDetails = angular.fromJson(response.data);
                    $scope.UserAccountDetails.mobileNumber = '0414141414';
                    if (!$scope.UserAccountDetails.comment)
                        $scope.UserAccountDetails.comment = '1234567890';

                    $scope.UserAccountDetails.newUserName = '';
                    //Selection of dropdown value
                    var authMethodValue = $scope.UserAccountDetails.authMethod;
                    console.log('authMethodValue:' + authMethodValue);
                    var selectedIndex = 0;
                    for (var i = 0; i < $scope.authMethodValues.length; i++) {
                        var auValue = $scope.authMethodValues[i].Name;
                        if (auValue == authMethodValue) {
                            selectedIndex = i;
                            break;
                        }
                    }
                    $scope.selectedAuthValue = $scope.authMethodValues[selectedIndex];
                    console.log('Selected Option: ' + $scope.selectedAuthValue);

                }, function (err) {
                    console.log("Error" + err);
                });


            }, function (err) {
                console.log("Error" + err);
            });         

        }


        ////LoadAuthMethodValues
        //function init() {
        //    console.log('init loading...');          

        //    //loadAuthMethodValues
        //    UserAccountService.loadAuthMethodValues().then(function (response) {
        //        $scope.authMethodValues = response.data.Data;
        //    }, function (err) {
        //        console.log("Error" + err);
        //    });

        //    //Load UserAccountDetails            
        //    UserAccountService.getUserAccountDetails($scope.ucId).then(function (response) {
        //        console.log('User Account Details Service.... ' + response.data);
        //        $scope.UserAccountDetails = angular.fromJson(response.data);
        //        $scope.UserAccountDetails.mobileNumber = '0414141414';
        //        if (!$scope.UserAccountDetails.comment)
        //            $scope.UserAccountDetails.comment = '1234567890';

        //        $scope.UserAccountDetails.newUserName = '';
        //        //Selection of dropdown value
        //        var authMethodValue = $scope.UserAccountDetails.authMethod;
        //        console.log('authMethodValue:' + authMethodValue);
        //        var selectedIndex = 0;
        //        for (var i = 0; i < $scope.authMethodValues.length; i++) {
        //            var auValue = $scope.authMethodValues[i].Name;
        //            if (auValue == authMethodValue) {
        //                selectedIndex = i;
        //                break;
        //            }
        //        }
        //        $scope.selectedAuthValue = $scope.authMethodValues[selectedIndex];
        //        console.log('Selected Option: ' + $scope.selectedAuthValue);

        //    }, function (err) {
        //        console.log("Error" + err);
        //    });

        //    //Load UserRoles
        //    UserAccountService.getUserRoles($scope.ucId).then(function (response) {
        //        console.log('User Roles .... ' + response.data);
        //        $scope.UserRoles = angular.fromJson(response.data);
        //    }, function (err) {
        //        console.log("Error" + err);
        //    });

        //}

        $scope.EditItem = function () {           
            //var params = {
            //    Id: $scope.ucId,
            //    gridParams: $scope.gridParams
            //};
            //mpNavService.navigateToState('useraccounteditdetail', params);
            $scope.model.mode = "edit";
            $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountEditDetail.tpl.html";                    
        };

        $scope.Close = function () {
            var params = {
                Id: $scope.ucId,
                gridParams: $scope.gridParams,
            };

            mpNavService.navigateToState('useraccounts', params);
        };

        $scope.submit = function () {
            $scope.Save();        
        };

        $scope.Save = function () {
            var ObjUserAccountDetail = {
                Id: $scope.ucId,
                Email: $scope.UserAccountDetails.email,
                AlternativeEmail: $scope.UserAccountDetails.alternateEmail,
                AuthMethod: $scope.UserAccountDetails.authMethod,
                Comment: $scope.UserAccountDetails.comment
            };

            UserAccountService.updateUserAccountDetails($scope.ucId, ObjUserAccountDetail)
             .then(function (response) {
                     //if (res.data && res.data.Status && res.data.Status == "Error") {
                     //    $scope.Errors = res.data.Errors;
                     //}
                     //if (!res.data || (res.data && !res.data.Status)) {
                     //    params = _.defaults(params, {
                     //        mode: null
                     //    });
                     //    $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html";
                 //}

                 params = _.defaults(params, {
                     mode: null
                 });
                 $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html";

                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

           // $scope.editing = false;
           
            //var params = {
            //    Id: $scope.ucId,
            //    gridParams: $scope.gridParams
            //};
            //mpNavService.navigateToState('useraccountdetailindex', params);
        };

        $scope.Cancel = function () {
            //$scope.editing = false;
            //var params = {
            //    Id: $scope.ucId,
            //    gridParams: $scope.gridParams
            //};
            //mpNavService.navigateToState('useraccountdetailindex', params);
            ////$location.path('/useraccountdetail/' + $scope.ucId);

            params = _.defaults(params, {
                mode: null
            });
            // mpNavService.navigateToState('organisationunitdetails', params);
            $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html";

        };

        //init();
    }
}());


//(function(){
//    "use strict";

//    angular.module('mp.app.admin').controller('userAccountDetailIndexController', ['$scope', 'mpNavService', '$stateParams', userAccountDetailIndexController]);

//    function userAccountDetailIndexController($scope, mpNavService, $stateParams)
//    {
//        $scope.title = "User Account Details";
//        $scope.ucId = $stateParams.Id;
//        $scope.gridParams = $stateParams.gridParams;
//        $scope.tabs = [
//         { heading: 'Details', template: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html' },
//         { heading: 'Attachments', template: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountAttachments.tpl.html' }
//        ];

//    }


//}());
(function () {
    "use strict";

    angular.module('mp.app.admin').controller('userAccountController', ['UserAccountService', '$scope', '$filter', '$stateParams', 'uiGridConstants', 'mpDataGridUtils', userAccountController]);

    function userAccountController(UserAccountService, $scope, $filter, $stateParams, uiGridConstants, mpDataGridUtils) {
        
        $scope.title = "User Accounts";         
        $scope.gridParams = $stateParams.gridParams;
        

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);        

        $scope.gridColumnDefs = [{ name: 'Id', field: 'Id', displayName: 'Serial No', width: '10%',headerCellClass: 'gridHeader', filters: [{ condition: uiGridConstants.filter.CONTAINS, placeholder: 'Contains' }, { condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: 'Greater than or equal' }] },
                                     { name: 'userName', field: 'userName', displayName: 'User name',headerCellClass: 'gridHeader',  width: '15%' },
                                     { name: 'email', field: 'email', displayName: 'Email', headerCellClass: 'gridHeader', width: '20%' },
                                     { name: 'userOnlineDetails', field: 'userOnlineDetails', displayName: 'User Is Online', width: '20%', headerCellClass: 'gridHeader', enableFiltering: false },
                                     { name: 'isLocked', field: 'isLocked', displayName: 'Is Locked', width: '15%', enableFiltering: false, headerCellClass: 'gridHeader', visible: false },
                                     { name: 'birthday', field: 'birthday', displayName: 'Birthday', width: '20%', enableFiltering: false, headerCellClass: 'gridHeader', cellFilter: 'date:"longDate"'}
        ];
              
        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'useraccountdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            enableFiltering: true,
            showDeactvated: false,
            showSearchSection: true,
            enablePaginationControls: true,
            enableExport: true,
            gridColumnDefs: $scope.gridColumnDefs
        };
        console.log("Calling Get User Accounts...");

        function load(options) {
            if (!options && $scope.gridParams) 
                options = $scope.gridParams;            

            options = mpDataGridUtils.getDefaultOptions(options);

            UserAccountService.getUserAccountsV2(options).then(function (response) {
                console.log('Get user Account Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);                   
                }
            });
        }

        load();
    }
}());


(function () {
    "use strict";

    angular.module('mp.app.admin').controller('userAdminIndexController', ['$scope', 'mpNavService', '$stateParams', userAdminIndexController]);


    function userAdminIndexController($scope, mpNavService, $stateParams) {

        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;

        $scope.GoToOU = function () {
            mpNavService.navigateToState('orgunitreproles', null);
        };

        $scope.GoToUserAccounts = function () {
            mpNavService.navigateToState('useraccounts', null);
        };

        $scope.GoToLogHistory = function () {
            mpNavService.navigateToState('organisationunits', null);
        };
    }


}());
(function () {

    angular.module('mp.app.admin')
        .service('UserAccountService', ['$http', 'mpLocalStorage', 'mpWebService',  UserAccountService]);

    function UserAccountService($http, mpLocalStorage, mpWebService) {

        var self = this;
        var DEFAULT_PAGESIZE = 20;
        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        self.getUserAccounts = function (options) {
            
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null,
                    filterColumns: null
                });
            
            return mpWebService.callWebApi('POST', data, '/UserAccountAPI/getUserAccounts').then(function (response) {               
                return response ? response.data : null;
            });

        };

        self.getUserAccountsV2 = function (options) {
            
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null,
                    filterColumns: null
                });

            return mpWebService.callWebApi2('POST', data, '/UserAccountAPI/GetUserAccountsV2').then(function (response) {
                return response ? response.data : null;
            });

        };


        ////Get UserAccounts
        //self.getUserAccounts2 = function (options) {
        //    var DEFAULT_PAGESIZE = 50;
        //    var data = _.defaults(options,
        //        {
        //            searchText: '',
        //            pageNumber: 1,
        //            pageSize: DEFAULT_PAGESIZE,
        //            sortColumns : null
        //        });
           
        //    return $http({
        //        method: 'POST',
        //        data: data,
        //        url: '/UserAccountAPI/getUserAccounts'
        //    }).then(function successCallback(response) {
        //        if (response && response.data)
        //            return response.data;
        //        else
        //            return [];

        //    }, function errorCallback(response) {
        //        alert(error);
        //    }); 

        //};

        //Get UserAccountDetails
        self.getUserAccountDetails = function (uAccId) {

            console.log('The User Account Id...' + uAccId);

            return mpWebService.callWebApi('GET', null, '/UserAccountAPI/GetUserAccountDetails/' + uAccId).then(function (response) {
                console.log('The Response for GetUserAccountDetails...');

                return response;
            });
            
        };

        // Get UserRoles
        self.getUserRoles = function (uAccId) {
            return mpWebService.callWebApi('GET', null, '/UserAccountAPI/GetUserRoles/' + uAccId).then(function (response) {                
                return response;
            });
        };
            
        
        self.updateUserDetails = function (uAccId, userAccountDetails, userRoles) {
            var data = JSON.stringify(
                    {
                        UserId: uAccId,
                        UserAccountDetail: userAccountDetails,
                        UserRole: userRoles
                    });

            return mpWebService.callWebApi('POST', data, '/UserAccountAPI/UpdateUserDetails').then(function (response) {
                console.log('The Response for UpdateUserAccountDetails...');

                return response;
            });          
        };

        //Update UserAccountDetails
        self.updateUserAccountDetails = function (userAccId, userAccountDetails) {
            var data = JSON.stringify(
                    {
                        UserId: userAccId,
                        UserAccountDetail: userAccountDetails                        
                    });
            return mpWebService.callWebApi('POST', userAccountDetails, '/UserAccountAPI/UpdateUserAccountDetails').then(function (response) {
                console.log('The Response for UpdateUserAccountDetails...');

                return response;
            });
           
        };

        //LoadAuthMethodValues
        self.loadAuthMethodValues = function () {
            var data = null;
            return mpWebService.callWebApi('POST', data, '/UserAccountAPI/LoadAuthMethodValues').then(function (response) {
                console.log('The Response for LoadAuthMethodValues...');

                return response;
            });

        };


        ////Update UserRoles
        //self.updateUserRoles = function (uAccId, userRoles) {

        //    return $http({
        //        method: 'PUT',
        //        url: '/UserAccountAPI/UpdateUserRoles/' + uAccId,
        //        data: userRoles,
        //        dataType: 'json',
        //        contentType: "application/json"

        //    }).then(function successCallback(response) {

        //        console.log('The Response for UpdateUserAccountDetails...');

        //        return response;

        //    }, function errorCallback(response) {
        //        alert(error);
        //    });


        //};


        
    }
}());


(function () {

    angular.module('mp.app.admin')
        .service('OrgUnitRepresentativeRoleService', ['$http', 'mpLocalStorage', 'mpWebService', OrgUnitRepresentativeRoleService]);

    function OrgUnitRepresentativeRoleService($http, mpLocalStorage, mpWebService) {

        var self = this;

        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        //GetOrgUnitRepRoles
        self.getOrgUnitRepRoles = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });

            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/GetOrgUnitRepRoles').then(function (response) {
                return response ? response.data : null;
            });
        };

       
        //GetOrgUnitRepRolesDetail
        self.getOrgUnitRepRolesDetail = function (userRepId) {   
            return mpWebService.callWebApi('POST', userRepId, '/OrgUnitRepRolesAPI/GetOrgUnitRepRolesDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateOrgUnitRepRolesDetails
        self.updateOrgUnitRepRoleDetails = function (userRepId, objRepRoleDetails) {
            console.log('Inside updateOrgUnitRepRoleDetails');
            var data = {
                Id: userRepId,
                UserRepRole: objRepRoleDetails
            };

            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/UpdateOrgUnitRepRolesDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //LoadOrgUnitRepRoleValues
        self.loadOrgUnitRepRoleValues = function () {
            console.log('Inside LoadOrgUnitRepRole');
            var data = null;
            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/LoadOrgUnitRepRoleValues').then(function (response) {
                return response ? response.data : null;
            });
        };


        //CreateOrgUnitRepRole
        self.CreateOrgUnitRepRole = function () {
            console.log('Inside CreateOrgUnitRepRole');
            var data = null;
            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/CreateOrgUnitRepRole').then(function (response) {
                return response ? response.data : null;
            });
        };

    }
}());


(function () {

    angular.module('mp.app.admin')
        .service('ReferenceEntitiesService', ['$http', 'mpLocalStorage', 'mpWebService', ReferenceEntitiesService]);

    function ReferenceEntitiesService($http, mpLocalStorage, mpWebService) {

        var self = this;

        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        // Titles - Start
        //GetTitles
        self.getTitles = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST',data,'/RefEntitiesAPI/GetTitles').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetTitlesDetail
        self.getTitleDetail = function (titleId) {
            return mpWebService.callWebApi('POST', titleId, '/RefEntitiesAPI/GetTitleDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //updateTitleDetails        
        self.updateTitleDetails = function (titleId, objTitleDetails) {
            console.log('Inside Update Title Details');
            var data = {
                Id: titleId,
                Title: objTitleDetails
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateTitleDetail').then(function (response) {
                return response ? response.data : null;
            });
        };
        
        //CreateTitle
        self.createTitle = function (titleId, objTitleDetails) {
            console.log('Inside Create Title');
            var data = {
                Id: titleId,
                Title: objTitleDetails
            };

            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateTitle').then(function (response) {
                return response ? response.data : null;
            });
        };

        ////GetAllTitles
        //self.getAllTitles = function (options) {
        //    var DEFAULT_PAGESIZE = 20;
        //    var data = _.defaults(options,
        //        {
        //            searchText: '',
        //            pageNumber: 1,
        //            pageSize: DEFAULT_PAGESIZE,
        //            sortColumns: null
        //        });
        //    return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetAllTitles').then(function (response) {
        //        return response ? response.data : null;
        //    });
        //};
        //Titles - End

        //Australian Postal Codes - Start
        //GetPostalCodes
        self.getPostalCodes = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetPostalCodes').then(function (response) {
                return response ? response.data : null;
            });
        };
        
        //GetPostalCodeDetail
        self.getPostalCodeDetail = function (pId) {
            return mpWebService.callWebApi('POST', pId, '/RefEntitiesAPI/GetPostalCodeDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdatePostalCodeDetail
        self.updateAusPostalCodeDetails = function (pId,ObjPostalCodeDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: pId,
                PostalCodeDetail: ObjPostalCodeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdatePostalCodeDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreatePostalCode
        self.CreatePostalCode = function (postalId, objPostalCodeDetail) {
            console.log('Inside Create Postal Code');

            var data = {
                Id: postalId,
                PostalCodeDetail: objPostalCodeDetail
            };

            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreatePostalCode').then(function (response) {
                return response ? response.data : null;
            });

        };
        //Australian Postal Codes - End
        
        //Countries - Start
        //GetCountries
        self.getCountries = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetCountries').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetCountryDetail
        self.getCountryDetail = function (cId) {
            return mpWebService.callWebApi('POST', cId, '/RefEntitiesAPI/GetCountryDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateCountryDetails
        self.updateCountryDetails = function (cId, ObjCountryDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: cId,
                CountryDetail: ObjCountryDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateCountryDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateCountry
        self.CreateCountry = function (cId, objCountryDetail) {
            console.log('Inside Create Postal Code');

            var data = {
                Id: cId,
                CountryDetail: objCountryDetail
            };

            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateCountry').then(function (response) {
                return response ? response.data : null;
            });

        };
        //Countries - End

        //Languages - Start

        //GetLanguages
        self.getLanguages = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetLanguages').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetLanguageDetail
        self.getLanguageDetail = function (langId) {
            return mpWebService.callWebApi('POST', langId, '/RefEntitiesAPI/GetLanguageDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateLanguageDetail
        self.updateLanguageDetails = function (langId, ObjLanguageDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: langId,
                LanguageDetail: ObjLanguageDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateLanguageDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateLanguage
        self.createLanguage = function (langId, objLanguageDetail) {
            console.log('Inside Create Language');

            var data = {
                Id: langId,
                LanguageDetail: objLanguageDetail
            };

            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateLanguage').then(function (response) {
                return response ? response.data : null;
            });
        };
        //Languages - End

        //Diagnosis - ICD10 - Start

        //GetDiagnosis
        self.getDiagnosis = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetDiagnosis').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetDiagnosisDetail
        self.getDiagnosisDetail = function (diagId) {
            return mpWebService.callWebApi('POST', diagId, '/RefEntitiesAPI/GetDiagnosisDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateDiagnosisDetail
        self.updateDiagnosisDetails = function (diagId, ObjDiagnosisDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: diagId,
                DiagnosisDetail: ObjDiagnosisDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateDiagnosisDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateDiagnosis
        self.createDiagnosis = function (diagId, objDiagnosisDetail) {
            console.log('Inside Create Diagnosis');
            var data = {
                Id: diagId,
                DiagnosisDetail: objDiagnosisDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateDiagnosis').then(function (response) {
                return response ? response.data : null;
            });
        };
        //Diagnosis - ICD10 - End

        // Drive Focus - Start
        //GetDriveFocus
        self.getDriveFocus = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetDriveFocus').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetDriveFocusDetail
        self.getDriveFocusDetail = function (dFId) {
            return mpWebService.callWebApi('POST', dFId, '/RefEntitiesAPI/GetDriveFocusDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateDriveFocusDetail
        self.updateDriveFocusDetails = function (dFId, ObjDriveFocusDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: dFId,
                DriveFocusDetail: ObjDriveFocusDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateDriveFocusDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateDriveFocus
        self.createDriveFocus = function (dFId, objDriveFocusDetail) {
            console.log('Inside Create Focus');
            var data = {
                Id: dFId,
                DriveFocusDetail: objDriveFocusDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateDriveFocus').then(function (response) {
                return response ? response.data : null;
            });
        };
        // Drive Focus - End

        // Drive Type - Start

        //GetDriveType
        self.getDriveType = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetDriveType').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetDriveTypeDetail
        self.getDriveTypeDetail = function (dTId) {
            return mpWebService.callWebApi('POST', dTId, '/RefEntitiesAPI/GetDriveTypeDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateDriveTypeDetail
        self.updateDriveTypeDetails = function (dTId, ObjDriveTypeDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: dTId,
                DriveTypeDetail: ObjDriveTypeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateDriveTypeDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateDriveType
        self.createDriveType = function (dTId, objDriveTypeDetail) {
            console.log('Inside Create Focus');
            var data = {
                Id: dTId,
                DriveTypeDetail: objDriveTypeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateDriveType').then(function (response) {
                return response ? response.data : null;
            });
        };
        // Drive Type - End

        // Drive Status - Start
        
        //GetDriveStatus
        self.getDriveStatus = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetDriveStatus').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetDriveStatusDetail
        self.getDriveStatusDetail = function (dSId) {
            return mpWebService.callWebApi('POST', dSId, '/RefEntitiesAPI/GetDriveStatusDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateDriveStatusDetail
        self.updateDriveStatusDetails = function (dSId, ObjDriveStatusDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: dSId,
                DriveStatusDetail: ObjDriveStatusDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateDriveStatusDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateDriveStatus
        self.createDriveStatus = function (dSId, objDriveStatusDetail) {
            console.log('Inside Create Status');
            var data = {
                Id: dSId,
                DriveStatusDetail: objDriveStatusDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateDriveStatus').then(function (response) {
                return response ? response.data : null;
            });
        };        
        // Drive Status - End

        // Status Changed Reason - Start
        self.getStatusChangedReasons = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetStatusChangedReason').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetStatusChangedReasonDetail
        self.getStatusChangedReasonDetail = function (dSId) {
            return mpWebService.callWebApi('POST', dSId, '/RefEntitiesAPI/GetStatusChangedReasonDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateStatusChangedReasonDetail
        self.updateStatusChangedReasonDetails = function (scrId, ObjStatusChangedReasonDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: scrId,
                StatusChangedReasonDetail: ObjStatusChangedReasonDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateStatusChangedReasonDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateStatusChangedReason
        self.createStatusChangedReason = function (scrId, objStatusChangedReasonDetail) {
            console.log('Inside Create Status Changed Reason');
            var data = {
                Id: scrId,
                StatusChangedReasonDetail: objStatusChangedReasonDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateStatusChangedReason').then(function (response) {
                return response ? response.data : null;
            });
        };

        //loadStatusChangedReasonItems
        self.loadStatusChangedReasonItems = function () {
            var data = null;
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/LoadStatusChangedReasonItems').then(function (response) {
                return response ? response.data : null;
            });
        };
        // Status Changed Reason - End

        // CBU Status Changed Reason - Start

        self.getCBUStatusChangedReasons = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetCBUStatusChangedReason').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetCBUStatusChangedReasonDetail
        self.getCBUStatusChangedReasonDetail = function (dSId) {
            return mpWebService.callWebApi('POST', dSId, '/RefEntitiesAPI/GetCBUStatusChangedReasonDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateCBUStatusChangedReasonDetail
        self.updateCBUStatusChangedReasonDetails = function (scrId, ObjCBUStatusChangedReasonDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: scrId,
                CBUStatusChangedReasonDetail: ObjCBUStatusChangedReasonDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateCBUStatusChangedReasonDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateCBUStatusChangedReason
        self.createCBUStatusChangedReason = function (scrId, objCBUStatusChangedReasonDetail) {
            console.log('Inside Create Status Changed Reason');
            var data = {
                Id: scrId,
                CBUStatusChangedReasonDetail: objCBUStatusChangedReasonDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateCBUStatusChangedReason').then(function (response) {
                return response ? response.data : null;
            });
        };

        //loadCBUStatusChangedReasonItems
        self.loadCBUStatusChangedReasonItems = function () {
            var data = null;
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/LoadCBUStatusChangedReasonItems').then(function (response) {
                return response ? response.data : null;
            });
        };
        // CBU Status Changed Reason- End

        // Invoice Number Counter - Start
        self.getInvoiceNumCounter = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetInvoiceNumberCounters').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetInvoiceNumberCounterDetail
        self.getInvoiceNumCounterDetail = function (iNumId) {
            return mpWebService.callWebApi('POST', iNumId, '/RefEntitiesAPI/GetInvoiceNumberCounterDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateInvoiceNumberCounterDetail
        self.updateInvoiceNumCounterDetails = function (iNumId, ObjInvoiceNumberCounterDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: iNumId,
                InvoiceNumberCounterDetail: ObjInvoiceNumberCounterDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateInvoiceNumberCounterDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateInvoiceNumberCounter
        self.createInvoiceNumCounter = function (iNumId, objInvoiceNumberCounterDetail) {
            console.log('Inside Create Status Changed Reason');
            var data = {
                Id: iNumId,
                InvoiceNumberCounterDetail: objInvoiceNumberCounterDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateInvoiceNumberCounter').then(function (response) {
                return response ? response.data : null;
            });
        };        
        // Invoice Number Counter - End
        
        // Price Item - Start
        //getPriceItem
        self.getPriceItems = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetPriceItems').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetPriceItemDetail
        self.getPriceItemDetail = function (pId) {
            return mpWebService.callWebApi('POST', pId, '/RefEntitiesAPI/GetPriceItemDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdatePriceItemDetail
        self.updatePriceItemDetails = function (pId, ObjPriceItemDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: pId,
                PriceItemDetail: ObjPriceItemDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdatePriceItemDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreatePriceItem
        self.createPriceItem = function (pId, objPriceItemDetail) {
            console.log('Inside Create Status Changed Reason');
            var data = {
                Id: pId,
                PriceItemDetail: objPriceItemDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreatePriceItem').then(function (response) {
                return response ? response.data : null;
            });
        };
        // Price Item - End

        // RelationshipType - Start
        //GetRelationshipTypes
        self.getRelationshipTypes = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetRelationshipTypes').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetRelationshipTypeDetail
        self.getRelationshipTypeDetail = function (pId) {
            return mpWebService.callWebApi('POST', pId, '/RefEntitiesAPI/GetRelationshipTypeDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateRelationshipTypeDetail
        self.updateRelationshipTypeDetails = function (pId, ObjRelationshipTypeDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: pId,
                RelationshipTypeDetail: ObjRelationshipTypeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateRelationshipTypeDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateRelationshipType
        self.createRelationshipType = function (pId, objRelationshipTypeDetail) {
            console.log('Inside Create Relationship Type');
            var data = {
                Id: pId,
                RelationshipTypeDetail: objRelationshipTypeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateRelationshipType').then(function (response) {
                return response ? response.data : null;
            });
        };
        // RelationshipType - End

        // Item Mappings - Start
        self.getItemMapping = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetItemMappings').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetItemMappingDetail
        self.getItemMappingDetail = function (iMapId) {
            return mpWebService.callWebApi('POST', iMapId, '/RefEntitiesAPI/GetItemMappingDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateItemMappingDetail
        self.updateItemMappingDetails = function (iMapId, ObjItemMappingDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: iMapId,
                ItemMappingDetail: ObjItemMappingDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateItemMappingDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateItemMappings
        self.createItemMapping = function (iMapId, objItemMappingDetail) {
            console.log('Inside Create Status Changed Reason');
            var data = {
                Id: iMapId,
                ItemMappingDetail: objItemMappingDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateItemMappings').then(function (response) {
                return response ? response.data : null;
            });
        };
        // Item Mappings - End

        // Funding Type - Start
        self.getFundingType = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetFundingTypes').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetFundingTypeDetail
        self.getFundingTypeDetail = function (fId) {
            return mpWebService.callWebApi('POST', fId, '/RefEntitiesAPI/GetFundingTypeDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateFundingTypeDetail
        self.updateFundingTypeDetails = function (fId, ObjFundingTypeDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: fId,
                FundingTypeDetail: ObjFundingTypeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateFundingTypeDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateFundingType
        self.createFundingType = function (fId, objFundingTypeDetail) {
            console.log('Inside Create Status Changed Reason');
            var data = {
                Id: fId,
                FundingTypeDetail: objFundingTypeDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateFundingType').then(function (response) {
                return response ? response.data : null;
            });
        };

        // Funding Type - End
      
        // Operational Metrics - Start

        self.getOperationalMetrics = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetOperationalMetrics').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetOperationalMetricDetail
        self.getOperationalMetricsDetail = function (fId) {
            return mpWebService.callWebApi('POST', fId, '/RefEntitiesAPI/GetOperationalMetricsDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateOperationalMetricsDetail
        self.updateOperationalMetricsDetails = function (fId, ObjOperationalMetricDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: fId,
                OperationalMetricDetail: ObjOperationalMetricDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateOperationalMetricsDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        // Operation Metrics - End
       
        // Configuration - Start        
        self.getConfigurations = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetRefEntityConfiguration').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetConfigurationDetail
        self.getConfigurationDetail = function (confId) {
            return mpWebService.callWebApi('POST', confId, '/RefEntitiesAPI/GetRefEntityConfigurationDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateConfigurationDetail
        self.updateConfigurationDetails = function (confId, ObjConfigurationDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: confId,
                ConfigurationDetail: ObjConfigurationDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateRefEntityConfigurationDetail').then(function (response) {
                return response ? response.data : null;
            });
        };
        // Configuration - End

        // ReqNotifyConfiguration - Start

        //GetReqNotifyConfigurationDetail
        self.getReqNotifyConfigurationDetail = function (reqNotifyId) {
            return mpWebService.callWebApi('POST', reqNotifyId, '/RefEntitiesAPI/GetReqNotifyConfigurationDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //UpdateReqNotifyConfigurationDetail
        self.updateReqNotifyConfigurationDetails = function (reqNotifyId, ObjReqNotifyConfigurationDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: reqNotifyId,
                ReqNotifyConfigurationDetail: ObjReqNotifyConfigurationDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateReqNotifyConfigurationDetail').then(function (response) {
                return response ? response.data : null;
            });
        };        
        // ReqNotifyConfiguation - End

        // Nationalities - Start

        //GetNationalities
        self.getNationalities = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/GetNationalities').then(function (response) {
                return response ? response.data : null;
            });
        };

        //GetNationalityDetail
        self.getNationalityDetail = function (nId) {
            return mpWebService.callWebApi('POST', nId, '/RefEntitiesAPI/GetNationalityDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateNationalityDetail
        self.updateNationalityDetails = function (pId, ObjNationalityDetail) {
            var DEFAULT_PAGESIZE = 20;
            var data = {
                Id: pId,
                NationalityDetail: ObjNationalityDetail
            };
            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/UpdateNationalityDetail').then(function (response) {
                return response ? response.data : null;
            });
        };

        //CreateNationality
        self.createNationality = function (nId, objNationalityDetail) {
            console.log('Inside Create Nationality');

            var data = {
                Id: nId,
                NationalityDetail: objNationalityDetail
            };

            return mpWebService.callWebApi('POST', data, '/RefEntitiesAPI/CreateNationality').then(function (response) {
                return response ? response.data : null;
            });

        };

        // Nationalities - End











    }


}());


(function () {
    "use strict";

    angular.module('app')

    .controller('LoginController', function ($scope, $location, mpLocalStorage, AuthenticationService,mpNotification, $http, $httpParamSerializerJQLike) {
            // reset login status
            //AuthenticationService.ClearCredentials();

        $scope.model = {
            username : '',
            password: '',
            loginMode: true,
            error: null
        };

        $scope.oldlogin = function () {
            $scope.dataLoading = true;

            if (mpLocalStorage) {
                AuthenticationService.Login($scope.model.username, $scope.model.password).then(function (response) {
                    if (response) {                                                       
                        AuthenticationService.SetCredentials(response, $scope.model.username);
                        $location.path('/');
                    }

                });

            }

            //if ($scope.username === 'patientuser') {
            //    mpLocalStorage.setObject("credential", { id: 1, name: "patient user", role: "patientRole" });
            //} else if ($scope.username === 'donoruser') {
            //    mpLocalStorage.setObject("credential", { id: 2, name: "donor user", role: "donorRole" });
            //} else {
            //    mpLocalStorage.setObject("credential", { id: 2, name: "other user", role: "allRole" });
            //}

            //mpLocalStorage.setItem("TokenInfo", 'Basic RURDXEFkbWluaXN0cmF0b3I6UGFzc3dvcmQ=');


            $location.path('/');
            //AuthenticationService.Login($scope.username, $scope.password, function (response) {
            //    if (response.success) {
            //        AuthenticationService.SetCredentials($scope.username, $scope.password);
            //        $location.path('/');
            //    } else {
            //        $scope.error = response.message;
            //        $scope.dataLoading = false;
            //    }
            //});
        };

        $scope.login = function () {

            $scope.dataLoading = true;

            if (mpLocalStorage) {
                AuthenticationService.LoginMVCWebApi($scope.model.username, $scope.model.password).then(function (response) {
                    if (response) {
                        AuthenticationService.SetBearerCredentials(response);
                        $location.path('/');
                    }

                    $scope.dataLoading = false;
                });
            }                
        };

        $scope.register = function () {
            $scope.dataLoading = true;

            if (mpLocalStorage) {
                AuthenticationService.registerMVCWebApi($scope.model.username, $scope.model.password).then(function (response) {
                    if (response !== null) {
                        $scope.model.username = '';
                        $scope.model.password = '';
                        $scope.model.loginMode = true;
                        $scope.dataLoading = false;
                        mpNotification.notify('register successful');                       
                    }

                    $scope.dataLoading = false;
                });
            }
        };
   });
}());
(function () {
    "use strict";

    angular.module('mp.app.donors').controller('donorsController', donorsController);

    function donorsController($scope) {
        $scope.title = 'Donors';

    }
}());


(function () {
    "use strict";

    angular.module('mp.app.organisationUnits').controller('OrganisationUnitController', ['OrganisationUnitService', '$scope', '$stateParams', 'mpDataGridUtils', OrganisationUnitController]);

    function OrganisationUnitController(OrganisationUnitService, $scope, $stateParams, mpDataGridUtils) {

        $scope.title = "Organisation Units";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                                    //{ name: 'Id', field: 'Id', displayName: 'Id', width: '10%', headerCellClass: 'gridHeader' },
                                     { name: 'Name', field: 'Name', displayName: 'Name', width: '40%', headerCellClass: 'gridHeader' },
                                     { name: 'Alias', field: 'Alias', displayName: 'Alias', width: '30%', headerCellClass: 'gridHeader' },
                                     { name: 'IsGovernedBy', field: 'IsGovernedBy', displayName: 'Is GovernedBy', width: '30%', headerCellClass: 'gridHeader' }
        ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'organisationunitdetails',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            enableFiltering: true
        };
        console.log("Calling Get org units...");

        function load(options) {

            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            OrganisationUnitService.getOrganisationUnits(options).then(function (response) {
                console.log('Get Org Unit Service.... ');
              
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }

        load();
    }
}());


(function () {
    "use strict";

    angular.module('mp.app.organisationUnits').controller('ouDetailsController', ['OrganisationUnitService', 'mpNavService', '$scope', '$stateParams', ouDetailsController])
        .controller('ouDetailsTab1Controller', ['OrganisationUnitService', 'mpNavService', '$scope', '$stateParams', ouDetailsTab1Controller])
        .controller('ouDetailsTab2Controller', ouDetailsTab2Controller)
        .controller('ouDetailsTab3Controller', ouDetailsTab3Controller);

    function ouDetailsController(OrganisationUnitService, mpNavService, $scope, $stateParams) {

        $scope.ouId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.model = {
            mode: "detail",
            tabs: [
                {
                    heading: 'Details', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html', isLoaded: false, active: true
                },
                {
                    heading: 'Alias', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetailsAlias.tpl.html', isLoaded: false
                }
            ],
            tabContentUrl: ''
        };
        // $scope.tabContentUrl = "";
        var params = {
            Id: $scope.ouId,
            gridParams: $scope.gridParams,
        };
        $scope.Errors = null;
        //$scope.tabs = [
        //               {
        //                   heading: 'Details', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html', isLoaded: false, active: true
        //               },
        //               { heading: 'Alias', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetailsAlias.tpl.html', isLoaded: false }
        //];

        function init() {

        }

        init();

        $scope.select = function (tabData) {
            $scope.model.tabContentUrl = tabData.tabUrl;
            //if (!tabData.isLoaded) {
            //    tabData.isLoaded = true;
            //    $scope.tabContentUrl = tabData.tabUrl;
            //}
        };


    }

    function ouDetailsTab2Controller() {

    }

    function ouDetailsTab3Controller() {

    }

    function ouDetailsTab1Controller(OrganisationUnitService, mpNavService, $scope, $stateParams) {

        $scope.ouId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.mode = "detail";
        //$stateParams.mode;
        $scope.OrgUnit = {};
        //   $scope.tabContentUrl = "";
        var params = {
            Id: $scope.ouId,
            gridParams: $scope.gridParams,
        };
        $scope.Errors = null;

        function init() {

            OrganisationUnitService.getOrganisationUnitDetails($scope.ouId).then(function (data) {
                $scope.OrgUnit = angular.fromJson(data);
                $scope.title = $scope.title + $scope.OrgUnit.Name;
            });
            $scope.title = "Organisation Unit Details - ";
        }

        init();


        $scope.back = function () {
            params = {
                Id: $scope.ouId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('organisationUnits', params);
        };

        //$scope.select = function (tabData) {
        //    $scope.tabContentUrl = tabData.tabUrl;
        //    //if (!tabData.isLoaded) {
        //    //    tabData.isLoaded = true;
        //    //    $scope.tabContentUrl = tabData.tabUrl;
        //    //}
        //};



        $scope.edit = function () {
            $scope.model.mode = "edit";
            $scope.model.tabContentUrl = "../app/Governance/Views/OrganisationUnit/ouDetailsEdit.tpl.html";

            //params = {
            //    Id: $scope.ouId,
            //    gridParams: $scope.gridParams,
            //    mode: 'edit'
            //};
            //mpNavService.navigateToState('organisationunitDetailsEdit', params);


        };

        $scope.submit = function () {
            OrganisationUnitService.editOrganisationUnit($scope.OrgUnit).then(function (res) {
                if (res.data && res.data.Status && res.data.Status == "Error") {
                    $scope.Errors = res.data.Errors;
                }
                if (!res.data || (res.data && !res.data.Status)) {
                    params = _.defaults(params, {
                        mode: null
                    });
                    $scope.model.tabContentUrl = "../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html";
                    //  mpNavService.navigateToState('organisationunitdetails', params);
                }
            }, function (err) {
                alert(err);
                // $scope.Error = "Error" + err;
            });
        };


        $scope.cancel = function () {
            params = _.defaults(params, {
                mode: null
            });
            // mpNavService.navigateToState('organisationunitdetails', params);
            $scope.model.tabContentUrl = "../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html";

        };
    }

}());


(function () {
    "use strict";

    angular.module('mp.app.organisationUnits').controller('ouDetailsAliasController', ['OrganisationUnitService', 'mpNavService', '$scope', '$routeParams', ouDetailsAliasController]);

    function ouDetailsAliasController(OrganisationUnitService, mpNavService, $scope, $routeParams) {

        $scope.ouId = $routeParams.Id;
        $scope.Aliases = [];
        //[{ Name: "aaaa" }, { Name: "bbbb" }];
        $scope.Alias = "asasasa";
        function init() {
            OrganisationUnitService.getOrganisationUnitAliases($scope.ouId).then(function (data) {

                $scope.Aliases = angular.fromJson(data.Aliases);
            });
        }

        init();

        $scope.back = function () {
            mpNavService.navigateToState('organisationUnits');
        };

        $scope.gridOptions = {
            detailPageState: null,
            callBackFunction: null,
            pageSize: 10,
            showSearch: false,
            gridColumnDefs: [
                { name: 'Name', field: 'Name', displayName: 'Alias', width: '100%', headerCellClass: 'gridHeader' },
            ]
        };
        console.log("Calling Get org unit  Aliases...");

        function load(options) {
            options = _.defaults(options, {
                searchText: '',
                pageNumber: 1,
                pageSize: 10,
                sortColumns: null
            });
            OrganisationUnitService.getOrganisationUnitAliases($scope.ouId).then(function (response) {
                console.log('Get Org Unit Alias Service.... ');

                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                }
            });
        }

        load();
    }

}());


(function () {
    'use strict';


    angular.module('mp.app.organisationUnits')
    .service('OrganisationUnitService', ['$http', OrganisationUnitService]);

    function OrganisationUnitService($http) {

        this.getOrganisationUnits = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                   {
                       searchText: '',
                       pageNumber: 1,
                       pageSize: DEFAULT_PAGESIZE,
                       sortColumns: null
                   });
            return $http({
                method: 'POST',
                data: data,
                url: '/OrganisationUnitAPI/GetOrganisationUnits'
            }).then(function successCallback(response) {
                if (response && response.data)
                    return response.data;
                else
                    return [];
            },
            function errorCallback(response) {
                alert(error);
            });

        };


        this.getOrganisationUnitDetails = function (id) {
            return $http({
                method: 'GET',
                url: '/OrganisationUnitAPI/GetOrganisationUnit/' + id
            }).then(function successCallback(response) {

                if (response && response.data) {
                    return response.data;
                }
                else
                    return [];
            },
            function errorCallback(response) {
                alert(error);
            });

        };


        this.getOrganisationUnitAliases = function (id) {
            return $http({
                method: 'GET',
                url: '/OrganisationUnitAPI/GetOrganisationUnitAliases/' + id
            }).then(function successCallback(response) {

                if (response && response.data) {
                    return response.data;
                }
                else
                    return [];
            },
            function errorCallback(response) {
                alert(error);
            });

        };

        this.editOrganisationUnit = function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: '/OrganisationUnitAPI/Edit/'
            }).then(function successCallback(response) {
                if (response) {
                    return response;
                }
                else
                    return [];
            },
            function errorCallback(error) {
                return error;
            });

        };


    }





}());
(function()
{
    'use strict';
    

    angular.module('mp.app.admin')
          .service('OrgUnitService', ['$http', 'mpLocalStorage', 'mpWebService', OrgUnitService]);

    function OrgUnitService($http, mpLocalStorage, mpWebService)
    {

        var self = this;

        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        self.getOrgUnits = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });

            return mpWebService.callWebApi('POST', data, '/OrganizationUnitAPI/GetOrganizationUnits').then(function (response) {
                return response ? response.data : null;
            });

        };

    }



        



}());
(function () {
    "use strict";

    angular.module('mp.app.home').controller('homeController', ['$scope', 'homeService', homeController]);

    function homeController($scope, homeService) {

        //homeService.GetSecureData(function (response) {
        //    $scope.secureData = response.secureData;
        //});

        

    }
}());


(function () {
    "use strict";

    angular.module('app')
       .directive('mpNavbar', mpNavbar);

    function mpNavbar($state, $location, mpNavService, AuthenticationService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                options: '='
            },
            templateUrl: '/app/Navigation/Directives/navbar/mpNavbar.tpl.html',
            link: function (scope, state, location) {
               
                scope.isActive = function (treeNodeState) {
                    if (mpNavService) {
                        var currentRootItem = mpNavService.getCurrentRootItem();
                        return currentRootItem && currentRootItem.state === treeNodeState;
                    } else {
                        return false;
                    }
                };

                scope.showSubMenu = function (leaf) {
                    return leaf.subtree;
                };

                scope.navigateToState = function (state) {
                    mpNavService.setCurrentState(state);
                    mpNavService.navigateToState(state, null);                   
                };

                scope.navigateToHome = function () {
                    mpNavService.resetMenuState();
                    mpNavService.navigateToState('home', null);
                };

                scope.logout = function (state) {
                    mpNavService.reset();
                    AuthenticationService.logoutMVCWebApi().then(function (response) {
                        if (response !== null) {
                            AuthenticationService.ClearCredentials();
                            mpNavService.navigateToState('login', null);
                        }
                    });
                   
                };


                if (mpNavService && !mpNavService.getUserAccount()) {
                    mpNavService.reset();
                    mpNavService.navigateToState('login', null);
                }

                scope.tree = mpNavService.getMenuTree() || {};

            }
        };
    }

}());
(function () {
    "use strict";

    angular.module('app')
        .directive('mpMenuitem', mpMenuitem)
        .directive('mpMenusubitem', mpMenusubitem);

    function mpMenuitem() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                leaf: '='
            },
            template: "<a href=\"#{{leaf.state}}\" class=\"list-group-item list-group-item-success\" data-toggle=\"collapse\" data-parent=\"#MainMenu\">{{leaf.name}}  <i class=\"fa fa-caret-down\"></i></a><div class=\"collapse\" id='leaf.state'><mp-menusubitem ng-repeat='subleaf in leaf.subtree' leaf='subleaf'></mp-menusubitem></ul>"
        };
    }

    function mpMenusubitem($compile, $state, mpNavService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                leaf: "="
            },
            template: "<a ng-click=\"navigateToState('refentitiesindex')\" class='list-group-item' style='cursor:pointer'>{{leaf.name}}</a>",//  "<li ng-class=\"{divider: leaf.name == 'divider'}\"><a ng-click=\"navigateToState(leaf.state)\" style='cursor:pointer'>{{leaf.name}}</a></li>",
            link: function (scope, element, attrs) {
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append("<mp-menuitem leaf='leaf'></mp-menuitem>");
                    element.addClass('collapse');
                    $compile(element.contents())(scope);
                } else {                    
                }

                scope.navigateToState = function (state) {
                    mpNavService.setCurrentState(state);
                    mpNavService.navigateToState(state, null);
                };

            }
        };
    }

    
   
}());
(function () {
    "use strict";

    angular.module('app')
       .directive('mpSidebar', mpSidebar);

    function mpSidebar($state, $location, mpNavService, AuthenticationService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                options: '='
            },
            templateUrl: '/app/Navigation/Directives/sidebar/mpSidebar.tpl.html',
            link: function (scope, state, location) {

                scope.isActive = function (treeNodeState) {
                    if (mpNavService) {
                        var currentRootItem = mpNavService.getCurrentRootItem();
                        return currentRootItem && currentRootItem.state === treeNodeState;
                    } else {
                        return false;
                    }
                };

                scope.showSubMenu = function (leaf) {
                    return leaf.subtree;
                };

                scope.navigateToState = function (state) {
                    mpNavService.setCurrentState(state);
                    mpNavService.navigateToState(state, null);
                };

                scope.navigateToHome = function () {
                    mpNavService.resetMenuState();
                    mpNavService.navigateToState('home', null);
                };

                scope.logout = function (state) {
                    mpNavService.reset();
                    AuthenticationService.logoutMVCWebApi().then(function (response) {
                        if (response !== null) {
                            AuthenticationService.ClearCredentials();
                            mpNavService.navigateToState('login', null);
                        }
                    });

                };


                if (mpNavService && !mpNavService.getUserAccount()) {
                    mpNavService.reset();
                    mpNavService.navigateToState('login', null);
                }


                scope.tree = mpNavService.getMenuTree() || {};

                

            }
        };
    }

}());
(function () {
    "use strict";

    angular.module('app')
        .directive('tree', tree)
        .directive('leaf', leaf);

    function tree() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                tree: '='
            },
            template: "<ul class='dropdown-menu'><leaf ng-repeat='leaf in tree' leaf='leaf'></leaf></ul>"
        };    
    }

    function leaf($compile, $state, mpNavService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                leaf: "="
            },
            template: "<li ng-class=\"{divider: leaf.name == 'divider'}\"><a ng-click=\"navigateToState(leaf.state)\" style='cursor:pointer'>{{leaf.name}}</a></li>",
            link: function (scope, element, attrs) {
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append("<tree tree='leaf.subtree'></tree>");
                    element.addClass('dropdown-submenu');
                    $compile(element.contents())(scope);
                } else {                    
                }

                scope.navigateToState = function (state) {
                    mpNavService.setCurrentState(state);
                    mpNavService.navigateToState(state, null);
                };

            }
        };
    }
}());
(function () {
    "use strict";

    angular.module('mp.app.patients')
        .controller('patientDetailController', patientDetailController)
        .controller('patientTab1Controller', patientTab1Controller)
        .controller('patientTab2Controller', patientTab2Controller)
        .controller('patientTab3Controller', patientTab3Controller);

    function patientDetailController($scope, $stateParams) {
        $scope.title = "Patient Detail";
        $scope.Id = $stateParams.Id;
        $scope.Tab = $stateParams.Tab;
       
        $scope.msg = "Hello from main controller";
        $scope.hi = function () {
            console.log('hi');
        };

        $scope.isActive = function (id) {
            return $scope.Tab === id.toString();
        };

        $scope.tabs = [
            { id: 1, heading: 'Tab1', template: '/app/Patients/Views/patientDetailTab1.tpl.html'},
            { id: 2, heading: 'Tab2', template: '/app/Patients/Views/patientDetailTab2.tpl.html'},
            { id: 3, heading: 'Tab3', template: '/app/Patients/Views/patientDetailTab3.tpl.html'}
        ];

        $scope.tabsetOptions = {
            tabs: $scope.tabs
        };
        
        $scope.detailContent = 'main page detail contain';

        $scope.tab1Content = 'test test est test /n dynamic tab content';


        $scope.model = {
            content2: 'tteststest',
            datetime: new Date(2017, 3, 30, 14, 57, 0)
        };
        $scope.model.content1 = 'teststtestset';

        $scope.model.autoCompleteDropdownOptions = {
            items: ['apple', 'orange', 'mango', 'grapefruit', 'banana', 'melon']
        };

        $scope.checkDate = function () {

            alert($scope.model.datetime);
        };
    }

    function patientTab1Controller($scope) {
        
    }

    function patientTab2Controller($scope) {
                
    }

    function patientTab3Controller($scope) {


        $scope.tab3data = [
            {
                id: 1,
                name: "Ethel Price",
                gender: "female",
                company: "Enersol"
            },
            {
                id: 2,
                name: "Claudine Neal",
                gender: "female",
                company: "Sealoud"
            },
            {
                id: 3,
                name: "Bery Rice",
                gender: "female",
                company: "Velity"
            },
            {
                id: 4,
                name: "Wilder Gonzales",
                gender: "male",
                company: "Geekko"
            }
        ];

        $scope.tab3columns = [
                        { field: 'id', displayName: 'Id', width: '10%' },
                        { field: 'name', displayName: 'Name', width: '30%' },
                        { field: 'gender', displayName: 'Gender', width: '30%' },
                        { field: 'company', displayName: 'Company', width: '30%' }];

        $scope.tab3gridOptions = {
            gridColumnDefs: $scope.tab3columns,
            gridData: $scope.tab3data,
            showSearch: false
        };
    }
}());


(function () {
    "use strict";
    
    angular.module('mp.app.patients').controller('patientsController',['$scope', '$filter', '$stateParams', 'uiGridConstants', 'mpDataGridUtils', 'mpWebService', patientsController]);

        function patientsController($scope, $filter, $stateParams, uiGridConstants, mpDataGridUtils, mpWebService) {
        $scope.title = "Patients";

        $scope.gridOptions = {};

        $scope.OrgUnits = [{
            Id: 1,
            name: "Milan Cord Blood Bank",
            Alias: "A, b, c, d",
            IsGovernedBy: "ABMDR"

        },
          {
              Id: 2,
              name: "ABMDR",
              Alias: "A, b,",
              IsGovernedBy: "ARCBS"

          },
          {
              Id: 3,
              name: "Anthony Nolan",
              Alias: "G, f, h ,i",
              IsGovernedBy: "ABMDR"

          },
          {
              Id: 4,
              name: "BIONET Corp",
              Alias: "x, y, z",
              IsGovernedBy: "ARCBS"

          }
        ];

        $scope.gridColumnDefs = [
                         { field: 'Id', displayName: 'Serial No', width: '10%', headerCellClass: 'gridHeader', filters: [{ condition: uiGridConstants.filter.CONTAINS, placeholder: 'Contains' }, { condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: 'Greater than or equal' }] },
                         { field: 'name', displayName: 'Name', width: '30%', headerCellClass: 'gridHeader' },
                         { field: 'Alias', displayName: 'Alias', width: '30%', headerCellClass: 'gridHeader' },
                         { field: 'IsGovernedBy', displayName: 'IsGoverned By', width: '30%', headerCellClass: 'gridHeader' }];


        $scope.drillDown = function (entity) {

        };

        $scope.gridOptions = {
            gridColumnDefs: $scope.gridColumnDefs,
            gridData: $scope.OrgUnits,
            pageSize: 2,
            detailPageState: 'patientTabDetail',
            extraParams: {Tab: 2},
            gridClass: '',
            enableFiltering: true
        };

        $scope.tryException = function () {
            return mpWebService.callWebApi2('GET', null, '/UserAccountAPI/GetExceptionV2').then(function (response) {
                return response ? response.data : null;
            });
        };
    }
}());



(function () {
    'use strict';

   
    angular.module('app')

        .config(function ($routeProvider, $locationProvider, $qProvider) {

            //This issue is found in 1.5.9 and 1.6.0-rc-0. More details at https://github.com/angular-ui/ui-router/issues/2889
            //Patch solution is to manually disable unhandled rejections.
            //TODO remove this line after Angular fix this issue
            $qProvider.errorOnUnhandledRejections(false);

            //Todo: Consider passing the controller name in the route.
            $routeProvider
            // Home
            .when("/", { templateUrl: "/app/Navigation/Views/defaultLayout.tpl.html" })
            .when("/login", { templateUrl: "/app/Authentication/Views/login.tpl.html" })
            .when("/home", { templateUrl: "/app/Navigation/Views/home.tpl.html" })
            // Section index pages
            .when("/patients", { templateUrl: "/app/Patients/Views/patients.tpl.html" })
            .when("/donors", { templateUrl: "/app/Donors/Views/donors.tpl.html" })
             // Organization Units
            .when("/organisationunits", { templateUrl: "/app/Governance/Views/OrganisationUnit/organisationUnits.tpl.html" })
            .when("/organisationunit/:Id", { templateUrl: "/app/Governance/Views/OrganisationUnit/ouDetailsIndex.tpl.html" })
            .when("/organisationUnitEdit/:Id", { templateUrl: "/app/Governance/Views/OrganisationUnit/ouDetailsEdit.tpl.html" })

            // Section detail pages
            .when("/patientDetail/:Id", { templateUrl: "/app/Patients/Views/patientDetail.tpl.html" })
            .when("/patientTabDetail/:Id/:Tab", { templateUrl: "/app/Patients/Views/patientDetail.tpl.html" })

            //admin            
            .when("/useradminindex", { templateUrl: "/app/Admin/Views/UserAdmin/userAdminIndex.tpl.html" })
            .when("/useraccounts", { templateUrl: "/app/Admin/Views/UserAdmin/UserAccounts/userAccounts.tpl.html" })
            //.when("/useraccountdetailindex/:Id", { templateUrl: "/app/Admin/Views/UserAdmin/UserAccounts/userAccountDetailIndex.tpl.html" })
            .when("/useraccountdetail/:Id", { templateUrl: "/app/Admin/Views/UserAdmin/UserAccounts/userAccountDetailIndex.tpl.html" })
            .when("/useraccounteditdetail/:Id", { templateUrl: "/app/Admin/Views/UserAdmin/UserAccounts/userAccountEditDetail.tpl.html" })
            
            // Organisation Unit Representative Roles
            .when("/orgunitreproles", { templateUrl: "/app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeRoles.tpl.html" })
            .when("/orgunitreprolesdetail/:Id", { templateUrl: "/app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeRolesDetail.tpl.html" })
            .when("/orgunitreproleseditdetail/:Id", { templateUrl: "/app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeRolesEditDetail.tpl.html" })
            .when("/orgunitcreatereprole", { templateUrl: "/app/Admin/Views/UserAdmin/OURepRoles/orgUnitRepresentativeCreateRole.tpl.html" })
                        
            // Reference Entities
            .when("/refentitiesindex", { templateUrl: "../app/Admin/Views/ReferenceEntities/refEntitiesIndex.tpl.html" })
            .when("/refentitytitles", { templateUrl: "../app/Admin/Views/ReferenceEntities/Titles/refEntitiesTitles.tpl.html" })
            .when("/refentitytitledetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Titles/refEntitiesTitleDetail.tpl.html" })
            .when("/refentitytitleeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Titles/refEntitiesTitleEditDetail.tpl.html" })
            .when("/refentitycreatetitle", { templateUrl: "../app/Admin/Views/ReferenceEntities/Titles/refEntitiesCreateTitle.tpl.html" })
            .when("/refentityauspostcode", { templateUrl: "../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesAusPostalCode.tpl.html" })
            .when("/refentityauspostcodedetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesAusPostCodeDetail.tpl.html" })
            .when("/refentityauspostcodeeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesAusPostCodeEditDetail.tpl.html" })
            .when("/refentitycreatepostcode", { templateUrl: "../app/Admin/Views/ReferenceEntities/AusPostalCodes/refEntitiesCreateAusPostalCode.tpl.html" })
            .when("/refentitycountry", { templateUrl: "../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCountries.tpl.html" })
            .when("/refentitycountrydetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCountryDetail.tpl.html" })
            .when("/refentitycountryeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCountryEditDetail.tpl.html" })
            .when("/refentitycreatecountry", { templateUrl: "../app/Admin/Views/ReferenceEntities/Countries/refEntitiesCreateCountry.tpl.html" })
            .when("/refentitylanguage", { templateUrl: "../app/Admin/Views/ReferenceEntities/Languages/refEntitiesLanguage.tpl.html" })
            .when("/refentitylanguagedetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Languages/refEntitiesLanguageDetail.tpl.html" })
            .when("/refentitylanguageeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Languages/refEntitiesLanguageEditDetail.tpl.html" })
            .when("/refentitycreatelanguage", { templateUrl: "../app/Admin/Views/ReferenceEntities/Languages/refEntitiesCreateLanguage.tpl.html" })
            .when("/refentitydiagnosis", { templateUrl: "../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesDiagnosis.tpl.html" })
            .when("/refentitydiagnosisdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesDiagnosisDetail.tpl.html" })
            .when("/refentitydiagnosiseditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesDiagnosisEditDetail.tpl.html" })
            .when("/refentitycreatediagnosis", { templateUrl: "../app/Admin/Views/ReferenceEntities/Diagnosis/refEntitiesCreateDiagnosis.tpl.html" })
            .when("/refentitydrivefocus", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesDriveFocus.tpl.html" })
            .when("/refentitydrivefocusdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesDriveFocusDetail.tpl.html" })
            .when("/refentitydrivefocuseditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesDriveFocusEditDetail.tpl.html" })
            .when("/refentitycreatedrivefocus", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveFocus/refEntitiesCreateDriveFocus.tpl.html" })
            .when("/refentitydrivetype", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesDriveType.tpl.html" })
            .when("/refentitydrivetypedetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesDriveTypeDetail.tpl.html" })
            .when("/refentitydrivetypeeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesDriveTypeEditDetail.tpl.html" })
            .when("/refentitycreatedrivetype", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveType/refEntitiesCreateDriveType.tpl.html" })
            .when("/refentitydrivestatus", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesDriveStatus.tpl.html" })
            .when("/refentitydrivestatusdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesDriveStatusDetail.tpl.html" })
            .when("/refentitydrivestatuseditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesDriveStatusEditDetail.tpl.html" })
            .when("/refentitycreatedrivestatus", { templateUrl: "../app/Admin/Views/ReferenceEntities/DriveStatus/refEntitiesCreateDriveStatus.tpl.html" })                
            .when("/refentitystatuschangedreason", { templateUrl: "../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesStatusChangedReason.tpl.html" })
            .when("/refentitystatuschangedreasondetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesStatusChangedReasonDetail.tpl.html" })
            .when("/refentitystatuschangedreasoneditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesStatusChangedReasonEditDetail.tpl.html" })
            .when("/refentitycreatestatuschangedreason", { templateUrl: "../app/Admin/Views/ReferenceEntities/StatusChangedReason/refEntitiesCreateStatusChangedReason.tpl.html" })
            .when("/refentitycbustatuschangedreason", { templateUrl: "../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCBUStatusChangedReason.tpl.html" })
            .when("/refentitycbustatuschangedreasondetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCBUStatusChangedReasonDetail.tpl.html" })
            .when("/refentitycbustatuschangedreasoneditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCBUStatusChangedReasonEditDetail.tpl.html" })
            .when("/refentitycreatecbustatuschangedreason", { templateUrl: "../app/Admin/Views/ReferenceEntities/CBUStatusChangedReason/refEntitiesCreateCBUStatusChangedReason.tpl.html" })
            .when("/refentityinvoicenumcounter", { templateUrl: "../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesInvoiceNumCounters.tpl.html" })
            .when("/refentityinvoicenumcounterdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesInvoiceNumCountersDetail.tpl.html" })
            .when("/refentityinvoicenumcountereditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesInvoiceNumCountersEditDetail.tpl.html" })
            .when("/refentitycreateinvoicenumcounter", { templateUrl: "../app/Admin/Views/ReferenceEntities/InvoiceNumberCounters/refEntitiesCreateInvoiceNumCounters.tpl.html" })
            .when("/refentitypriceitem", { templateUrl: "../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesPriceItem.tpl.html" })
            .when("/refentitypriceitemdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesPriceItemDetail.tpl.html" })
            .when("/refentitypriceitemeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesPriceItemEditDetail.tpl.html" })
            .when("/refentitycreatepriceitem", { templateUrl: "../app/Admin/Views/ReferenceEntities/PriceItem/refEntitiesCreatePriceItem.tpl.html" })                                           
            .when("/refentityrelationshiptype", { templateUrl: "../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesRelationType.tpl.html" })
            .when("/refentityrelationshiptypedetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesRelationTypeDetail.tpl.html" })
            .when("/refentityrelationshiptypeeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesRelationTypeEditDetail.tpl.html" })
            .when("/refentitycreaterelationshiptype", { templateUrl: "../app/Admin/Views/ReferenceEntities/RelationshipType/refEntitiesCreateRelationType.tpl.html" })
            .when("/refentityitemmapping", { templateUrl: "../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesItemMappings.tpl.html" })
            .when("/refentityitemmappingdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesItemMappingsDetail.tpl.html" })
            .when("/refentityitemmappingeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesItemMappingsEditDetail.tpl.html" })
            .when("/refentitycreateitemmapping", { templateUrl: "../app/Admin/Views/ReferenceEntities/ItemMappings/refEntitiesCreateItemMappings.tpl.html" })                
            .when("/refentityfundingtype", { templateUrl: "../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesFundingType.tpl.html" })
            .when("/refentityfundingtypedetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesFundingTypeDetail.tpl.html" })
            .when("/refentityfundingtypeeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesFundingTypeEditDetail.tpl.html" })
            .when("/refentitycreatefundingtype", { templateUrl: "../app/Admin/Views/ReferenceEntities/FundingType/refEntitiesCreateFundingType.tpl.html" })                
            .when("/refentityoperationalmetrics", { templateUrl: "../app/Admin/Views/ReferenceEntities/OperationalMetrics/refentitiesOperationalMetrics.tpl.html" })            
            .when("/refentityoperationalmetriceditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/OperationalMetrics/refEntitiesOperationalMetricsEditDetail.tpl.html" })                       
            .when("/refentityconfiguration", { templateUrl: "../app/Admin/Views/ReferenceEntities/Configuration/refEntitiesConfiguration.tpl.html" })
            .when("/refentityconfigurationdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Configuration/refEntitiesConfigurationDetail.tpl.html" })
            .when("/refentityconfigurationeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Configuration/refEntitiesConfigurationEditDetail.tpl.html" })
            .when("/refentityreqnotifyconfigurationdetail", { templateUrl: "../app/Admin/Views/ReferenceEntities/ReqNotifyConfiguration/refEntitiesReqNotifyConfigurationDetail.tpl.html" })
            .when("/refentityreqnotifyconfigurationeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/ReqNotifyConfiguration/refEntitiesReqNotifyConfigurationEditDetail.tpl.html" })     
            .when("/refentitynationality", { templateUrl: "../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesNationalities.tpl.html" })
            .when("/refentitynationalitydetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesNationalitiesDetail.tpl.html" })
            .when("/refentitynationalityeditdetail/:Id", { templateUrl: "../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesNationalitiesEditDetail.tpl.html" })
            .when("/refentitycreatenationality", { templateUrl: "../app/Admin/Views/ReferenceEntities/Nationalities/refEntitiesCreateNationalities.tpl.html" })

            // else 404`
            .otherwise("/error", { templateUrl: "/app/Navigation/Views/error.tpl.html" });

            $locationProvider.html5Mode(true);
        });


}());




(function () {
    'use strict';

    angular.module('app')
        .controller("appController", AppController)
        .controller("appHeader", AppHeader)
        .controller("appFooter", AppFooter);

    function AppController($scope, mpLocalStorage, mpNavService) {        
        $scope.userName = mpNavService ?  mpNavService.getUserName() : '';
        $scope.userRole = mpNavService ?  mpNavService.getUserRole() : '';
    }

    function AppHeader($scope, $location, mpNavService, AuthenticationService) {
        $scope.model = {
            showHeader : true,
            userName : ''
        };
        $scope.$watch(function () { return $location.$$path; }, function (params) {
            $scope.model.showHeader = params === '/login' ? false : true;
        });
        $scope.model.userName = mpNavService.getUserName();
        $scope.logout = function () {
            mpNavService.reset();
            AuthenticationService.logoutMVCWebApi().then(function (response) {
                if (response !== null) {
                    AuthenticationService.ClearCredentials();
                    mpNavService.navigateToState('login', null);
                }
            });
        };
    }

    function AppFooter($scope, $location, mpNavService) {
        $scope.model = {
            showFooter: true
        };
        

        $scope.$watch(function () { return $location.$$path; }, function (params) {
            $scope.model.showFooter = params === '/login' ? false : true;           
        });

    }
}());

//# sourceMappingURL=MatchPoint.client_apps.js.map