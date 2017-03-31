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

