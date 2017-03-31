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