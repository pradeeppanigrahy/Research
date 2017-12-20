import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  showReport() {
    
    //Make service call to get below info
      // Report's Secured Token
      let accessToken = 'H4sIAAAAAAAEADWVx6rFCnJF_-VNZVBOhh4oHuWcZ8o5Zxn_u68bmpruQdWCWvt__rHSd5jT4p___kfrbYldHXsM5_BYaJrxQjaQQtmEq-p5Z0QB1rp6--BK5PTHp73Syyzbz3MWk8REHOsC-TZIWeZ5RXf_ozhAD18z3DUf16Dk15ZPVaHUZXNSFeDsMiTSAN6-Gtz9eVeKEFEInE6i-SR_8-Wnnp8QE-7ATzhA5KzGpEQMLs_pFVoiaYaDHQxFaTTxUt4QwkhSBMnpyHblq0YCpsOEAa36BYdWfigKdBXcOybUWBBiHVnBD_R6eDQ4vvrGI2qN5ctFHe-lD4k8MwofUupa6PZSI6MNzUCQ6BnQhJVFewUIkeEkCklvhbxdv1rVzfP924niQfF6imRugLkYU3tFd7UHWPu-lTmjpovgGiifw2U9jfep0hQeo4EdxCFTVKY-AIqApMKGpyu2zA2CM0fJr5Gr-sGdIHd9m_8aScHQHsGLXL5r77OXrtDbwLubCgWHCXE1--dkN4KyH25pRMRcZjBHiLtDcmkNeQljX_izSP_kwzH0g2GpbzIlgNXna1TQ6ECYl4w5tqf_DVcn7_2legWs-a4b_a1M2O4Z_ZgAuqbMn-ctWSmWUc2jKd3METYK_VkFl5hp5oNapfd9GfgS6T8WoxJKs-fFaJbU8vSlAdOZotresUbtTRelJnUVTKR5K8IrTa49HFINFBLe55bMKA8qHlF-L-7Iu3owb9jDJ_203Ii3x8oW2Ryt3nIHrlgCTftjJEU_RFlLThG-hVoUraZQBSSoKdamqT4e-LLPdwrB5zDbfKWCKBHs31vr_sXJYFAOCWa6CCD56Dto0qQqcfcyMclwph1l3KMCC0U_18Ij2HSNVI-SJ1nlSUM8gI5hEi0W5HV2jnMhj015yfeF8mGOZ_9j9SRIuyiVm9MP54RoXl58Uois9t0UBD16vqVj4SNLOTswzLquOFZ-ArtRKv-1sKRuCKRJXX7xbSeB9W48tOd8siPsOa-LQ_p1q5cBLIXfcfOTKkA277E4U4cskviHYP6U3V9b2b-fceoihHTBNlJB8x1bRbgoL4GgnrFyMO7LJXCvARz2HTA3htRAjkjMUCiZopCWTvzsQVfMpptqPRZzQz3lTDh1yUEHxxkECAayw3-ZkbLvXGspcfaO5go85yB6DlD2i6Bu0WdEEECoWoDeeMmNtSoPq79J1TnCUMk6pj-cNGmQiaVEPWs3yFXl33KJ3XANvOZjETcEX0EYAWH2rzwaApqpDM3LCevdXh3k8aJ8SLp_BqJxVsCDJF6WonYsqn7_nqu9ZBkH2Vn43m8eqJkDovcr2No8jfSKw4loeONc7A-tUksYxXkhNt8Oa2pMx74XVLtTjWLCjYDRH4kXvIL41ChuK6KwNXzHDK_gWdd34WDhmpLii2sAKgWa8hC7itaMWnvfkG8nY2m1Q0m6EximJlxnMt_3ckBycdklsaZ3dGBCwJAbQbwWFjVFzqNopNXBkvs1SmgrcwyqGmHCcuII1ToeVNJK1JfLNogY8u3RGPwVu7pSolH0Zx3x5ga-8yK5_NZ1WvV1kaZt4uzC7sanHds4MspjxfvncBEYRK_FYAUKiFLaGgnErPNDVFQY9yFGbef446OkaEIWfpUztT0Ax1dEuZEUaiatc4EcoH3zfRsn83zBKT202cUKg6bks-FFXCwkSeQpHSupP4YoNQqMbBrL_vMVAHWDh5uUSD_8ebRui6jFjYzrryRWHBRW5eLUXmiBdzVqN0O4cP50n6FXHcr4Y2fkDT80Ucn8sgrl9Kv47FnKQIFYxHa1PpTsHldcrcR2RVTzw7mdOnE7GsZZ7dBwCnPBsABtJU9LyBcU7OeLQgvTNwZZMU10njBgsMXSkCAJXBAo1qccZAy5NAfasI4uVF9w9xDHburxVdAlL_6Fg3LIoavR9LEggJt7NqDoYs9V1g3lKAfL6KkwIrVGnwsvaZBrocy1CYzEkvGUcnHbWPxyth1OLgrWiJWgq5JS4O587_gGWGGn00uMxtWpJXbJp9YY9BZKe5vGYTgC-0T12yoUWEjRGU1xqRkvrJryw5OekXjS0zP_6CBGuPMR_vXPf_3Dbe9yzGr5_lU_f-ZsZuLkQbVRyUU_vjuDQtu1uI1zMATYBl1B15FtitYeyLLd1xTrHxON89hMn2udfq9wcRCH2Wxp0V-fdNnVtaMD4w3TN3LxIk9hjvpmnaaZ-CauXHiuBjNBfAfkXNP23FJlltdX48FoBJC6jwVShy4F3MYU3Nurv3IqKIy_kYQeem4zKzjYEaC3Rsu05SxNbF2YdoN4XscqP5sCOaIy6Ly-ue1u5R_x3R-0x9iABMLLPWUUuUcOUVSR6BEGe0AT85vcVhK6ytYNVIJBKVv8JxKT9Dt-JLXZfY1DIpramginPj51eFwExYtKoY9sYLNbbPPXyZ1IjSv2IUYazWbP6Zl__RvzuzTlJgd_lBvF-I4dHQwrMEekGuol-U_KbespPc6t_ItJtRfMf2_NsM5gdpOF_sqGLoJ3EWY3xLhlIIHk2p9dsUeve2sGzzADgSWN-w0qWhbFQREA_ndxSg85Xgy6m3Os6TdtMpyAi_DeuVpwF-zH1pcVMcEkLtJKlurgBY7luJutkfLTeJkJSLwlo4EafkvF_A1Lsf85_XuXFkYeIn0pbTgSHPM4MYK5l75r9gmOO9KSw0lUsoUj6s_L3jLcSPUuelTC-jqgwKg2faMwLZN41dggFm1sOl3I2unQXnihYoFkhRqxPjHspTdXZP4qdTuZXqpVvvTeBvxgrZl2qRF5cM0pleYI_Nj5NYZ8PPxCRrE7PAtVk8iQjr0a321YWF-p4P9j_t__AwkLDEbuCgAA';
    
      // Embed URL
      let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=329bc474-93b6-4e67-8473-5d89506fa825&groupId=5364bc97-2b4e-427d-98b0-76c71d3832e9';
  
      // Report ID
      let embedReportId = '329bc474-93b6-4e67-8473-5d89506fa825';
  
     
      let config = {
          type: 'report',
          tokenType: pbi.models.TokenType.Embed,
          accessToken: accessToken,
          embedUrl: embedUrl,
          id: embedReportId,
          permissions: pbi.models.Permissions.All,
          settings: {
              filterPaneEnabled: true,
              navContentPaneEnabled: true,
              localeSettings: {
                language: 'en',
                formatLocale: 'es'
              }
          }
      };
      
      // Grab the reference to the div HTML element that will host the report.
      let reportContainer = <HTMLElement>document.getElementById('reportContainer');
  
      // Embed the report and display it within the div container.
      let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
      let report = powerbi.embed(reportContainer, config);
  
      // Report.off removes a given event handler if it exists.
      report.off("loaded");
  
      // Report.on will add an event handler which prints to Log window.
      report.on("loaded", function() {
          console.log("Loaded");
      });
  }
}
