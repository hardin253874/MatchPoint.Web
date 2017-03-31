(function () {
    "use strict";

    angular.module('mp.app.organisationUnits').controller('ouDetailsController', ['OrganisationUnitService', 'mpNavService', '$scope', '$stateParams', ouDetailsController])
        .controller('ouDetailsTab1Controller', ['OrganisationUnitService', 'mpNavService', '$scope', '$stateParams', ouDetailsTab1Controller])
        .controller('ouDetailsTab2Controller', ouDetailsTab2Controller)
        .controller('ouDetailsTab3Controller', ouDetailsTab3Controller);

    function ouDetailsController(OrganisationUnitService, mpNavService, $scope, $stateParams) {

        $scope.ouId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.model = {
            mode: "detail",
            tabs: [
                {
                    heading: 'Details', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html', isLoaded: false, active: true
                },
                {
                    heading: 'Alias', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetailsAlias.tpl.html', isLoaded: false
                }
            ],
            tabContentUrl: ''
        };
        // $scope.tabContentUrl = "";
        var params = {
            Id: $scope.ouId,
            gridParams: $scope.gridParams,
        };
        $scope.Errors = null;
        //$scope.tabs = [
        //               {
        //                   heading: 'Details', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html', isLoaded: false, active: true
        //               },
        //               { heading: 'Alias', tabUrl: '../app/Governance/Views/OrganisationUnit/ouDetailsAlias.tpl.html', isLoaded: false }
        //];

        function init() {

        }

        init();

        $scope.select = function (tabData) {
            $scope.model.tabContentUrl = tabData.tabUrl;
            //if (!tabData.isLoaded) {
            //    tabData.isLoaded = true;
            //    $scope.tabContentUrl = tabData.tabUrl;
            //}
        };


    }

    function ouDetailsTab2Controller() {

    }

    function ouDetailsTab3Controller() {

    }

    function ouDetailsTab1Controller(OrganisationUnitService, mpNavService, $scope, $stateParams) {

        $scope.ouId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.mode = "detail";
        //$stateParams.mode;
        $scope.OrgUnit = {};
        //   $scope.tabContentUrl = "";
        var params = {
            Id: $scope.ouId,
            gridParams: $scope.gridParams,
        };
        $scope.Errors = null;

        function init() {

            OrganisationUnitService.getOrganisationUnitDetails($scope.ouId).then(function (data) {
                $scope.OrgUnit = angular.fromJson(data);
                $scope.title = $scope.title + $scope.OrgUnit.Name;
            });
            $scope.title = "Organisation Unit Details - ";
        }

        init();


        $scope.back = function () {
            params = {
                Id: $scope.ouId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('organisationUnits', params);
        };

        //$scope.select = function (tabData) {
        //    $scope.tabContentUrl = tabData.tabUrl;
        //    //if (!tabData.isLoaded) {
        //    //    tabData.isLoaded = true;
        //    //    $scope.tabContentUrl = tabData.tabUrl;
        //    //}
        //};



        $scope.edit = function () {
            $scope.model.mode = "edit";
            $scope.model.tabContentUrl = "../app/Governance/Views/OrganisationUnit/ouDetailsEdit.tpl.html";

            //params = {
            //    Id: $scope.ouId,
            //    gridParams: $scope.gridParams,
            //    mode: 'edit'
            //};
            //mpNavService.navigateToState('organisationunitDetailsEdit', params);


        };

        $scope.submit = function () {
            OrganisationUnitService.editOrganisationUnit($scope.OrgUnit).then(function (res) {
                if (res.data && res.data.Status && res.data.Status == "Error") {
                    $scope.Errors = res.data.Errors;
                }
                if (!res.data || (res.data && !res.data.Status)) {
                    params = _.defaults(params, {
                        mode: null
                    });
                    $scope.model.tabContentUrl = "../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html";
                    //  mpNavService.navigateToState('organisationunitdetails', params);
                }
            }, function (err) {
                alert(err);
                // $scope.Error = "Error" + err;
            });
        };


        $scope.cancel = function () {
            params = _.defaults(params, {
                mode: null
            });
            // mpNavService.navigateToState('organisationunitdetails', params);
            $scope.model.tabContentUrl = "../app/Governance/Views/OrganisationUnit/ouDetails.tpl.html";

        };
    }

}());

