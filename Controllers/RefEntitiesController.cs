using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;

namespace MatchPoint.Web.Controllers
{
    [RoutePrefix("RefEntitiesAPI")]
    public class RefEntitiesController : ApiController
    {
        List<Title> lstTitle = new List<Title>();
        List<AusPostalCode> lstAusPostalCode = new List<AusPostalCode>();
        List<Country> lstCountries = new List<Country>();
        List<Language> lstLanguage = new List<Language>();
        List<Diagnosis> lstDiagnosis = new List<Diagnosis>();
        List<DriveFocus> lstDriveFocus = new List<DriveFocus>();
        List<DriveType> lstDriveType = new List<DriveType>();
        List<DriveStatus> lstDriveStatus = new List<DriveStatus>();
        List<StatusChangedReason> lstStatusChangedReason = new List<StatusChangedReason>();
        List<string> lstStatusChangedReasonItems = new List<string>();

        List<CBUStatusChangedReason> lstCBUStatusChangedReason = new List<CBUStatusChangedReason>();
        List<string> lstCBUStatusChangedReasonItems = new List<string>();
        List<InvoiceNumberCounter> lstInvoiceNumberCounter = new List<InvoiceNumberCounter>();
        List<PriceItem> lstPriceItem = new List<PriceItem>();
        List<RelationshipType> lstRelationshipType = new List<RelationshipType>();
        List<ItemMapping> lstItemMapping = new List<ItemMapping>();
        List<FundingType> lstFundingType = new List<FundingType>();
        List<OperationalMetric> lstOperationalMetrics = new List<OperationalMetric>();
        List<RefEntityConfiguration> lstRefEntityConfiguration = new List<RefEntityConfiguration>();
        ReqNotifyConfiguration reqNotifyConfiguration = new ReqNotifyConfiguration();
        List<Nationality> lstNationalities = new List<Nationality>();

     

        #region Titles

