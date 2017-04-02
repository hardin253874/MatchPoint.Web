
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
            .when("/error", { templateUrl: "/app/Navigation/Views/error.tpl.html" })
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



