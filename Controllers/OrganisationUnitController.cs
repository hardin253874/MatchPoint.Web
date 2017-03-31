using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Http;
using System.Net.Http;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using MatchPoint.Web.Models;

namespace MatchPoint.Web.Controllers
{
    [RoutePrefix("OrganisationUnitAPI")]
    public class OrganisationUnitController : ApiController
    {
        private readonly IOrganisationUnitRepository _orgUnitRepo;

        //public OrganisationUnitController(IOrganisationUnitRepository orgUnitRepo)
        //{
        //    _orgUnitRepo = orgUnitRepo;

        //}

        [Route("GetOrganisationUnits")]
        [HttpPost]
        public HttpResponseMessage GetOrganisationUnits(Object gridOptions)
        {
            var _orgUnitRepo = new OrganisationUnitRepository();
            var orgUnits = _orgUnitRepo.GetOrganisationUnitData();

            var gridOptionsObj = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            orgUnits = orgUnits.Where(u => u.Name.Contains(gridOptionsObj.SearchText)).ToList();

            if (gridOptionsObj.SortColumns != null && gridOptionsObj.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = gridOptionsObj.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    orgUnits = orgUnits.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    orgUnits = orgUnits.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItems = orgUnits.Count;
            int startIndex = (gridOptionsObj.PageNumber - 1) * gridOptionsObj.PageSize;
            int size = gridOptionsObj.PageSize < (totalItems - startIndex) ? gridOptionsObj.PageSize : totalItems - startIndex;
            var pagedOrgUnits = orgUnits.GetRange(startIndex, size);

            var organisationUnitsData = new OrganisationUnitsData
            {
                Status = "Success",
                GridData = pagedOrgUnits,
                TotalItems = totalItems
            };

            string json = JsonConvert.SerializeObject(organisationUnitsData);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        [Route("GetOrganisationUnit/{id}")]
        [HttpGet]
        public HttpResponseMessage GetOrganisationUnit(int id)
        {
            var _orgUnitRepo = new OrganisationUnitRepository();
            var orgUnits = _orgUnitRepo.GetOrganisationUnitData();
            string json = JsonConvert.SerializeObject(orgUnits.First(a => a.Id == id));

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        [Route("GetOrganisationUnitAliases/{id}")]
        [HttpGet]
        public HttpResponseMessage GetOrganisationUnitAliases(int id)
        {



            var organisationUnitsData = new OrganisationUnitAliasData
            {
                Status = "Success"
            };
            organisationUnitsData.TotalItems = organisationUnitsData.GridData.Count;

            string json = JsonConvert.SerializeObject(organisationUnitsData);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("Edit")]
        [HttpPost]
        public HttpResponseMessage Edit(OrganisationUnit organisationUnit)
        {
            if (ModelState.IsValid)
            {


                return new HttpResponseMessage(HttpStatusCode.OK);
            }


            var response = new ErrorResult();
            response.Status = "Error";
            response.Errors = (from item in ModelState
                               where item.Value.Errors.Any()
                               select item.Value.Errors[0].ErrorMessage).ToList();
            string json = JsonConvert.SerializeObject(response);

            return new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent(json)
            };


        //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);

        }
    }

}


