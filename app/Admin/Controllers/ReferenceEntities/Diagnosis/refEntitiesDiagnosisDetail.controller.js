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