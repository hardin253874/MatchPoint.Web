(function () {
    "use strict";
    /**
    * Module implementing a data grid.
     * Displays a data grid.
     *
     * @module mpDataGrid
     * @example

     Using the mpDataGrid:
     &lt;mp-datagrid grid-options="gridOptions"&gt;&lt;/mp-datagrid&gt
     where gridOptions is available on the controller with the following properties:
     - gridColumnDefs - {array}. The column definitions for the grid.
     - gridColumnDefs[].field = {string}. The field of this column
     - gridColumnDefs[].displayName = {string}. The display Name of this column
     - gridColumnDefs[].width = {string}. The width of this column, e.g. 20% or 200px
     - gridColumnDefs[].headerCellClass = {string}. The custom stype class for the grid header
     - gridColumnDefs[].enableFiltering = {bool}. The enable/disable filtering flag for column
     - gridColumnDefs[].cellFilter = {string}.  The cell content filter function to format content text.  e.g. cellFilter: 'date:"longDate"'
     - gridColumnDefs[].filters = {array}.  The column filter definitions array to config the column detail. to use these setting, the enableFiltering property should be true. 
     -                                      e.g. filters:[{condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: 'Greater than or equal'}]
     -                                      The available 'condition' options are
     -                                          `uiGridConstants.filter.STARTS_WITH`
     -                                          `uiGridConstants.filter.ENDS_WITH`
     -                                          `uiGridConstants.filter.CONTAINS`
     -                                          `uiGridConstants.filter.GREATER_THAN`
     -                                          `uiGridConstants.filter.GREATER_THAN_OR_EQUAL`
     -                                          `uiGridConstants.filter.LESS_THAN`
     -                                          `uiGridConstants.filter.LESS_THAN_OR_EQUAL`
     -                                          `uiGridConstants.filter.NOT_EQUAL`
     -                                          `uiGridConstants.filter.STARTS_WITH`
     -                                      Available `type` options are:
     -                                          `uiGridConstants.filter.SELECT` - use a dropdown box for the cell header filter field
     -                                          `uiGridConstants.filter.INPUT` -  use a text box for the cell header filter field - which is default type setting
     - gridData - {array}. The row data to display in the grid. 

     - showSearchSection (option) - {boolean}. Show or hide the search section, the default value is true
     - pageSize (option) - {number}. The page size of current data grid, if current property is null, use the default setting is 50 //TODO: set the grid page size by app.setting 
     - detailPageState (option) - {string}.  The page state of grid drill down page, if current value property is null, click selected row function stop works
     - gridClass (option) - {string}. The custom style class for the grid.
     - enableFiltering (option) - {bool}. To enable/disable the column filter function, the default value is false
     - enablePaginationControls (option) - {bool}. To enable/disable the pagination bar, the default value is true
     - enableExport (option) - {bool}.  To enable/disable the csv/pdf export function with GridMenu, the default value is false
    **/
    angular.module('mp.components.dataGrid')
       .directive('mpDatagrid', mpDatagrid);


    function mpDatagrid(mpNavService, $filter, uiGridConstants) {
        return {
            restrict: 'E',
            //transclude: true,
            replace: true,
            templateUrl: '/app/Components/DataGrid/Directives/mpDataGrid.tpl.html',
            //controller: DataGridController,
            scope: {
                options: '='
            },
            link: function (scope)
            {
                var DEFAULT_PAGESIZE = 50;                

                scope.model = {
                    searchText: '',
                    state : '',
                    gridClass: '',
                    gridData: [],
                    gridColumnDefs: [],
                    showSearchSection: true,
                    showDeactvated : false,
                    enableFiltering: false,
                    enablePaginationControls: true,
                    includeDeactvated: false,
                    callBackFunction: null,
                    sortColumns: null,
                    filterColumns: null,
                    extraParams : null

                };


                if (scope.options) {
                    buildDataGrid();
                }

                scope.$watchCollection('options.gridData', function () {
                    if (scope.options && scope.options.gridData) { 
                        if (scope.options.totalItems)
                            scope.gridOptions.totalItems = scope.options.totalItems;
                        
                        if (scope.options && scope.options.pageNumber && scope.options.pageNumber > 1)                        
                            scope.gridOptions.paginationCurrentPage = scope.options.pageNumber;
                                              
                        if (scope.options && scope.options.searchText && scope.options.searchText !== scope.model.searchText)
                            scope.model.searchText = scope.options.searchText;

                        if (scope.options && scope.options.filterColumns)
                            scope.model.filterColumns = scope.options.filterColumns;

                        

                        scope.model.gridData = scope.options.gridData;
                        scope.gridOptions.data = scope.model.gridData;

                        if (scope.options && scope.options.includeDeactvated !== undefined)
                            scope.model.includeDeactvated = scope.options.includeDeactvated;
                    }
                }, true);

                scope.$watch('model.includeDeactvated', function (oldVal, newVal) {
                    if (scope.model.gridColumnDefs && oldVal !== newVal) {
                        if (scope.model.includeDeactvated) {
                            scope.model.gridColumnDefs = _.map(scope.model.gridColumnDefs, function (columnDef) {
                                if (columnDef.visible !== undefined)
                                    columnDef.visible = true;
                                
                                return columnDef;
                                    
                            });
                        } else {
                            scope.model.gridColumnDefs = _.map(scope.model.gridColumnDefs, function (columnDef) {
                                if (columnDef.visible !== undefined)
                                    columnDef.visible = false;

                                return columnDef;

                            });
                        }

                        scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
                    }
                }, true);


                scope.getGridClass = function () {
                    var gridClass = 'ui-grid-render-container-body';
                    if (scope.model.gridClass)
                        gridClass += ' ' + scope.model.gridClass;

                    return gridClass;
                };

                function buildDataGrid() {
                    scope.model.gridColumnDefs =[];
                    scope.model.gridPageSize = (scope.options && scope.options.pageSize) ? scope.options.pageSize : DEFAULT_PAGESIZE;
                    scope.model.paginationPageSizes = [scope.model.gridPageSize, scope.model.gridPageSize * 2, scope.model.gridPageSize * 3];
                    scope.model.searchText = (scope.options && scope.options.searchText) ? scope.options.searchText : '';
                    scope.model.extraParams = (scope.options && scope.options.extraParams) ? scope.options.extraParams : null;
                    scope.model.detailPageState = (scope.options && scope.options.detailPageState) ? scope.options.detailPageState: null;
                    scope.model.gridClass = (scope.options && scope.options.gridClass) ? scope.options.gridClass : null;
                    scope.model.callBackFunction = (scope.options && scope.options.callBackFunction) ? scope.options.callBackFunction : null;                    
                    scope.model.enableFiltering = (scope.options && scope.options.enableFiltering !== undefined) ? scope.options.enableFiltering : false;
                    scope.model.showSearchSection = (scope.options && scope.options.showSearchSection !== undefined) ? scope.options.showSearchSection : true;
                    scope.model.showDeactvated = (scope.options && scope.options.showDeactvated !== undefined) ? scope.options.showDeactvated : false;
                    scope.model.enablePaginationControls = (scope.options && scope.options.enablePaginationControls !== undefined) ? scope.options.enablePaginationControls : true;
                    scope.model.gridColumnDefs = scope.options.gridColumnDefs;                   

                    scope.model.gridData = scope.options.gridData;

                    scope.gridOptions = {
                        enableFiltering: scope.model.enableFiltering,
                        enablePaginationControls: scope.model.enablePaginationControls,
                        enableRowSelection: true,
                        enableRowHeaderSelection: false,
                        multiSelect: false,
                        enableHighlighting: true,
                        modifierKeysToMultiSelect: false,
                        noUnselect: true,
                        paginationPageSize: scope.model.gridPageSize,
                        paginationPageSizes: scope.model.paginationPageSizes,
                        useExternalPagination: scope.model.callBackFunction ? true : false,
                        useExternalSorting: scope.model.callBackFunction ? true : false,
                        useExternalFilter: scope.model.callBackFunction ? true: false,
                        //rowTemplate: rowTemplate(),
                        columnDefs: scope.model.gridColumnDefs,
                        data: scope.model.gridData
                    };
                    if (scope.options && scope.options.enableExport)
                        updateExportOptions(scope.gridOptions);

                    scope.gridOptions.onRegisterApi = function (gridApi) {
                        scope.gridApi = gridApi;
                        scope.gridApi.selection.on.rowSelectionChanged(scope,
                                function (row) {
                                    rowClick(row);
                                });
                        scope.gridApi.pagination.on.paginationChanged(scope,
                                function (pageNumber, pageSize) {
                                    gridPagination(pageNumber, pageSize);
                                }
                            );
                        scope.gridApi.core.on.sortChanged(scope,
                                function (grid, sortColumns) {
                                    //scope.sort;
                                    if (sortColumns.length === 0) {
                                        scope.model.sortColumns = null;
                                    } else {
                                        scope.model.sortColumns = _.map(sortColumns, function (sortColumn) {
                                            return {
                                                name: sortColumn.name,
                                                direction: sortColumns.sort ? sortColumn.sort.direction : 'asc'
                                            };
                                        });
                                    }
                                    sortGrid();
                                }
                            );
                        scope.gridApi.core.on.filterChanged(scope,
                               function () {
                                   var grid = this.grid;

                                   var existsTeam = function (filters) {
                                       var filterWithTeam = _.filter(filters, function (filter) { return filter && filter.term; });

                                       if (filterWithTeam && filterWithTeam.length > 0)
                                           return true;
                                       else
                                           return false;
                                   };

                                   var filterColumns = _.filter(grid.columns, function (column) {
                                       return column.filters && column.filters.length > 0 && existsTeam(column.filters);
                                   });


                                   if (filterColumns && filterColumns.length > 0) {
                                       scope.model.filterColumns = _.map(filterColumns, function (column) {
                                           return {
                                               name: column.field,
                                               filters: _.map(column.filters, function (filter) {
                                                   return {
                                                       condition: filter.condition,
                                                       term: filter.term
                                                   };
                                               })
                                           };
                                       });
                                   } else {
                                       scope.model.filterColumns = null;
                                   }
                                  
                                   filterGrid();
                                }
                            );
                    };


                }


                function updateExportOptions(gridOptions) {
                    var exportOptions = {
                        enableGridMenu: true,
                       // enableSelectAll: true,
                        exporterCsvFilename: 'MarchPointFile.csv',
                        exporterPdfDefaultStyle: { fontSize: 9 },
                        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
                        exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
                        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
                        exporterPdfFooter: function (currentPage, pageCount) {
                            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
                        },
                        exporterPdfCustomFormatter: function (docDefinition) {
                            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                            return docDefinition;
                        },
                        exporterPdfOrientation: 'portrait',
                        exporterPdfPageSize: 'LETTER',
                        exporterPdfMaxGridWidth: 500,
                        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                    };

                    gridOptions = _.extend(gridOptions, exportOptions);

                }

                function rowClick(row) {
                    if (!row || !row.entity || !row.entity.Id || !scope.model.detailPageState)
                        return;

                    var gridParams = {
                        searchText: scope.model.searchText,
                        pageNumber: scope.gridApi.pagination.getPage(),
                        pageSize: scope.model.gridPageSize,
                        sortColumns: scope.model.sortColumns,
                        filterColumns: scope.model.filterColumns,
                        includeDeactvated: scope.model.includeDeactvated
                    };

                    var params = {
                        Id: row.entity.Id,
                        gridParams : gridParams
                    };

                    if (scope.model.extraParams)
                        params = _.extend(params, scope.model.extraParams);

                    mpNavService.navigateToState(scope.model.detailPageState, params);
                }

                function gridPagination(pageNumber, pageSize) {
                    if (!scope.model.callBackFunction)
                        return;

                    scope.model.callBackFunction(scope.model.searchText, pageNumber, pageSize, scope.model.sortColumns, scope.model.filterColumns, scope.model.includeDeactvated);
                }

                function sortGrid() {
                    if (!scope.model.callBackFunction)
                        return;

                    scope.model.callBackFunction(scope.model.searchText, scope.gridApi.pagination.getPage(), scope.model.gridPageSize, scope.model.sortColumns, scope.model.filterColumns,  scope.model.includeDeactvated);
                }

                function filterGrid() {
                    if (!scope.model.callBackFunction)
                        return;

                    scope.model.callBackFunction(scope.model.searchText, scope.gridApi.pagination.getPage(), scope.model.gridPageSize, scope.model.sortColumns, scope.model.filterColumns, scope.model.includeDeactvated);
                }

                scope.searchGrid = function()
                {
                    if (scope.model.callBackFunction) {
                        scope.model.callBackFunction(scope.model.searchText, scope.gridApi.pagination.getPage(), scope.model.gridPageSize, scope.model.sortColumns, scope.model.filterColumns, scope.model.includeDeactvated);
                    } else {
                        scope.model.gridData = _.filter(scope.model.gridData, function (data) {
                            return !scope.model.searchText || data.name.toLowerCase().indexOf(scope.model.searchText.toLowerCase()) >= 0;
                        });
                        scope.gridOptions.data = scope.model.gridData;
                    }
                };

                //    scope.rowDblClick = function (row) {
                //        rowClick(row);
                //    };

                //    function rowTemplate() {
                //        return '<div ng-dblclick="grid.appScope.rowDblClick(row)" >' +
                //                     '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                //                     '</div>';
                //    }

                //    scope.refreshData = function () {
                //        scope.gridOptions.data = $filter('filter')(scope.gridData, scope.searchText, undefined);
                //    };
            }
        };
    }
}());