        [Route("GetTitles")]
        [HttpPost]
        public HttpResponseMessage GetTitles(Object gridOptions)
        {
            string json = string.Empty;
            List<Title> pagedTitle = new List<Title>();

            InitializeTitles();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<Title> filteredTitle = lstTitle.FindAll(e => e.IsActive == true && e.Name.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredTitle = filteredTitle.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredTitle = filteredTitle.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstTitle.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredTitle.Count > size)
                pagedTitle = filteredTitle.GetRange(startIndex, size);
            else
                pagedTitle = filteredTitle;


            TitlesResult titlesResult = new TitlesResult
            {
                Status = "Success",
                Message = "Get Titles",
                GridData = pagedTitle,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(titlesResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        //[Route("GetAllTitles")]
        //[HttpPost]
        //public HttpResponseMessage GetAllTitles(Object gridOptions)
        //{
        //    string json = string.Empty;
        //    List<Title> pagedTitle = new List<Title>();

        //    InitializeTitles();
        //    GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

        //    List<Title> filteredTitle = lstTitle.Where(u => u.Name.Contains(objGridOptions.SearchText)).ToList();

        //    if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
        //    {
        //        SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

        //        if (firstSortColumn.direction == "desc")
        //            filteredTitle = filteredTitle.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
        //        else
        //            filteredTitle = filteredTitle.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
        //    }

        //    int totalItem = lstTitle.Count;
        //    int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
        //    int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

        //    if (filteredTitle.Count > size)
        //        pagedTitle = filteredTitle.GetRange(startIndex, size);
        //    else
        //        pagedTitle = filteredTitle;


        //    TitlesResult titlesResult = new TitlesResult
        //    {
        //        Status = "Success",
        //        Message = "Get Titles",
        //        GridData = pagedTitle,
        //        TotalItems = totalItem
        //    };

        //    json = JsonConvert.SerializeObject(titlesResult);

        //    return new HttpResponseMessage
        //    {
        //        Content = new StringContent(json)
        //    };

        //}


        [Route("GetTitleDetail")]
        [HttpPost]
        public HttpResponseMessage GetTitleDetail(Object objTitle)
        {
            InitializeTitles(); //Initialize Data           

            Title title = lstTitle.Where(u => u.Id == Convert.ToInt32(objTitle)).FirstOrDefault();

            TitleDetailsResult titleDetailsResult = new TitleDetailsResult
            {
                Status = "Success",
                Message = "Get Titles",
                Data = title
            };

            string json = JsonConvert.SerializeObject(titleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        //UpdateTitleDetail
        [Route("UpdateTitleDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateTitleDetail(Object objTitle)
        {
            // Update Data - logic - should be modified accordingly

            TitleDetailsResult titleDetailsResult = new TitleDetailsResult
            {
                Status = "Success",
                Message = "Get Title Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(titleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateTitle
        [Route("CreateTitle")]
        [HttpPost]
        public HttpResponseMessage CreateTitle(Object objTitle)
        {
            // Create Title - logic - should be modified accordingly     

            TitleDetailsResult titleDetailsResult = new TitleDetailsResult
            {
                Status = "Success",
                Message = "Create Title",
                Data = null
            };

            string json = JsonConvert.SerializeObject(titleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        public void InitializeTitles()
        {
            lstTitle.Add(new Title(1, "Dr", true));
            lstTitle.Add(new Title(2, "Miss", true));
            lstTitle.Add(new Title(3, "Monk", true));
            lstTitle.Add(new Title(4, "Mr", true));
            lstTitle.Add(new Title(5, "Mrs", true));
            lstTitle.Add(new Title(6, "Prof", true));
            lstTitle.Add(new Title(7, "Rev", true));
            lstTitle.Add(new Title(8, "Test1", false));
            lstTitle.Add(new Title(9, "Test2", false));
            lstTitle.Add(new Title(10, "Test3", false));
            lstTitle.Add(new Title(11, "Test4", true));
            lstTitle.Add(new Title(12, "Test5", true));
            lstTitle.Add(new Title(13, "Test6", true));
            lstTitle.Add(new Title(14, "Test7", true));
            lstTitle.Add(new Title(15, "Test8", true));
            lstTitle.Add(new Title(16, "Test9", true));
            lstTitle.Add(new Title(17, "Test10", true));
        }

        public class TitlesResult
        {
            public TitlesResult()
            {
            }

            public List<Title> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class Title
        {
            public Title()
            {
            }

            public Title(int id, string strTitle, bool isActive)
            {
                this.Id = id;
                this.Name = strTitle;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public bool IsActive { get; set; }

        }

        public class TitleDetailsResult
        {
            public TitleDetailsResult() { }
            public string Status { get; set; }
            public Title Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Australian Postal Codes

        [Route("GetPostalCodes")]
        [HttpPost]
        public HttpResponseMessage GetAusPostalCodes(Object gridOptions)
        {
            string json = string.Empty;
            List<AusPostalCode> pagedAusPostalCode = new List<AusPostalCode>();

            InitializeAusPostalCodes();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<AusPostalCode> filteredAusPostalCode = lstAusPostalCode.Where(u => u.PostalCode.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredAusPostalCode = filteredAusPostalCode.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredAusPostalCode = filteredAusPostalCode.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredAusPostalCode.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredAusPostalCode.Count > size)
                pagedAusPostalCode = filteredAusPostalCode.GetRange(startIndex, size);
            else
                pagedAusPostalCode = filteredAusPostalCode;


            AusPostalCodeResult ausPostalCodeResult = new AusPostalCodeResult
            {
                Status = "Success",
                Message = "Get Titles",
                GridData = pagedAusPostalCode,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(ausPostalCodeResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetPostalCodeDetail")]
        [HttpPost]
        public HttpResponseMessage GetPostalCodeDetail(Object objAusPostalCode)
        {
            InitializeAusPostalCodes(); //Initialize Data           

            AusPostalCode ausPostalCode = lstAusPostalCode.Where(u => u.Id == Convert.ToInt32(objAusPostalCode)).FirstOrDefault();

            AusPostalCodeDetailsResult ausPostalCodeDetailsResult = new AusPostalCodeDetailsResult
            {
                Status = "Success",
                Message = "Get Titles",
                Data = ausPostalCode
            };

            string json = JsonConvert.SerializeObject(ausPostalCodeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdatePostalCodeDetail")]
        [HttpPost]
        public HttpResponseMessage UpdatePostalCodeDetail(Object objPostalCode)
        {
            // Update Data - logic - should be modified accordingly

            AusPostalCodeDetailsResult ausPostalCodeDetailsResult = new AusPostalCodeDetailsResult
            {
                Status = "Success",
                Message = "Update Postal Code Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(ausPostalCodeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreatePostalCode
        [Route("CreatePostalCode")]
        [HttpPost]
        public HttpResponseMessage CreatePostalCode(Object objPostalCode)
        {
            // Create Title - logic - should be modified accordingly   
            AusPostalCodeDetailsResult ausPostalCodeDetailsResult = new AusPostalCodeDetailsResult
            {
                Status = "Success",
                Message = "Create Postal Code",
                Data = null
            };

            string json = JsonConvert.SerializeObject(ausPostalCodeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeAusPostalCodes()
        {
            lstAusPostalCode.Add(new AusPostalCode(1, "0830", "MARLOW LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(2, "0830", "MOULDEN", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(3, "0830", "PALMERSTON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(4, "0830", "WOODROFFE", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(5, "0830", "JOHNSTON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(6, "0831", "YARRAWONGA", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(7, "0831", "MITCHELL", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(8, "0831", "ROSEBERY LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(9, "0831", "MARLOW LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(10, "0831", "ZUCCOLI LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(11, "0832", "ZUCCOLI", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(12, "0832", "HOWARD SPRINGS", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(13, "0832", "GIRRAWEEN", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(14, "0832", "HERBERT LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(15, "0832", "BELLAMACK LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(16, "0833", "GUNN LAGOON", "NT", true, "Delivery Area", ""));
            lstAusPostalCode.Add(new AusPostalCode(17, "0833", "GUNN", "NT", true, "Delivery Area", ""));

        }


        public class AusPostalCode
        {
            public AusPostalCode()
            {

            }

            public AusPostalCode(int id, string strPostalCode, string strLocality, string strState, bool isActive, string strCategory, string strComments)
            {
                this.Id = id;
                this.PostalCode = strPostalCode;
                this.Locality = strLocality;
                this.State = strState;
                this.IsActive = isActive;
                this.Category = strCategory;
                this.Comments = strComments;
            }

            public int Id { get; set; }
            public string PostalCode { get; set; }
            public string Locality { get; set; }
            public string State { get; set; }
            public bool IsActive { get; set; }
            public string Category { get; set; }
            public string Comments { get; set; }


        }

        public class AusPostalCodeResult
        {
            public AusPostalCodeResult() { }
            public List<AusPostalCode> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class AusPostalCodeDetailsResult
        {
            public AusPostalCodeDetailsResult() { }
            public string Status { get; set; }
            public AusPostalCode Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Countries
        [Route("GetCountries")]
        [HttpPost]
        public HttpResponseMessage GetCountries(Object gridOptions)
        {
            string json = string.Empty;
            List<Country> pagedCountries = new List<Country>();

            InitializeCountries();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<Country> filteredCountry = lstCountries.Where(u => u.CountryName.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredCountry = filteredCountry.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredCountry = filteredCountry.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredCountry.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredCountry.Count > size)
                pagedCountries = filteredCountry.GetRange(startIndex, size);
            else
                pagedCountries = filteredCountry;


            CountryResult countryResult = new CountryResult
            {
                Status = "Success",
                Message = "Get Countries",
                GridData = pagedCountries,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(countryResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        [Route("GetCountryDetail")]
        [HttpPost]
        public HttpResponseMessage GetCountryDetail(Object objCountry)
        {
            InitializeCountries(); //Initialize Data           

            Country country = lstCountries.Where(u => u.Id == Convert.ToInt32(objCountry)).FirstOrDefault();

            CountryDetailsResult countryDetailsResult = new CountryDetailsResult
            {
                Status = "Success",
                Message = "Get Countries",
                Data = country
            };

            string json = JsonConvert.SerializeObject(countryDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        [Route("UpdateCountryDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateCountryDetail(Object objCountry)
        {
            // Update Data - logic - should be modified accordingly

            CountryDetailsResult countryDetailsResult = new CountryDetailsResult
            {
                Status = "Success",
                Message = "Update Country Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(countryDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        //CreateCountry
        [Route("CreateCountry")]
        [HttpPost]
        public HttpResponseMessage CreateCountry(Object objCountry)
        {
            // Create Country - logic - should be modified accordingly   
            CountryDetailsResult countryDetailsResult = new CountryDetailsResult
            {
                Status = "Success",
                Message = "Create Country",
                Data = null
            };

            string json = JsonConvert.SerializeObject(countryDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeCountries()
        {
            lstCountries.Add(new Country(1, "Afghanistan", "AT", 93, true));
            lstCountries.Add(new Country(2, "American Samoa", "AS", 987, true));
            lstCountries.Add(new Country(3, "Andorra", "AD", 622, true));
            lstCountries.Add(new Country(4, "Angola", "AO", 622, true));
            lstCountries.Add(new Country(5, "Anguilla", "AI", 33, true));
            lstCountries.Add(new Country(6, "Antarctica", "AQ", 6232, true));
            lstCountries.Add(new Country(7, "Antigua and Barbuda", "AG", 243, true));
            lstCountries.Add(new Country(8, "Argentina", "AR", 76, true));
            lstCountries.Add(new Country(9, "Armenia", "AM", 98, true));
            lstCountries.Add(new Country(10, "Aruba", "AW", 44, true));
            lstCountries.Add(new Country(11, "Australia", "AU", 22, true));
            lstCountries.Add(new Country(12, "Austria", "AT", 23, true));
            lstCountries.Add(new Country(13, "Azerbaijan", "AZ", 87, true));
            lstCountries.Add(new Country(14, "Bahamas", "BS", 994, true));
            lstCountries.Add(new Country(15, "Bahrain", "BH", 973, true));
            lstCountries.Add(new Country(16, "Bangladesh", "BD", 973, true));
            lstCountries.Add(new Country(17, "Bhutan", "BY", 375, true));

        }

        public class Country
        {
            public Country()
            {

            }

            public Country(int id, string strCountry, string strCountryCode, int diallingCode, bool isActive)
            {
                this.Id = id;
                this.CountryName = strCountry;
                this.CountryCode = strCountryCode;
                this.DiallingCode = diallingCode;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string CountryName { get; set; }
            public string CountryCode { get; set; }
            public int DiallingCode { get; set; }
            public bool IsActive { get; set; }

        }

        public class CountryResult
        {
            public CountryResult() { }
            public List<Country> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class CountryDetailsResult
        {
            public CountryDetailsResult() { }
            public string Status { get; set; }
            public Country Data { get; set; }
            public string Message { get; set; }
        }
        #endregion

        #region Languages

        [Route("GetLanguages")]
        [HttpPost]
        public HttpResponseMessage GetLanguages(Object gridOptions)
        {
            string json = string.Empty;
            List<Language> pagedLanguage = new List<Language>();

            InitializeLanguages();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<Language> filteredLanguage = lstLanguage.Where(u => u.BroadGroupName.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredLanguage = filteredLanguage.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredLanguage = filteredLanguage.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredLanguage.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredLanguage.Count > size)
                pagedLanguage = filteredLanguage.GetRange(startIndex, size);
            else
                pagedLanguage = filteredLanguage;


            LanguageResult languageResult = new LanguageResult
            {
                Status = "Success",
                Message = "Get Languages",
                GridData = pagedLanguage,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(languageResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetLanguageDetail")]
        [HttpPost]
        public HttpResponseMessage GetLanguageDetail(Object objLanguage)
        {
            InitializeLanguages(); //Initialize Data           

            Language language = lstLanguage.Where(u => u.Id == Convert.ToInt32(objLanguage)).FirstOrDefault();

            LanguageDetailsResult languageDetailsResult = new LanguageDetailsResult
            {
                Status = "Success",
                Message = "Get Languages",
                Data = language
            };

            string json = JsonConvert.SerializeObject(languageDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateLanguageDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateLanguageDetail(Object objLanguage)
        {
            // Update Data - logic - should be modified accordingly

            LanguageDetailsResult langaugeDetailsResult = new LanguageDetailsResult
            {
                Status = "Success",
                Message = "Update Language Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(langaugeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateLanguage
        [Route("CreateLanguage")]
        [HttpPost]
        public HttpResponseMessage CreateLanguage(Object objLanguage)
        {
            // Create Title - logic - should be modified accordingly   
            LanguageDetailsResult languageDetailsResult = new LanguageDetailsResult
            {
                Status = "Success",
                Message = "Create Language",
                Data = null
            };

            string json = JsonConvert.SerializeObject(languageDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        public void InitializeLanguages()
        {
            lstLanguage.Add(new Language(1, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6512", "Filipno", true));
            lstLanguage.Add(new Language(2, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6513", "Acehnese", true));
            lstLanguage.Add(new Language(3, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6514", "Balinese", true));
            lstLanguage.Add(new Language(4, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6515", "Bikol", true));
            lstLanguage.Add(new Language(5, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6516", "Iban", true));
            lstLanguage.Add(new Language(6, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6517", "Ilonggo", true));
            lstLanguage.Add(new Language(7, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6518", "Javanese", true));
            lstLanguage.Add(new Language(8, "6", "Southeast Asian Languages", "65", "Southeast Asian Austronesian Languages", "6519", "Pampangan", true));
            lstLanguage.Add(new Language(9, "7", "Eastern Asian Languages", "65", "Chinese", "7101", "Cantonese", true));
            lstLanguage.Add(new Language(10, "7", "Eastern Asian Languages", "65", "Chinese", "7102", "Hakka", true));
            lstLanguage.Add(new Language(11, "7", "Eastern Asian Languages", "65", "Chinese", "7103", "Mandarin", true));
            lstLanguage.Add(new Language(12, "7", "Eastern Asian Languages", "65", "Chinese", "7104", "Wu", true));
            lstLanguage.Add(new Language(13, "7", "Eastern Asian Languages", "65", "Chinese", "7105", "Min Nan", true));
            lstLanguage.Add(new Language(14, "7", "Eastern Asian Languages", "65", "Chinese", "7106", "Chinese, nec", true));
            lstLanguage.Add(new Language(15, "7", "Eastern Asian Languages", "65", "Chinese", "7107", "Japanese", true));

        }


        public class Language
        {
            public Language()
            {

            }

            public Language(int id, string broadGroupCode, string strBroadGroupName, string strNarrowGroupCode, string strNarrowGroupName, string strLanguageCode, string strLanguageDescription, bool isActive)
            {
                this.Id = id;
                this.BroadGroupCode = broadGroupCode;
                this.BroadGroupName = strBroadGroupName;
                this.NarrowGroupCode = strNarrowGroupCode;
                this.NarrowGroupName = strNarrowGroupName;
                this.LanguageCode = strLanguageCode;
                this.LanguageDescription = strLanguageDescription;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string NarrowGroupCode { get; set; }
            public string BroadGroupCode { get; set; }
            public string BroadGroupName { get; set; }
            public string NarrowGroupName { get; set; }
            public string LanguageCode { get; set; }
            public string LanguageDescription { get; set; }
            public bool IsActive { get; set; }
        }

        public class LanguageResult
        {
            public LanguageResult() { }
            public List<Language> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class LanguageDetailsResult
        {
            public LanguageDetailsResult() { }
            public string Status { get; set; }
            public Language Data { get; set; }
            public string Message { get; set; }
        }


        #endregion

        #region Diagnosis

        [Route("GetDiagnosis")]
        [HttpPost]
        public HttpResponseMessage GetDiagnosis(Object gridOptions)
        {
            string json = string.Empty;
            List<Diagnosis> pagedDiagnosis = new List<Diagnosis>();

            InitializeDiagnosis();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<Diagnosis> filteredDiagnosis = lstDiagnosis.Where(u => u.CategoryDescription.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredDiagnosis = filteredDiagnosis.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredDiagnosis = filteredDiagnosis.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredDiagnosis.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredDiagnosis.Count > size)
                pagedDiagnosis = filteredDiagnosis.GetRange(startIndex, size);
            else
                pagedDiagnosis = filteredDiagnosis;


            DiagnosisResult diagnosisResult = new DiagnosisResult
            {
                Status = "Success",
                Message = "Get Diagnosis",
                GridData = pagedDiagnosis,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(diagnosisResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetDiagnosisDetail")]
        [HttpPost]
        public HttpResponseMessage GetDiagnosisDetail(Object objDiagnosis)
        {
            InitializeDiagnosis(); //Initialize Data           

            Diagnosis diagnosis = lstDiagnosis.Where(u => u.Id == Convert.ToInt32(objDiagnosis)).FirstOrDefault();

            DiagnosisDetailsResult diagnosisDetailsResult = new DiagnosisDetailsResult
            {
                Status = "Success",
                Message = "Get Diagnosis",
                Data = diagnosis
            };

            string json = JsonConvert.SerializeObject(diagnosisDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateDiagnosisDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateDiagnosisDetail(Object objDiagnosis)
        {
            // Update Data - logic - should be modified accordingly

            DiagnosisDetailsResult diagnosisDetailsResult = new DiagnosisDetailsResult
            {
                Status = "Success",
                Message = "Update Diagnosis Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(diagnosisDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateDiagnosis
        [Route("CreateDiagnosis")]
        [HttpPost]
        public HttpResponseMessage CreateDiagnosis(Object objDiagnosis)
        {
            // Create Diagnosis - logic - should be modified accordingly   
            DiagnosisDetailsResult diagnosisDetailsResult = new DiagnosisDetailsResult
            {
                Status = "Success",
                Message = "Create Diagnosis",
                Data = null
            };

            string json = JsonConvert.SerializeObject(diagnosisDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeDiagnosis()
        {
            lstDiagnosis.Add(new Diagnosis(1, "A00", "Cholera", "0", "Cholera due to Vibrio Cholerae 01, biovar cholerae", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A00", "Cholera", "1", "Cholera due to Vibrio Cholerae 01, biovar eltor", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A00", "Cholera", "9", "Cholera due to Vibrio Cholerae 01, unspecified", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A01", "Typhoid and parathyphoid fevers", "0", "parathyphoid fever A", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A01", "Typhoid and parathyphoid fevers", "1", "parathyphoid fever B", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A01", "Typhoid and parathyphoid fevers", "2", "parathyphoid fever C", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A02", "Other salmonella infections", "0", "salmonella sepsis", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A02", "Other salmonella infections", "1", "salmonella sepsis", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A02", "Other salmonella infections", "2", "salmonella sepsis", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A03", "Amoebiasis", "0", "Amoeboma of intestine", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A03", "Amoebiasis", "1", "Amoeboma of intestine", false, true));
            lstDiagnosis.Add(new Diagnosis(1, "A03", "Amoebiasis", "2", "Amoeboma of intestine", false, true));
        }


        public class Diagnosis
        {
            public Diagnosis()
            {

            }

            public Diagnosis(int id, string strCategoryCode, string strCategoryDescription, string strSubCategoryCode, string strSubCategoryDescription, bool isAcceptTransPlant, bool isActive)
            {
                this.Id = id;
                this.CategoryCode = strCategoryCode;
                this.CategoryDescription = strCategoryDescription;
                this.SubCategoryCode = strSubCategoryCode;
                this.SubCategoryDescription = strSubCategoryDescription;
                this.IsAcceptableTransplant = isAcceptTransPlant;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string CategoryCode { get; set; }
            public string CategoryDescription { get; set; }
            public string SubCategoryCode { get; set; }
            public string SubCategoryDescription { get; set; }
            public bool IsAcceptableTransplant { get; set; }
            public bool IsActive { get; set; }
        }

        public class DiagnosisResult
        {
            public DiagnosisResult() { }
            public List<Diagnosis> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class DiagnosisDetailsResult
        {
            public DiagnosisDetailsResult() { }
            public string Status { get; set; }
            public Diagnosis Data { get; set; }
            public string Message { get; set; }
        }



        #endregion

        #region DriveFocus

        [Route("GetDriveFocus")]
        [HttpPost]
        public HttpResponseMessage GetDriveFocus(Object gridOptions)
        {
            string json = string.Empty;
            List<DriveFocus> pagedDriveFocus = new List<DriveFocus>();

            InitializeDriveFocus();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<DriveFocus> filteredDriveFocus = lstDriveFocus.Where(u => u.Name.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredDriveFocus = filteredDriveFocus.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredDriveFocus = filteredDriveFocus.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredDriveFocus.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredDriveFocus.Count > size)
                pagedDriveFocus = filteredDriveFocus.GetRange(startIndex, size);
            else
                pagedDriveFocus = filteredDriveFocus;

            DriveFocusResult driveFocusResult = new DriveFocusResult
            {
                Status = "Success",
                Message = "Get Drive Focus",
                GridData = pagedDriveFocus,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(driveFocusResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        [Route("GetDriveFocusDetail")]
        [HttpPost]
        public HttpResponseMessage GetDriveFocusDetail(Object objDriveFocus)
        {
            InitializeDriveFocus(); //Initialize Data           

            DriveFocus ausPostalCode = lstDriveFocus.Where(u => u.Id == Convert.ToInt32(objDriveFocus)).FirstOrDefault();

            DriveFocusDetailsResult driveFocusDetailsResult = new DriveFocusDetailsResult
            {
                Status = "Success",
                Message = "Get Drive Focus",
                Data = ausPostalCode
            };

            string json = JsonConvert.SerializeObject(driveFocusDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateDriveFocusDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateDriveFocusDetail(Object objDriveFocus)
        {
            // Update Data - logic - should be modified accordingly

            DriveFocusDetailsResult driveFocusDetailsResult = new DriveFocusDetailsResult
            {
                Status = "Success",
                Message = "Update Drive Focus Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(driveFocusDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateDriveFocus
        [Route("CreateDriveFocus")]
        [HttpPost]
        public HttpResponseMessage CreateDriveFocus(Object objDriveFocus)
        {
            // Create DriveFocus - logic - should be modified accordingly   
            DriveFocusDetailsResult driveFocusDetailsResult = new DriveFocusDetailsResult
            {
                Status = "Success",
                Message = "Create Drive Focus",
                Data = null
            };

            string json = JsonConvert.SerializeObject(driveFocusDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeDriveFocus()
        {
            lstDriveFocus.Add(new DriveFocus(1, "Combined with whole blood", true));
            lstDriveFocus.Add(new DriveFocus(2, "Minority", true));
            lstDriveFocus.Add(new DriveFocus(3, "Patient", true));
            lstDriveFocus.Add(new DriveFocus(4, "Test1", true));
            lstDriveFocus.Add(new DriveFocus(5, "Test2", true));
            lstDriveFocus.Add(new DriveFocus(6, "Test3", true));
            lstDriveFocus.Add(new DriveFocus(7, "Test4", true));
            lstDriveFocus.Add(new DriveFocus(8, "Test5", true));
            lstDriveFocus.Add(new DriveFocus(9, "Test6", true));
            lstDriveFocus.Add(new DriveFocus(10, "Test7", true));
            lstDriveFocus.Add(new DriveFocus(11, "Test8", true));
            lstDriveFocus.Add(new DriveFocus(12, "Test9", true));
            lstDriveFocus.Add(new DriveFocus(13, "Test10", true));
            lstDriveFocus.Add(new DriveFocus(14, "Test11", true));
            lstDriveFocus.Add(new DriveFocus(15, "Test12", true));
        }

        public class DriveFocus
        {
            public DriveFocus()
            {

            }

            public DriveFocus(int id, string strName, bool isActive)
            {
                this.Id = id;
                this.Name = strName;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public bool IsActive { get; set; }
        }

        public class DriveFocusResult
        {
            public DriveFocusResult() { }
            public List<DriveFocus> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class DriveFocusDetailsResult
        {
            public DriveFocusDetailsResult() { }
            public string Status { get; set; }
            public DriveFocus Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region DriveType

        [Route("GetDriveType")]
        [HttpPost]
        public HttpResponseMessage GetDriveType(Object gridOptions)
        {
            string json = string.Empty;
            List<DriveType> pagedDriveType = new List<DriveType>();

            InitializeDriveType();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<DriveType> filteredDriveType = lstDriveType.Where(u => u.Name.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredDriveType = filteredDriveType.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredDriveType = filteredDriveType.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredDriveType.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredDriveType.Count > size)
                pagedDriveType = filteredDriveType.GetRange(startIndex, size);
            else
                pagedDriveType = filteredDriveType;


            DriveTypeResult driveTypeResult = new DriveTypeResult
            {
                Status = "Success",
                Message = "Get Drive Type",
                GridData = pagedDriveType,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(driveTypeResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetDriveTypeDetail")]
        [HttpPost]
        public HttpResponseMessage GetDriveTypeDetail(Object objDriveType)
        {
            InitializeDriveType(); //Initialize Data           

            DriveType ausPostalCode = lstDriveType.Where(u => u.Id == Convert.ToInt32(objDriveType)).FirstOrDefault();

            DriveTypeDetailsResult driveTypeDetailsResult = new DriveTypeDetailsResult
            {
                Status = "Success",
                Message = "Get Drive Type",
                Data = ausPostalCode
            };

            string json = JsonConvert.SerializeObject(driveTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateDriveTypeDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateDriveTypeDetail(Object objDriveType)
        {
            // Update Data - logic - should be modified accordingly

            DriveTypeDetailsResult driveTypeDetailsResult = new DriveTypeDetailsResult
            {
                Status = "Success",
                Message = "Update Drive Type Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(driveTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateDriveType
        [Route("CreateDriveType")]
        [HttpPost]
        public HttpResponseMessage CreateDriveType(Object objDriveType)
        {
            // Create Title - logic - should be modified accordingly   
            DriveTypeDetailsResult driveTypeDetailsResult = new DriveTypeDetailsResult
            {
                Status = "Success",
                Message = "Create Drive Type",
                Data = null
            };

            string json = JsonConvert.SerializeObject(driveTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeDriveType()
        {
            lstDriveType.Add(new DriveType(1, "Live", true));
            lstDriveType.Add(new DriveType(2, "Online", true));
            lstDriveType.Add(new DriveType(3, "WalkIn", true));
            lstDriveType.Add(new DriveType(4, "Test1", true));
            lstDriveType.Add(new DriveType(5, "Test2", true));
            lstDriveType.Add(new DriveType(6, "Test3", true));
            lstDriveType.Add(new DriveType(7, "Test4", true));
            lstDriveType.Add(new DriveType(8, "Test5", true));
            lstDriveType.Add(new DriveType(9, "Test6", true));
            lstDriveType.Add(new DriveType(10, "Test7", true));
            lstDriveType.Add(new DriveType(11, "Test8", true));
            lstDriveType.Add(new DriveType(12, "Test9", true));
            lstDriveType.Add(new DriveType(13, "Test10", true));
        }


        public class DriveType
        {
            public DriveType()
            {

            }

            public DriveType(int id, string strName, bool isActive)
            {
                this.Id = id;
                this.Name = strName;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public bool IsActive { get; set; }
        }

        public class DriveTypeResult
        {
            public DriveTypeResult() { }
            public List<DriveType> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class DriveTypeDetailsResult
        {
            public DriveTypeDetailsResult() { }
            public string Status { get; set; }
            public DriveType Data { get; set; }
            public string Message { get; set; }
        }


        #endregion

        #region DriveStatus

        [Route("GetDriveStatus")]
        [HttpPost]
        public HttpResponseMessage GetDriveStatus(Object gridOptions)
        {
            string json = string.Empty;
            List<DriveStatus> pagedDriveStatus = new List<DriveStatus>();

            InitializeDriveStatus();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<DriveStatus> filteredDriveStatus = lstDriveStatus.Where(u => u.Name.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredDriveStatus = filteredDriveStatus.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredDriveStatus = filteredDriveStatus.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredDriveStatus.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredDriveStatus.Count > size)
                pagedDriveStatus = filteredDriveStatus.GetRange(startIndex, size);
            else
                pagedDriveStatus = filteredDriveStatus;


            DriveStatusResult driveStatusResult = new DriveStatusResult
            {
                Status = "Success",
                Message = "Get Drive Status",
                GridData = pagedDriveStatus,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(driveStatusResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetDriveStatusDetail")]
        [HttpPost]
        public HttpResponseMessage GetDriveStatusDetail(Object objDriveStatus)
        {
            InitializeDriveStatus(); //Initialize Data           

            DriveStatus driveStatus = lstDriveStatus.Where(u => u.Id == Convert.ToInt32(objDriveStatus)).FirstOrDefault();

            DriveStatusDetailsResult driveStatusDetailsResult = new DriveStatusDetailsResult
            {
                Status = "Success",
                Message = "Get Drive Status",
                Data = driveStatus
            };

            string json = JsonConvert.SerializeObject(driveStatusDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateDriveStatusDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateDriveStatusDetail(Object objDriveStatus)
        {
            // Update Data - logic - should be modified accordingly

            DriveStatusDetailsResult driveStatusDetailsResult = new DriveStatusDetailsResult
            {
                Status = "Success",
                Message = "Update Drive Status Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(driveStatusDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateDriveStatus
        [Route("CreateDriveStatus")]
        [HttpPost]
        public HttpResponseMessage CreateDriveStatus(Object objDriveStatus)
        {
            // Create Status - logic - should be modified accordingly   
            DriveStatusDetailsResult driveStatusDetailsResult = new DriveStatusDetailsResult
            {
                Status = "Success",
                Message = "Create Drive Status",
                Data = null
            };

            string json = JsonConvert.SerializeObject(driveStatusDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeDriveStatus()
        {
            lstDriveStatus.Add(new DriveStatus(1, "Live", true));
            lstDriveStatus.Add(new DriveStatus(2, "Online", true));
            lstDriveStatus.Add(new DriveStatus(3, "WalkIn", true));
            lstDriveStatus.Add(new DriveStatus(4, "Test1", true));
            lstDriveStatus.Add(new DriveStatus(5, "Test2", true));
            lstDriveStatus.Add(new DriveStatus(6, "Test3", true));
            lstDriveStatus.Add(new DriveStatus(7, "Test4", true));
            lstDriveStatus.Add(new DriveStatus(8, "Test5", true));
            lstDriveStatus.Add(new DriveStatus(9, "Test6", true));
            lstDriveStatus.Add(new DriveStatus(10, "Test7", true));
            lstDriveStatus.Add(new DriveStatus(11, "Test8", true));
            lstDriveStatus.Add(new DriveStatus(12, "Test9", true));
            lstDriveStatus.Add(new DriveStatus(13, "Test10", true));
        }


        public class DriveStatus
        {
            public DriveStatus()
            {

            }

            public DriveStatus(int id, string strName, bool isActive)
            {
                this.Id = id;
                this.Name = strName;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public bool IsActive { get; set; }
        }

        public class DriveStatusResult
        {
            public DriveStatusResult() { }
            public List<DriveStatus> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class DriveStatusDetailsResult
        {
            public DriveStatusDetailsResult() { }
            public string Status { get; set; }
            public DriveStatus Data { get; set; }
            public string Message { get; set; }
        }


        #endregion

        #region Status Changed Reason

        [Route("GetStatusChangedReason")]
        [HttpPost]
        public HttpResponseMessage GetStatusChangedReason(Object gridOptions)
        {
            string json = string.Empty;
            List<StatusChangedReason> pagedStatusChangedReason = new List<StatusChangedReason>();

            InitializeStatusChangedReason();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<StatusChangedReason> filteredStatusChangedReason = lstStatusChangedReason.Where(u => u.Description.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredStatusChangedReason = filteredStatusChangedReason.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredStatusChangedReason = filteredStatusChangedReason.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredStatusChangedReason.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredStatusChangedReason.Count > size)
                pagedStatusChangedReason = filteredStatusChangedReason.GetRange(startIndex, size);
            else
                pagedStatusChangedReason = filteredStatusChangedReason;


            StatusChangedReasonResult statusChangedReasonResult = new StatusChangedReasonResult
            {
                Status = "Success",
                Message = "Get Status Changed Reason",
                GridData = pagedStatusChangedReason,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(statusChangedReasonResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetStatusChangedReasonDetail")]
        [HttpPost]
        public HttpResponseMessage GetStatusChangedReasonDetail(Object objStatusChangeReason)
        {
            InitializeStatusChangedReason(); //Initialize Data           

            StatusChangedReason statusChangedReason = lstStatusChangedReason.Where(u => u.Id == Convert.ToInt32(objStatusChangeReason)).FirstOrDefault();

            StatusChangedReasonDetailsResult statusChangedReasonDetailsResult = new StatusChangedReasonDetailsResult
            {
                Status = "Success",
                Message = "Get Status Changed Reason",
                Data = statusChangedReason
            };

            string json = JsonConvert.SerializeObject(statusChangedReasonDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateStatusChangedReasonDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateStatusChangedReasonDetail(Object objStatusChangeReason)
        {
            // Update Data - logic - should be modified accordingly
            StatusChangedReasonDetailsResult statusChangedReasonDetailsResult = new StatusChangedReasonDetailsResult
            {
                Status = "Success",
                Message = "Update Status Changed Reason Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(statusChangedReasonDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateStatusChangedReason
        [Route("CreateStatusChangedReason")]
        [HttpPost]
        public HttpResponseMessage CreateStatusChangedReason(Object objStatusChangedReason)
        {
            // Create Status Change Reason - logic - should be modified accordingly   
            StatusChangedReasonDetailsResult statusChangedReasonDetailsResult = new StatusChangedReasonDetailsResult
            {
                Status = "Success",
                Message = "Create Status Changed Reason",
                Data = null
            };

            string json = JsonConvert.SerializeObject(statusChangedReasonDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //LoadStatusChangedReasonItems
        [Route("LoadStatusChangedReasonItems")]
        [HttpPost]
        public HttpResponseMessage LoadStatusChangedReasonItems(Object objStatusChangedReason)
        {
            InitializeStatusChangedReasonItems();

            // Create Status Change Reason - logic - should be modified accordingly   
            StatusChangedReasonItemsResult statusChangedReasonItemsResult = new StatusChangedReasonItemsResult
            {
                Status = "Success",
                Message = "Load Status Changed Reason Items",
                Data = lstStatusChangedReasonItems
            };

            string json = JsonConvert.SerializeObject(statusChangedReasonItemsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        public void InitializeStatusChangedReasonItems()
        {
            lstStatusChangedReasonItems.Add("Active");
            lstStatusChangedReasonItems.Add("Available");
            lstStatusChangedReasonItems.Add("Deleted");
            lstStatusChangedReasonItems.Add("Temporary UnAvailable");
            lstStatusChangedReasonItems.Add("Newly Entered");
            lstStatusChangedReasonItems.Add("Retired");
            lstStatusChangedReasonItems.Add("Reserved");
        }


        public void InitializeStatusChangedReason()
        {
            lstStatusChangedReason.Add(new StatusChangedReason(1, "Unable to Contact", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(2, "No Longer Interested", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(3, "Permanently Medically Deferred", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(4, "Duplicate Entry", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(5, "Transferred to Another Registry", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(6, "HLA not compatible with OptiMAS", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(7, "MITCHELL", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(8, "Retired", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(9, "Medical Reasons", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(10, "Donor has moved", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(11, "Other Reason", "Deleted", true));
            lstStatusChangedReason.Add(new StatusChangedReason(12, "After transplantation", "Temporary Unavailable", true));
            lstStatusChangedReason.Add(new StatusChangedReason(13, "GIRRAWEEN", "Temporary Unavailable", true));
            lstStatusChangedReason.Add(new StatusChangedReason(14, "Unable to contact donor", "Temporary Unavailable", true));
            lstStatusChangedReason.Add(new StatusChangedReason(15, "Typing Questionable", "Temporary Unavailable", true));
            lstStatusChangedReason.Add(new StatusChangedReason(16, "Donor has made a donation", "Temporary Unavailable", true));
            lstStatusChangedReason.Add(new StatusChangedReason(17, "Donor has accepted donation", "Temporary Unavailable", true));

        }


        public class StatusChangedReason
        {
            public StatusChangedReason()
            {

            }

            public StatusChangedReason(int id, string strDescription, string strStatus, bool isActive)
            {
                this.Id = id;
                this.Description = strDescription;
                this.Status = strStatus;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Description { get; set; }
            public string Status { get; set; }
            public bool IsActive { get; set; }

        }

        public class StatusChangedReasonResult
        {
            public StatusChangedReasonResult() { }
            public List<StatusChangedReason> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class StatusChangedReasonDetailsResult
        {
            public StatusChangedReasonDetailsResult() { }
            public string Status { get; set; }
            public StatusChangedReason Data { get; set; }
            public string Message { get; set; }
        }


        public class StatusChangedReasonItemsResult
        {
            public StatusChangedReasonItemsResult() { }
            public string Status { get; set; }
            public List<string> Data { get; set; }
            public string Message { get; set; }
        }
        #endregion

        #region CBU Status Changed Reason

        [Route("GetCBUStatusChangedReason")]
        [HttpPost]
        public HttpResponseMessage GetCBUStatusChangedReason(Object gridOptions)
        {
            string json = string.Empty;
            List<CBUStatusChangedReason> pagedCBUStatusChangedReason = new List<CBUStatusChangedReason>();

            InitializeCBUStatusChangedReason();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<CBUStatusChangedReason> filteredCBUStatusChangedReason = lstCBUStatusChangedReason.Where(u => u.Description.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredCBUStatusChangedReason = filteredCBUStatusChangedReason.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredCBUStatusChangedReason = filteredCBUStatusChangedReason.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredCBUStatusChangedReason.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredCBUStatusChangedReason.Count > size)
                pagedCBUStatusChangedReason = filteredCBUStatusChangedReason.GetRange(startIndex, size);
            else
                pagedCBUStatusChangedReason = filteredCBUStatusChangedReason;


            CBUStatusChangedReasonResult cbuStatusChangedReasonResult = new CBUStatusChangedReasonResult
            {
                Status = "Success",
                Message = "Get CBU Status Changed Reason",
                GridData = pagedCBUStatusChangedReason,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(cbuStatusChangedReasonResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetCBUStatusChangedReasonDetail")]
        [HttpPost]
        public HttpResponseMessage GetCBUStatusChangedReasonDetail(Object objCBUStatusChangeReason)
        {
            InitializeCBUStatusChangedReason(); //Initialize Data           

            CBUStatusChangedReason cbuStatusChangedReason = lstCBUStatusChangedReason.Where(u => u.Id == Convert.ToInt32(objCBUStatusChangeReason)).FirstOrDefault();

            CBUStatusChangedReasonDetailsResult cbuStatusChangedReasonDetailsResult = new CBUStatusChangedReasonDetailsResult
            {
                Status = "Success",
                Message = "Get CBU Status Changed Reason",
                Data = cbuStatusChangedReason
            };

            string json = JsonConvert.SerializeObject(cbuStatusChangedReasonDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateCBUStatusChangedReasonDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateCBUStatusChangedReasonDetail(Object objStatusChangeReason)
        {
            // Update Data - logic - should be modified accordingly
            CBUStatusChangedReasonDetailsResult cbuStatusChangedReasonDetailsResult = new CBUStatusChangedReasonDetailsResult
            {
                Status = "Success",
                Message = "Update CBU Status Changed Reason Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(cbuStatusChangedReasonDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateCBUStatusChangedReason
        [Route("CreateCBUStatusChangedReason")]
        [HttpPost]
        public HttpResponseMessage CreateCBUStatusChangedReason(Object objCBUStatusChangedReason)
        {
            // Create Status Change Reason - logic - should be modified accordingly   
            CBUStatusChangedReasonDetailsResult cbuStatusChangedReasonDetailsResult = new CBUStatusChangedReasonDetailsResult
            {
                Status = "Success",
                Message = "Create CBU Status Changed Reason",
                Data = null
            };

            string json = JsonConvert.SerializeObject(cbuStatusChangedReasonDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //LoadCBUStatusChangedReasonItems
        [Route("LoadCBUStatusChangedReasonItems")]
        [HttpPost]
        public HttpResponseMessage LoadCBUStatusChangedReasonItems(Object objCBUStatusChangedReason)
        {
            InitializeCBUStatusChangedReasonItems();

            // Create Status Change Reason - logic - should be modified accordingly   
            CBUStatusChangedReasonItemsResult cbuStatusChangedReasonItemsResult = new CBUStatusChangedReasonItemsResult
            {
                Status = "Success",
                Message = "Load CBU Status Changed Reason Items",
                Data = lstCBUStatusChangedReasonItems
            };

            string json = JsonConvert.SerializeObject(cbuStatusChangedReasonItemsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        public void InitializeCBUStatusChangedReasonItems()
        {
            lstCBUStatusChangedReasonItems.Add("Active");
            lstCBUStatusChangedReasonItems.Add("Available");
            lstCBUStatusChangedReasonItems.Add("Deleted");
            lstCBUStatusChangedReasonItems.Add("Temporary UnAvailable");
            lstCBUStatusChangedReasonItems.Add("Newly Entered");
            lstCBUStatusChangedReasonItems.Add("Retired");
            lstCBUStatusChangedReasonItems.Add("Reserved");
        }


        public void InitializeCBUStatusChangedReason()
        {
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(1, "Unable to Contact", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(2, "No Longer Interested", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(3, "Permanently Medically Deferred", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(4, "Duplicate Entry", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(5, "Transferred to Another Registry", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(6, "HLA not compatible with OptiMAS", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(7, "MITCHELL", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(8, "Retired", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(9, "Medical Reasons", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(10, "Donor has moved", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(11, "Other Reason", "Deleted", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(12, "After transplantation", "Temporary Unavailable", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(13, "GIRRAWEEN", "Temporary Unavailable", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(14, "Unable to contact donor", "Temporary Unavailable", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(15, "Typing Questionable", "Temporary Unavailable", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(16, "Donor has made a donation", "Temporary Unavailable", true));
            lstCBUStatusChangedReason.Add(new CBUStatusChangedReason(17, "Donor has accepted donation", "Temporary Unavailable", true));

        }


        public class CBUStatusChangedReason
        {
            public CBUStatusChangedReason()
            {

            }

            public CBUStatusChangedReason(int id, string strDescription, string strStatus, bool isActive)
            {
                this.Id = id;
                this.Description = strDescription;
                this.Status = strStatus;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Description { get; set; }
            public string Status { get; set; }
            public bool IsActive { get; set; }

        }

        public class CBUStatusChangedReasonResult
        {
            public CBUStatusChangedReasonResult() { }
            public List<CBUStatusChangedReason> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class CBUStatusChangedReasonDetailsResult
        {
            public CBUStatusChangedReasonDetailsResult() { }
            public string Status { get; set; }
            public CBUStatusChangedReason Data { get; set; }
            public string Message { get; set; }
        }


        public class CBUStatusChangedReasonItemsResult
        {
            public CBUStatusChangedReasonItemsResult() { }
            public string Status { get; set; }
            public List<string> Data { get; set; }
            public string Message { get; set; }
        }


        #endregion

        #region Invoice Number Counters

        [Route("GetInvoiceNumberCounters")]
        [HttpPost]
        public HttpResponseMessage GetInvoiceNumberCounters(Object gridOptions)
        {
            string json = string.Empty;
            List<InvoiceNumberCounter> pagedInvoiceNumberCounter = new List<InvoiceNumberCounter>();

            InitializeInvoiceNumberCounters();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstInvoiceNumberCounter = lstInvoiceNumberCounter.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstInvoiceNumberCounter = lstInvoiceNumberCounter.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstInvoiceNumberCounter.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstInvoiceNumberCounter.Count > size)
                pagedInvoiceNumberCounter = lstInvoiceNumberCounter.GetRange(startIndex, size);
            else
                pagedInvoiceNumberCounter = lstInvoiceNumberCounter;


            InvoiceNumberCounterResult invoiceNumberCounterResult = new InvoiceNumberCounterResult
            {
                Status = "Success",
                Message = "Get Invoice Number Counter",
                GridData = pagedInvoiceNumberCounter,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(invoiceNumberCounterResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetInvoiceNumberCounterDetail")]
        [HttpPost]
        public HttpResponseMessage GetInvoiceNumberCounterDetail(Object objInvoiceNumberCounter)
        {
            InitializeInvoiceNumberCounters(); //Initialize Data           

            InvoiceNumberCounter invoiceNumberCounter = lstInvoiceNumberCounter.Where(u => u.Id == Convert.ToInt32(objInvoiceNumberCounter)).FirstOrDefault();

            InvoiceNumberCounterDetailsResult invoiceNumberCounterDetailsResult = new InvoiceNumberCounterDetailsResult
            {
                Status = "Success",
                Message = "Get Invoice Number Counter",
                Data = invoiceNumberCounter
            };

            string json = JsonConvert.SerializeObject(invoiceNumberCounterDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateInvoiceNumberCounterDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateInvoiceNumberCounterDetail(Object objInvoiceNumberCounter)
        {
            // Update Data - logic - should be modified accordingly
            InvoiceNumberCounterDetailsResult invoiceNumberCounterDetailsResult = new InvoiceNumberCounterDetailsResult
            {
                Status = "Success",
                Message = "Update Invoice Number Counter Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(invoiceNumberCounterDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateInvoiceNumberCounter
        [Route("CreateInvoiceNumberCounter")]
        [HttpPost]
        public HttpResponseMessage CreateInvoiceNumberCounter(Object objInvoiceNumberCounter)
        {
            // Create Title - logic - should be modified accordingly   
            InvoiceNumberCounterDetailsResult invoiceNumberCounterDetailsResult = new InvoiceNumberCounterDetailsResult
            {
                Status = "Success",
                Message = "Create Invoice Number Counters",
                Data = null
            };

            string json = JsonConvert.SerializeObject(invoiceNumberCounterDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeInvoiceNumberCounters()
        {
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(1, "TS", 1, "TCS", 1, "TSI", 1, "TCSI", 1, "TST", 1, "TCST", 1));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(2, "AS", 1894, "CTS", 37, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(3, "BS", 1894, "CGS", 38, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(4, "NS", 1894, "CHS", 39, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(5, "GS", 1894, "CRS", 27, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(6, "OS", 1894, "CBS", 67, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(7, "PS", 1894, "CUS", 97, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(8, "KS", 1894, "CPS", 87, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(9, "LS", 1894, "CSP", 97, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(10, "ES", 1894, "QCS", 77, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(11, "SS", 1894, "CWS", 17, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(12, "MS", 1894, "CIS", 77, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(13, "BS", 1894, "CYS", 77, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(14, "TS", 1894, "CRS", 27, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(15, "S", 1894, "CSU", 97, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(16, "OS", 1894, "CSW", 47, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
            lstInvoiceNumberCounter.Add(new InvoiceNumberCounter(17, "PS", 1894, "CSQ", 77, "SI", 1236, "CSI", 4, "ST", 2414, "CST", 15));
        }


        public class InvoiceNumberCounter
        {


            public InvoiceNumberCounter()
            {

            }

            public InvoiceNumberCounter(int id, string strDonorInvoicePrefix, int donorInvoiceCounter, string strDonorCreditPrefix, int donorCreditCounter,
                                                string strCordInvoicePrefix, int cordInvoiceCounter, string strCordCreditPrefix, int cordCreditCounter,
                                                string strNCBCNInvoicePrefix, int ncbcnInvoiceCounter, string strNCBCNCrediPrefix, int ncbcnCreditCounter)
            {
                this.Id = id;
                this.DonorInvoicePrefix = strDonorInvoicePrefix;
                this.DonorInvoiceCounter = donorInvoiceCounter;
                this.DonorCreditPrefix = strDonorCreditPrefix;
                this.DonorCreditCounter = donorCreditCounter;
                this.CordInvoicePrefix = strCordInvoicePrefix;
                this.CordInvoiceCounter = cordInvoiceCounter;
                this.CordCreditPrefix = strCordCreditPrefix;
                this.CordCreditCounter = cordCreditCounter;
                this.NCBCNInvoicePrefix = strNCBCNInvoicePrefix;
                this.NCBCNInvoiceCounter = ncbcnInvoiceCounter;
                this.NCBCNCreditPrefix = strNCBCNCrediPrefix;
                this.NCBCNCreditCounter = ncbcnCreditCounter;
            }
            public int Id { get; set; }
            public string DonorInvoicePrefix { get; set; }
            public int DonorInvoiceCounter { get; set; }
            public string DonorCreditPrefix { get; set; }
            public int DonorCreditCounter { get; set; }
            public string CordInvoicePrefix { get; set; }
            public int CordInvoiceCounter { get; set; }
            public string CordCreditPrefix { get; set; }
            public int CordCreditCounter { get; set; }
            public string NCBCNInvoicePrefix { get; set; }
            public int NCBCNInvoiceCounter { get; set; }
            public string NCBCNCreditPrefix { get; set; }
            public int NCBCNCreditCounter { get; set; }


        }

        public class InvoiceNumberCounterResult
        {
            public InvoiceNumberCounterResult() { }
            public List<InvoiceNumberCounter> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class InvoiceNumberCounterDetailsResult
        {
            public InvoiceNumberCounterDetailsResult() { }
            public string Status { get; set; }
            public InvoiceNumberCounter Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Price Item
        [Route("GetPriceItems")]
        [HttpPost]
        public HttpResponseMessage GetPriceItems(Object gridOptions)
        {
            string json = string.Empty;
            List<PriceItem> pagedPriceItem = new List<PriceItem>();

            InitializePriceItems();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstPriceItem = lstPriceItem.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstPriceItem = lstPriceItem.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstPriceItem.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstPriceItem.Count > size)
                pagedPriceItem = lstPriceItem.GetRange(startIndex, size);
            else
                pagedPriceItem = lstPriceItem;


            PriceItemResult priceItemResult = new PriceItemResult
            {
                Status = "Success",
                Message = "Get Price Item",
                GridData = pagedPriceItem,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(priceItemResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        [Route("GetPriceItemDetail")]
        [HttpPost]
        public HttpResponseMessage GetPriceItemDetail(Object objPriceItem)
        {
            InitializePriceItems(); //Initialize Data           

            PriceItem priceItem = lstPriceItem.Where(u => u.Id == Convert.ToInt32(objPriceItem)).FirstOrDefault();

            PriceItemDetailsResult priceItemDetailsResult = new PriceItemDetailsResult
            {
                Status = "Success",
                Message = "Get Titles",
                Data = priceItem
            };

            string json = JsonConvert.SerializeObject(priceItemDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }

        [Route("UpdatePriceItemDetail")]
        [HttpPost]
        public HttpResponseMessage UpdatePriceItemDetail(Object objPriceItem)
        {
            // Update Data - logic - should be modified accordingly
            PriceItemDetailsResult priceItemDetailsResult = new PriceItemDetailsResult
            {
                Status = "Success",
                Message = "Update Price Item Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(priceItemDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        //CreatePriceItem
        [Route("CreatePriceItem")]
        [HttpPost]
        public HttpResponseMessage CreatePriceItem(Object objPostalCode)
        {
            // Create PriceItem - logic - should be modified accordingly   
            PriceItemDetailsResult priceItemDetailsResult = new PriceItemDetailsResult
            {
                Status = "Success",
                Message = "Create Price Item",
                Data = null
            };

            string json = JsonConvert.SerializeObject(priceItemDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializePriceItems()
        {
            lstPriceItem.Add(new PriceItem(1, "WUWB-AU-DNR-URG-WB-SECON", "WUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(2, "AUWB-AU-DNR-URG-WB-SECON", "AUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(3, "BUWB-AU-DNR-URG-WB-SECON", "BUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(4, "CUWB-AU-DNR-URG-WB-SECON", "CUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(5, "DUWB-AU-DNR-URG-WB-SECON", "DUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(6, "EUWB-AU-DNR-URG-WB-SECON", "EUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(7, "FUWB-AU-DNR-URG-WB-SECON", "FUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(8, "GWUWB-AU-DNR-URG-WB-SECON", "GUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(9, "FUWB-AU-DNR-URG-WB-SECON", "HUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(10, "IWB-AU-DNR-URG-WB-SECON", "IUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(11, "JUWB-AU-DNR-URG-WB-SECON", "JUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(12, "KUWB-AU-DNR-URG-WB-SECON", "KUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(13, "LUWB-AU-DNR-URG-WB-SECON", "LUWB", "Whole Blood Workup"));
            lstPriceItem.Add(new PriceItem(14, "MUWB-AU-DNR-URG-WB-SECON", "MUWB", "Whole Blood Workup"));
        }

        public class PriceItem
        {
            public PriceItem()
            {

            }

            public PriceItem(int id, string strItemCode, string strDescription, string strInvoiceDescription)
            {
                this.Id = id;
                this.ItemCode = strItemCode;
                this.Description = strDescription;
                this.InvoiceDescription = strInvoiceDescription;
            }

            public int Id { get; set; }
            public string ItemCode { get; set; }
            public string Description { get; set; }
            public string InvoiceDescription { get; set; }
        }

        public class PriceItemResult
        {
            public PriceItemResult() { }
            public List<PriceItem> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class PriceItemDetailsResult
        {
            public PriceItemDetailsResult() { }
            public string Status { get; set; }
            public PriceItem Data { get; set; }
            public string Message { get; set; }
        }
        #endregion

        #region RelationshipType

        [Route("GetRelationshipTypes")]
        [HttpPost]
        public HttpResponseMessage GetRelationshipTypes(Object gridOptions)
        {
            string json = string.Empty;
            List<RelationshipType> pagedRelationshipType = new List<RelationshipType>();

            InitializeRelationshipType();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());


            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstRelationshipType = lstRelationshipType.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstRelationshipType = lstRelationshipType.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstRelationshipType.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstRelationshipType.Count > size)
                pagedRelationshipType = lstRelationshipType.GetRange(startIndex, size);
            else
                pagedRelationshipType = lstRelationshipType;


            RelationshipTypeResult relationshipTypeResult = new RelationshipTypeResult
            {
                Status = "Success",
                Message = "Get Relationship Types",
                GridData = pagedRelationshipType,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(relationshipTypeResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetRelationshipTypeDetail")]
        [HttpPost]
        public HttpResponseMessage GetRelationshipTypeDetail(Object objRelationshipType)
        {
            InitializeRelationshipType(); //Initialize Data           

            RelationshipType relationshipType = lstRelationshipType.Where(u => u.Id == Convert.ToInt32(objRelationshipType)).FirstOrDefault();

            RelationshipTypeDetailsResult relationshipTypeDetailsResult = new RelationshipTypeDetailsResult
            {
                Status = "Success",
                Message = "Get Relationship Type",
                Data = relationshipType
            };

            string json = JsonConvert.SerializeObject(relationshipTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateRelationshipTypeDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateRelationshipTypeDetail(Object objPostalCode)
        {
            // Update Data - logic - should be modified accordingly

            RelationshipTypeDetailsResult relationshipTypeDetailsResult = new RelationshipTypeDetailsResult
            {
                Status = "Success",
                Message = "Update Relationship type Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(relationshipTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateRelationshipType
        [Route("CreateRelationshipType")]
        [HttpPost]
        public HttpResponseMessage CreateRelationshipType(Object objPostalCode)
        {
            // Create Title - logic - should be modified accordingly   
            RelationshipTypeDetailsResult relationshipTypeDetailsResult = new RelationshipTypeDetailsResult
            {
                Status = "Success",
                Message = "Create Relationship Type",
                Data = null
            };

            string json = JsonConvert.SerializeObject(relationshipTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeRelationshipType()
        {
            lstRelationshipType.Add(new RelationshipType(1, "Child", true, true));
            lstRelationshipType.Add(new RelationshipType(2, "Friend", true, true));
            lstRelationshipType.Add(new RelationshipType(3, "Other Relative", true, true));
            lstRelationshipType.Add(new RelationshipType(4, "Parent", true, true));
            lstRelationshipType.Add(new RelationshipType(5, "Sibling", true, true));
            lstRelationshipType.Add(new RelationshipType(6, "Sibling1", true, true));
            lstRelationshipType.Add(new RelationshipType(7, "Sibling2", true, true));
            lstRelationshipType.Add(new RelationshipType(8, "Sibling3", true, true));
            lstRelationshipType.Add(new RelationshipType(9, "Sibling4", true, true));
            lstRelationshipType.Add(new RelationshipType(10, "Sibling5", true, true));
            lstRelationshipType.Add(new RelationshipType(11, "Sibling6", true, true));
            lstRelationshipType.Add(new RelationshipType(12, "Sibling7", true, true));
            lstRelationshipType.Add(new RelationshipType(13, "Sibling8", true, true));
        }

        public class RelationshipType
        {
            public RelationshipType()
            {

            }

            public RelationshipType(int id, string strName, bool solitary, bool isActive)
            {
                this.Id = id;
                this.Name = strName;
                this.Solitary = solitary;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public bool Solitary { get; set; }
            public bool IsActive { get; set; }

        }

        public class RelationshipTypeResult
        {
            public RelationshipTypeResult() { }
            public List<RelationshipType> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class RelationshipTypeDetailsResult
        {
            public RelationshipTypeDetailsResult() { }
            public string Status { get; set; }
            public RelationshipType Data { get; set; }
            public string Message { get; set; }
        }


        #endregion

        #region Item Mapping

        [Route("GetItemMappings")]
        [HttpPost]
        public HttpResponseMessage GetItemMappings(Object gridOptions)
        {
            string json = string.Empty;
            List<ItemMapping> pagedItemMapping = new List<ItemMapping>();

            InitializeItemMapping();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());


            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstItemMapping = lstItemMapping.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstItemMapping = lstItemMapping.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstItemMapping.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstItemMapping.Count > size)
                pagedItemMapping = lstItemMapping.GetRange(startIndex, size);
            else
                pagedItemMapping = lstItemMapping;


            ItemMappingResult itemMappingResult = new ItemMappingResult
            {
                Status = "Success",
                Message = "Get ItemMapping",
                GridData = pagedItemMapping,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(itemMappingResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetItemMappingDetail")]
        [HttpPost]
        public HttpResponseMessage GetItemMappingDetail(Object objItemMapping)
        {
            InitializeItemMapping(); //Initialize Data           

            ItemMapping itemMapping = lstItemMapping.Where(u => u.Id == Convert.ToInt32(objItemMapping)).FirstOrDefault();

            ItemMappingDetailsResult itemMappingDetailsResult = new ItemMappingDetailsResult
            {
                Status = "Success",
                Message = "Get Item Mapping",
                Data = itemMapping
            };

            string json = JsonConvert.SerializeObject(itemMappingDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateItemMappingDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateItemMappingDetail(Object objItemMapping)
        {
            // Update Data - logic - should be modified accordingly

            ItemMappingDetailsResult itemMappingDetailsResult = new ItemMappingDetailsResult
            {
                Status = "Success",
                Message = "Update Mapping Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(itemMappingDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateItemMapping
        [Route("CreateItemMappings")]
        [HttpPost]
        public HttpResponseMessage CreateItemMappings(Object objItemMapping)
        {
            // Create Item Mapping - logic - should be modified accordingly   
            ItemMappingDetailsResult itemMappingDetailsResult = new ItemMappingDetailsResult
            {
                Status = "Success",
                Message = "Create Item Mappings",
                Data = null
            };

            string json = JsonConvert.SerializeObject(itemMappingDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeItemMapping()
        {
            lstItemMapping.Add(new ItemMapping(1, "Locus", "DRB5", "DRB345"));
            lstItemMapping.Add(new ItemMapping(2, "Locus", "DRB4", "DRB345"));
            lstItemMapping.Add(new ItemMapping(3, "Locus", "DRB3", "DRB1"));
            lstItemMapping.Add(new ItemMapping(4, "Locus", "DRB2", "DRB1"));
            lstItemMapping.Add(new ItemMapping(5, "CollectedProductTypes", "HPC(A)", "PBSC"));
            lstItemMapping.Add(new ItemMapping(6, "CollectedProductTypes", "HPC(B)", "MAR"));
            lstItemMapping.Add(new ItemMapping(7, "CollectedProductTypes", "HPC(C)", "DLI"));
            lstItemMapping.Add(new ItemMapping(8, "CollectedProductTypes", "HPC(D)", "AT"));
            lstItemMapping.Add(new ItemMapping(9, "CollectedProductTypes", "HPC(E)", "AO"));
            lstItemMapping.Add(new ItemMapping(10, "UrgencyTypes", "URGENT", "UG"));
            lstItemMapping.Add(new ItemMapping(11, "UrgencyTypes", "Extremely Urgent", "STD"));
            lstItemMapping.Add(new ItemMapping(12, "UrgencyTypes", "C", "CBU"));
            lstItemMapping.Add(new ItemMapping(13, "UrgencyTypes", "D", "DNR"));

        }


        public class ItemMapping
        {
            public ItemMapping()
            {

            }

            public ItemMapping(int id, string strSourceEntity, string strMappedFrom, string strMappedTo)
            {
                this.Id = id;
                this.SourceEntity = strSourceEntity;
                this.MappedFrom = strMappedFrom;
                this.MappedTo = strMappedTo;
            }

            public int Id { get; set; }
            public string SourceEntity { get; set; }
            public string MappedFrom { get; set; }
            public string MappedTo { get; set; }
        }

        public class ItemMappingResult
        {
            public ItemMappingResult() { }
            public List<ItemMapping> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class ItemMappingDetailsResult
        {
            public ItemMappingDetailsResult() { }
            public string Status { get; set; }
            public ItemMapping Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Funding Type

        [Route("GetFundingTypes")]
        [HttpPost]
        public HttpResponseMessage GetFundingTypes(Object gridOptions)
        {
            string json = string.Empty;
            List<FundingType> pagedFundingType = new List<FundingType>();

            InitializeFundingType();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());


            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstFundingType = lstFundingType.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstFundingType = lstFundingType.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstFundingType.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstFundingType.Count > size)
                pagedFundingType = lstFundingType.GetRange(startIndex, size);
            else
                pagedFundingType = lstFundingType;


            FundingTypeResult fundingTypeResult = new FundingTypeResult
            {
                Status = "Success",
                Message = "Get Funding Type",
                GridData = pagedFundingType,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(fundingTypeResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetFundingTypeDetail")]
        [HttpPost]
        public HttpResponseMessage GetFundingTypeDetail(Object objFundingType)
        {
            InitializeFundingType(); //Initialize Data           

            FundingType fundingType = lstFundingType.Where(u => u.Id == Convert.ToInt32(objFundingType)).FirstOrDefault();

            FundingTypeDetailsResult fundingTypeDetailsResult = new FundingTypeDetailsResult
            {
                Status = "Success",
                Message = "Get Funding Type",
                Data = fundingType
            };

            string json = JsonConvert.SerializeObject(fundingTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateFundingTypeDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateFundingTypeDetail(Object objFundingType)
        {
            // Update Data - logic - should be modified accordingly

            FundingTypeDetailsResult fundingTypeDetailsResult = new FundingTypeDetailsResult
            {
                Status = "Success",
                Message = "Update Funding Type",
                Data = null
            };

            string json = JsonConvert.SerializeObject(fundingTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateFundingType
        [Route("CreateFundingType")]
        [HttpPost]
        public HttpResponseMessage CreateFundingType(Object objFundingType)
        {
            // Create Funding Type - logic - should be modified accordingly   
            FundingTypeDetailsResult fundingTypeDetailsResult = new FundingTypeDetailsResult
            {
                Status = "Success",
                Message = "Create Funding Type",
                Data = null
            };

            string json = JsonConvert.SerializeObject(fundingTypeDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeFundingType()
        {
            lstFundingType.Add(new FundingType(1, "CAFAT", "Ineligible Patient", "CAFAT", "No", true));
            lstFundingType.Add(new FundingType(2, "Eligible Patient", "DRB4", "DRB345", "No", true));
            lstFundingType.Add(new FundingType(3, "Self-Funded", "DRB3", "DRB1", "No", true));
            lstFundingType.Add(new FundingType(4, "Hospital Funded", "DRB2", "DRB1", "No", true));
            lstFundingType.Add(new FundingType(5, "AFSAA", "HPC(A)", "PBSC", "No", true));
            lstFundingType.Add(new FundingType(6, "TYGHR", "HPC(B)", "MAR", "Yes", true));
            lstFundingType.Add(new FundingType(7, "QQEQR", "HPC(C)", "DLI", "Unknown", true));
            lstFundingType.Add(new FundingType(8, "PUYRE", "HPC(D)", "AT", "No", true));
            lstFundingType.Add(new FundingType(9, "MBFTY", "HPC(E)", "AO", "No", true));
            lstFundingType.Add(new FundingType(10, "PPPU", "URGENT", "UG", "Yes", true));
            lstFundingType.Add(new FundingType(11, "ERTW", "Extremely Urgent", "ETD", "No", true));
            lstFundingType.Add(new FundingType(12, "SYHEW", "C", "CBU", "No", true));
            lstFundingType.Add(new FundingType(13, "IYRTG", "D", "DNR", "No", true));

        }


        public class FundingType
        {
            public FundingType()
            {

            }

            public FundingType(int id, string strName, string strNavisionCode, string strBillToCustomer, string strInternational, bool isActive)
            {
                this.Id = id;
                this.Name = strName;
                this.NavisionCode = strNavisionCode;
                this.BillToCustomer = strBillToCustomer;
                this.IsInternational = strInternational;
                this.IsActive = isActive;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public string NavisionCode { get; set; }
            public string BillToCustomer { get; set; }
            public string IsInternational { get; set; }
            public bool IsActive { get; set; }
        }

        public class FundingTypeResult
        {
            public FundingTypeResult() { }
            public List<FundingType> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class FundingTypeDetailsResult
        {
            public FundingTypeDetailsResult() { }
            public string Status { get; set; }
            public FundingType Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Operational Metric

        [Route("GetOperationalMetrics")]
        [HttpPost]
        public HttpResponseMessage GetOperationalMetrics(Object gridOptions)
        {
            string json = string.Empty;
            List<OperationalMetric> pagedOperationalMetric = new List<OperationalMetric>();

            InitializeOperationalMetrics();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());


            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstOperationalMetrics = lstOperationalMetrics.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstOperationalMetrics = lstOperationalMetrics.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstFundingType.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstFundingType.Count > size)
                pagedOperationalMetric = lstOperationalMetrics.GetRange(startIndex, size);
            else
                pagedOperationalMetric = lstOperationalMetrics;


            OperationalMetricResult operationalMetricResult = new OperationalMetricResult
            {
                Status = "Success",
                Message = "Get Operational Metrics",
                GridData = pagedOperationalMetric,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(operationalMetricResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetOperationalMetricsDetail")]
        [HttpPost]
        public HttpResponseMessage GetOperationalMetricsDetail(Object objOperationalMetric)
        {
            InitializeOperationalMetrics(); //Initialize Data           

            OperationalMetric operationalMetric = lstOperationalMetrics.Where(u => u.Id == Convert.ToInt32(objOperationalMetric)).FirstOrDefault();

            OperationalMetricDetailsResult operationalMetricDetailsResult = new OperationalMetricDetailsResult
            {
                Status = "Success",
                Message = "Get Operational Metrics",
                Data = operationalMetric
            };

            string json = JsonConvert.SerializeObject(operationalMetricDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateOperationalMetricsDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateOperationalMetricsDetail(Object objOperationalMetric)
        {
            // Update Data - logic - should be modified accordingly

            OperationalMetricDetailsResult operationalMetricDetailsResult = new OperationalMetricDetailsResult
            {
                Status = "Success",
                Message = "Update Operational Metrics",
                Data = null
            };

            string json = JsonConvert.SerializeObject(operationalMetricDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        public void InitializeOperationalMetrics()
        {
            lstOperationalMetrics.Add(new OperationalMetric(1, "Name1", "Description1"));
            lstOperationalMetrics.Add(new OperationalMetric(2, "Name2", "Description2"));
            lstOperationalMetrics.Add(new OperationalMetric(3, "Name3", "Description3"));
            lstOperationalMetrics.Add(new OperationalMetric(4, "Name4", "Description4"));
            lstOperationalMetrics.Add(new OperationalMetric(5, "Name5", "Description5"));
            lstOperationalMetrics.Add(new OperationalMetric(6, "Name6", "Description6"));
            lstOperationalMetrics.Add(new OperationalMetric(7, "Name7", "Description7"));
            lstOperationalMetrics.Add(new OperationalMetric(8, "Name8", "Description8"));
            lstOperationalMetrics.Add(new OperationalMetric(9, "Name9", "Description9"));
            lstOperationalMetrics.Add(new OperationalMetric(10, "Name10", "Description10"));
            lstOperationalMetrics.Add(new OperationalMetric(11, "Name11", "Description11"));
            lstOperationalMetrics.Add(new OperationalMetric(12, "Name12", "Description12"));
            lstOperationalMetrics.Add(new OperationalMetric(13, "Name13", "Description13"));
        }


        public class OperationalMetric
        {
            public OperationalMetric()
            {

            }

            public OperationalMetric(int id, string strName, string strDescription)
            {
                this.Id = id;
                this.Name = strName;
                this.Description = strDescription;
            }

            public int Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
        }

        public class OperationalMetricResult
        {
            public OperationalMetricResult() { }
            public List<OperationalMetric> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class OperationalMetricDetailsResult
        {
            public OperationalMetricDetailsResult() { }
            public string Status { get; set; }
            public OperationalMetric Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Configuration

        [Route("GetRefEntityConfiguration")]
        [HttpPost]
        public HttpResponseMessage GetRefEntityConfiguration(Object gridOptions)
        {
            string json = string.Empty;
            List<RefEntityConfiguration> pagedRefEntityConfiguration = new List<RefEntityConfiguration>();

            InitializeRefEntityConfiguration();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    lstRefEntityConfiguration = lstRefEntityConfiguration.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    lstRefEntityConfiguration = lstRefEntityConfiguration.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = lstRefEntityConfiguration.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (lstFundingType.Count > size)
                pagedRefEntityConfiguration = lstRefEntityConfiguration.GetRange(startIndex, size);
            else
                pagedRefEntityConfiguration = lstRefEntityConfiguration;


            RefEntityConfigurationResult configurationDetailsResult = new RefEntityConfigurationResult
            {
                Status = "Success",
                Message = "Get Configuration",
                GridData = pagedRefEntityConfiguration,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(configurationDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetRefEntityConfigurationDetail")]
        [HttpPost]
        public HttpResponseMessage GetRefEntityConfigurationDetail(Object objConfiguration)
        {
            InitializeRefEntityConfiguration(); //Initialize Data           

            RefEntityConfiguration configuration = lstRefEntityConfiguration.Where(u => u.Id == Convert.ToInt32(objConfiguration)).FirstOrDefault();

            RefEntityConfigurationDetailsResult configurationDetailsResult = new RefEntityConfigurationDetailsResult
            {
                Status = "Success",
                Message = "Get Configuration",
                Data = configuration
            };

            string json = JsonConvert.SerializeObject(configurationDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateRefEntityConfigurationDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateRefEntityConfigurationDetail(Object objConfiguration)
        {
            // Update Data - logic - should be modified accordingly

            RefEntityConfigurationDetailsResult configurationDetailsResult = new RefEntityConfigurationDetailsResult
            {
                Status = "Success",
                Message = "Update RefEntity Configuration Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(configurationDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        public void InitializeRefEntityConfiguration()
        {
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(1, "Name1", "Description1"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(2, "Name2", "Description2"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(3, "Name3", "Description3"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(4, "Name4", "Description4"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(5, "Name5", "Description5"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(6, "Name6", "Description6"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(7, "Name7", "Description7"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(8, "Name8", "Description8"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(9, "Name9", "Description9"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(10, "Name10", "Description10"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(11, "Name11", "Description11"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(12, "Name12", "Description12"));
            lstRefEntityConfiguration.Add(new RefEntityConfiguration(13, "Name13", "Description13"));
        }


        public class RefEntityConfiguration
        {
            public RefEntityConfiguration()
            {

            }

            public RefEntityConfiguration(int id, string strKey, string strValue)
            {
                this.Id = id;
                this.Key = strKey;
                this.Value = strValue;
            }

            public int Id { get; set; }
            public string Key { get; set; }
            public string Value { get; set; }
        }

        public class RefEntityConfigurationResult
        {
            public RefEntityConfigurationResult() { }
            public List<RefEntityConfiguration> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class RefEntityConfigurationDetailsResult
        {
            public RefEntityConfigurationDetailsResult() { }
            public string Status { get; set; }
            public RefEntityConfiguration Data { get; set; }
            public string Message { get; set; }
        }


        #endregion

        #region ReqNotifyConfiguration

        [Route("GetReqNotifyConfigurationDetail")]
        [HttpPost]
        public HttpResponseMessage GetReqNotifyConfigurationDetail()
        {
            InitializeReqNotifyConfiguration(); //Initialize Data           

            ReqNotifyConfigurationDetailsResult reqNotifyConfigurationDetailsResult = new ReqNotifyConfigurationDetailsResult
            {
                Status = "Success",
                Message = "Get ReqNotifyConfiguration",
                Data = reqNotifyConfiguration
            };

            string json = JsonConvert.SerializeObject(reqNotifyConfigurationDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateReqNotifyConfigurationDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateReqNotifyConfigurationDetail(Object objConfiguration)
        {
            // Update Data - logic - should be modified accordingly

            ReqNotifyConfigurationDetailsResult reqNotifyConfigurationDetailsResult = new ReqNotifyConfigurationDetailsResult
            {
                Status = "Success",
                Message = "Update RefEntity Configuration Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(reqNotifyConfigurationDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        public void InitializeReqNotifyConfiguration()
        {
            reqNotifyConfiguration = new ReqNotifyConfiguration(1, false, "Testdata - Req Notify for Patients To", "Testdata - Req Notify for PatientsCC", false, "Testdata - Req Notify for DonorsTo", "Testdata - Req Notify for DonorsCC");
        }


        public class ReqNotifyConfiguration
        {
            public ReqNotifyConfiguration()
            {

            }

            public ReqNotifyConfiguration(int id, bool patientsTrial, string strPatientsTo, string strPatientsCC, bool donorsTrial, string strDonorsTo, string strDonorsCC)
            {
                this.Id = id;
                this.PatientsTrial = patientsTrial;
                this.PatientsTo = strPatientsTo;
                this.PatientsCC = strPatientsCC;
                this.DonorsTrial = donorsTrial;
                this.DonorsTo = strDonorsTo;
                this.DonorsCC = strDonorsCC;
            }

            public int Id { get; set; }
            public bool PatientsTrial { get; set; }
            public string PatientsTo { get; set; }
            public string PatientsCC { get; set; }
            public bool DonorsTrial { get; set; }
            public string DonorsTo { get; set; }
            public string DonorsCC { get; set; }
        }


        public class ReqNotifyConfigurationDetailsResult
        {
            public ReqNotifyConfigurationDetailsResult() { }
            public string Status { get; set; }
            public ReqNotifyConfiguration Data { get; set; }
            public string Message { get; set; }
        }

        #endregion

        #region Nationalities

        [Route("GetNationalities")]
        [HttpPost]
        public HttpResponseMessage GetNationalities(Object gridOptions)
        {
            string json = string.Empty;
            List<Nationality> pagedNationality = new List<Nationality>();

            InitializeNationalities();
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<Nationality> filteredNationality = lstNationalities.Where(u => u.CountryName.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredNationality = filteredNationality.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredNationality = filteredNationality.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredNationality.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;

            if (filteredNationality.Count > size)
                pagedNationality = filteredNationality.GetRange(startIndex, size);
            else
                pagedNationality = filteredNationality;


            NationalityResult nationalityResult = new NationalityResult
            {
                Status = "Success",
                Message = "Get Nationality",
                GridData = pagedNationality,
                TotalItems = totalItem
            };

            json = JsonConvert.SerializeObject(nationalityResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("GetNationalityDetail")]
        [HttpPost]
        public HttpResponseMessage GetNationalityDetail(Object objNationality)
        {
            InitializeNationalities(); //Initialize Data           

            Nationality nationality = lstNationalities.Where(u => u.Id == Convert.ToInt32(objNationality)).FirstOrDefault();

            NationalityDetailsResult nationalityDetailsResult = new NationalityDetailsResult
            {
                Status = "Success",
                Message = "Get Titles",
                Data = nationality
            };

            string json = JsonConvert.SerializeObject(nationalityDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateNationalityDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateNationalityDetail(Object objPostalCode)
        {
            // Update Data - logic - should be modified accordingly

            NationalityDetailsResult nationalityDetailsResult = new NationalityDetailsResult
            {
                Status = "Success",
                Message = "Update Postal Code Details",
                Data = null
            };

            string json = JsonConvert.SerializeObject(nationalityDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        //CreateNationality
        [Route("CreateNationality")]
        [HttpPost]
        public HttpResponseMessage CreateNationality(Object objNationality)
        {
            // Create Title - logic - should be modified accordingly   
            NationalityDetailsResult nationalityDetailsResult = new NationalityDetailsResult
            {
                Status = "Success",
                Message = "Create Nationalities",
                Data = null
            };

            string json = JsonConvert.SerializeObject(nationalityDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }

        public void InitializeNationalities()
        {
            lstNationalities.Add(new Nationality(1, "Angola", "AD", 98, "Andorian", true));
            lstNationalities.Add(new Nationality(2, "United Arab Emirates", "AF", 22, "Emirian", true));
            lstNationalities.Add(new Nationality(3, "Afghanistan", "AI", 24, "Afghani", true));
            lstNationalities.Add(new Nationality(4, "Armenia", "AM", 54, "Angolian", true));
            lstNationalities.Add(new Nationality(5, "Antarctica", "AQ", 55, "Antarctic", true));
            lstNationalities.Add(new Nationality(6, "Argentina", "AR", 47, "Argentine", true));
            lstNationalities.Add(new Nationality(7, "Austria", "AUSA", 97, "Austrian", true));
            lstNationalities.Add(new Nationality(8, "Australia", "AU", 73, "Australian", true));
            lstNationalities.Add(new Nationality(9, "Aruba", "AR", 222, "Aruban", true));
            lstNationalities.Add(new Nationality(10, "Bangladesh", "BH", 2224, "bangaldeshian", true));
            lstNationalities.Add(new Nationality(11, "Barbados", "BRS", 264, "Barbadosian", true));
            lstNationalities.Add(new Nationality(12, "Belgium", "BR", 252, "Belgiumanese", true));
            lstNationalities.Add(new Nationality(13, "Bahrain", "BNR", 47, "Bahrainan", true));
            lstNationalities.Add(new Nationality(14, "Bermuda", "BR", 22, "bermudan", true));
            lstNationalities.Add(new Nationality(15, "Bolivia", "BN", 35, "Bolivian", true));
            lstNationalities.Add(new Nationality(16, "China", "CH", 24, "Chinese", true));
            lstNationalities.Add(new Nationality(17, "India", "IN", 1, "Indian", true));
        }


        public class Nationality
        {
            public Nationality()
            {

            }

            public Nationality(int id, string strCountryName, string strCountryCode, int isoCode, string strNationalityValue, bool isActive)
            {
                this.Id = id;
                this.CountryName = strCountryName;
                this.CountryCode = strCountryCode;
                this.ISOCode = isoCode;
                this.NationalityValue = strNationalityValue;
                this.IsActive = isActive;

            }

            public int Id { get; set; }
            public string CountryCode { get; set; }
            public string CountryName { get; set; }
            public int ISOCode { get; set; }
            public string NationalityValue { get; set; }
            public bool IsActive { get; set; }
        }

        public class NationalityResult
        {
            public NationalityResult() { }
            public List<Nationality> GridData { get; set; }

            public string Status { get; set; }

            public string Message { get; set; }

            public int TotalItems { get; set; }
        }

        public class NationalityDetailsResult
        {
            public NationalityDetailsResult() { }
            public string Status { get; set; }
            public Nationality Data { get; set; }
            public string Message { get; set; }
        }

        #endregion


    }
}