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