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






