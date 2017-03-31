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

