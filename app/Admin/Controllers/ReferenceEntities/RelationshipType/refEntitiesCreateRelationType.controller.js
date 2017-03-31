(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateRelationshipTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateRelationshipTypeController]);

    function refEntitiesCreateRelationshipTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create RelationshipType";
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.RelationshipTypeDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateRelationshipType = function () {
            console.log('Save function triggered');
            var ObjRelationshipTypeDetail = {
                Name: $scope.RelationshipTypeDetail.Name,
                Solitary: $scope.RelationshipTypeDetail.Solitary                
            };

            ReferenceEntitiesService.createRelationshipType($scope.pId, ObjRelationshipTypeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptype', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptype', params);
        };

        init();
    }

}());