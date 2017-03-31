(function () {
    'use strict';

    /**
    * Module containing data grid utility functions.       
    * 
    * @module mpDataGridUtils    
    */
    angular.module('mp.components.dataGrid', [])
    .factory('mpDataGridUtils', function () {
        var exports = {};
        var DEFAULT_PAGESIZE = 10;

        exports.buildCallbackFunc = function (loadFunc) {
            var callBackFunc = function callBack(searchText, pageNumber, pageSize, sortColumns, filterColumns, includeDeactvated) {
                console.log("Search Text: " + searchText);
                console.log("Current page: " + pageNumber);
                console.log("Page size: " + pageSize);

                var options = {
                    searchText: searchText,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    sortColumns: sortColumns,
                    filterColumns: filterColumns,
                    includeDeactvated: includeDeactvated
                };

                loadFunc(options);
            };

            return callBackFunc;
        };

        exports.updateColumnFilterTerm = function (gridParams, gridColumnDefs) {
            //extend the filter term to columnDefs
            if (gridParams && gridParams.filterColumns && gridParams.filterColumns.length > 0) {
                gridColumnDefs = _.map(gridColumnDefs, function (gridColumnDef) {
                    if (gridParams) {
                        var matchedFilter = _.find(gridParams.filterColumns, function (filterColumn) {
                            return filterColumn.name === gridColumnDef.field;
                        });

                        if (matchedFilter) {
                            var extendFilters;
                            if (gridColumnDef.filters && gridColumnDef.filters.length > 0) {
                                _.forEach(gridColumnDef.filters, function (columnFilter) {
                                    var filter = _.find(matchedFilter.filters, function (f) {
                                        return f.condition === columnFilter.condition;
                                    });

                                    if (filter && filter.term)
                                        columnFilter = _.extend(columnFilter, { term: filter.term });
                                });
                            }
                            else {
                                gridColumnDef.filters = [{ term: matchedFilter.filters[0].term }];
                            }

                            return gridColumnDef;
                        } else {
                            return gridColumnDef;
                        }
                    } else {
                        return gridColumnDef;
                    }
                });
            }
        };

        exports.getDefaultOptions = function (options) {
            return _.defaults(options, {
                searchText: '',
                pageNumber: 1,
                pageSize: DEFAULT_PAGESIZE,
                sortColumns: null,
                filterColumns: null
            });
        };

        exports.updateGridOptions = function (gridOptions, options, response) {
            gridOptions.totalItems = response.TotalItems;
            gridOptions.gridData = response.GridData;
            gridOptions.searchText = options.searchText;
            gridOptions.pageNumber = options.pageNumber;
            if (options.includeDeactvated !== undefined)
                gridOptions.includeDeactvated = options.includeDeactvated;
        };

        return exports;
    });
}());