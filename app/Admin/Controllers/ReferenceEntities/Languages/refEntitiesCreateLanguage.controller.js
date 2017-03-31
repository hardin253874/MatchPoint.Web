(function()
{
    "use strict";
    
    angular.module('mp.app.admin').controller('refEntitiesCreateLanguageController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateLanguageController]);

    function refEntitiesCreateLanguageController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) { 

        $scope.title = "Create Language";
        $scope.langId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.LanguageDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateLanguage = function () {
            console.log('Save function triggered');
            var ObjLanguageDetail = {
                BroadGroupCode: $scope.LanguageDetail.BroadGroupCode,
                BroadGroupName: $scope.LanguageDetail.BroadGroupName,
                NarrowGroupCode: $scope.LanguageDetail.NarrowGroupCode,
                NarrowGroupName: $scope.LanguageDetail.NarrowGroupName,
                LanguageCode: $scope.LanguageDetail.LanguageCode,
                LanguageDescription: $scope.LanguageDetail.LanguageDescription
            };

            ReferenceEntitiesService.createLanguage($scope.langId, ObjLanguageDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguage', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.langId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitylanguage', params);
        };

        init();
    }

}());