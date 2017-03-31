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