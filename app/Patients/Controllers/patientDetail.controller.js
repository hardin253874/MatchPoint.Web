(function () {
    "use strict";

    angular.module('mp.app.patients')
        .controller('patientDetailController', patientDetailController)
        .controller('patientTab1Controller', patientTab1Controller)
        .controller('patientTab2Controller', patientTab2Controller)
        .controller('patientTab3Controller', patientTab3Controller);

    function patientDetailController($scope, $stateParams) {
        $scope.title = "Patient Detail";
        $scope.Id = $stateParams.Id;
        $scope.Tab = $stateParams.Tab;
       
        $scope.msg = "Hello from main controller";
        $scope.hi = function () {
            console.log('hi');
        };

        $scope.isActive = function (id) {
            return $scope.Tab === id.toString();
        };

        $scope.tabs = [
            { id: 1, heading: 'Tab1', template: '/app/Patients/Views/patientDetailTab1.tpl.html'},
            { id: 2, heading: 'Tab2', template: '/app/Patients/Views/patientDetailTab2.tpl.html'},
            { id: 3, heading: 'Tab3', template: '/app/Patients/Views/patientDetailTab3.tpl.html'}
        ];

        $scope.tabsetOptions = {
            tabs: $scope.tabs
        };
        
        $scope.detailContent = 'main page detail contain';

        $scope.tab1Content = 'test test est test /n dynamic tab content';


        $scope.model = {
            content2: 'tteststest',
            datetime: new Date(2017, 3, 30, 14, 57, 0)
        };
        $scope.model.content1 = 'teststtestset';

        $scope.model.autoCompleteDropdownOptions = {
            items: ['apple', 'orange', 'mango', 'grapefruit', 'banana', 'melon']
        };

        $scope.checkDate = function () {

            alert($scope.model.datetime);
        };
    }

    function patientTab1Controller($scope) {
        
    }

    function patientTab2Controller($scope) {
                
    }

    function patientTab3Controller($scope) {


        $scope.tab3data = [
            {
                id: 1,
                name: "Ethel Price",
                gender: "female",
                company: "Enersol"
            },
            {
                id: 2,
                name: "Claudine Neal",
                gender: "female",
                company: "Sealoud"
            },
            {
                id: 3,
                name: "Bery Rice",
                gender: "female",
                company: "Velity"
            },
            {
                id: 4,
                name: "Wilder Gonzales",
                gender: "male",
                company: "Geekko"
            }
        ];

        $scope.tab3columns = [
                        { field: 'id', displayName: 'Id', width: '10%' },
                        { field: 'name', displayName: 'Name', width: '30%' },
                        { field: 'gender', displayName: 'Gender', width: '30%' },
                        { field: 'company', displayName: 'Company', width: '30%' }];

        $scope.tab3gridOptions = {
            gridColumnDefs: $scope.tab3columns,
            gridData: $scope.tab3data,
            showSearch: false
        };
    }
}());

