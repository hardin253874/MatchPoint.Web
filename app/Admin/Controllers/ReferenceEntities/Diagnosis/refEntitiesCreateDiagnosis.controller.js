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