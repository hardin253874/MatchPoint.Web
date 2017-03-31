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