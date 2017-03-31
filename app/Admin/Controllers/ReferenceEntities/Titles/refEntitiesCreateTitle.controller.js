(function()
{
    'use strict';

    angular.module('mp.app.admin').controller('refEntitiesCreateTitleController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateTitleController]);

    function refEntitiesCreateTitleController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state)
    {

        $scope.title = "Create Title";
        $scope.TitleId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.Name = '';        

        function init() {
            console.log('init loading...');
        }
        
        $scope.CreateTitle = function () {
            console.log('Save function triggered');
            var ObjTitleDetailDetail = {
                Name: $scope.Name
            };

            ReferenceEntitiesService.createTitle($scope.TitleId, ObjTitleDetailDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });
                     
            var params = {
                Id: $scope.TitleId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitytitles', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.TitleId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitytitles', params);
        };

        init();


    }



}());