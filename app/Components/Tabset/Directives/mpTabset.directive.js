(function () {
    "use strict";

    angular.module('mp.components.tabset')
       .directive('mpTabset', mpTabset);

    mpTabset.$inject = ['$stateParams', '$compile'];

    function mpTabset($stateParams,$compile) {
        return {
            restrict: 'E',
            //transclude: true,
            replace: true,
            templateUrl: '/app/Components/Tabset/Directives/mpTabset.tpl.html',            
            scope: {
                options: '='
            },
            controller: tabSetController,
            controllerAs: 'vm',
            link: function (scope, el, attr, ctrl) {
                scope.model = {
                    tabs: [],
                    activeTab : null
                };

                if (scope.options) {
                    buildTabset();
                }               

                function buildTabset() {
                    scope.model.tabs = scope.options.tabs;
                    if (ctrl && ctrl.activeTab)
                        scope.model.tabs = _.map(scope.model.tabs, function (tab) {
                            return {
                                id: tab.id,
                                heading: tab.heading,
                                template: tab.template,
                                active: tab.id.toString() === ctrl.activeTab
                            };
                        });
                }

               
            }        
        };
    }

    function tabSetController($stateParams) {
        /*jshint validthis: true */
        var vm = this;
        vm.activeTab = $stateParams.Tab;
    }
}());