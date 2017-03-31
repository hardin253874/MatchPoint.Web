(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateAusPostCodeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateAusPostCodeController]);

    function refEntitiesCreateAusPostCodeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, state) {

        $scope.title = "Postal Code";
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.AusPostalCodeDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreatePostCode = function () {
            console.log('Save function triggered');
            var ObjAusPostalCodeDetail = {
                PostalCode: $scope.AusPostalCodeDetail.PostalCode,
                Locality: $scope.AusPostalCodeDetail.Locality,
                State: $scope.AusPostalCodeDetail.State,
                Category: $scope.AusPostalCodeDetail.Category,
                Comments: $scope.AusPostalCodeDetail.Comments
            };

            ReferenceEntitiesService.CreatePostalCode($scope.pId, ObjAusPostalCodeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcode', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityauspostcode', params);
        };

        init();


    }



}());