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
      let accessToken = 'H4sIAAAAAAAEAB2WtQ70hhaE3-VvHWnNECmFmZndmWHNbEf33e8q_RRH34xmzr9_rPTpp7T48_cfkaUZlxFsXTc5AqNfUl2_fNIlFSxAHdbV_Ok82eBepclMxtlR64zq0EM9I8mB_eaiaM5prla_fBjTT2lESpYctrb0xoPPQILNCBLALLjZ8RhetWVooW15n0N9malbr3qnydGTOADP_Nds4G7Fbezt6UVS2Zd3wYsnMWOhnGGpCLzaD7qeKrMvnWECvqH8JWlrCdqt9piq6YbeHFuVoVfeeD4k57t-TzviG64sZFZ6yYM-Vw5jBAgPKvEjgacbPzCgFvha52ZNjDpRVMwpYoaR3MK79EKC2ZTi2cawfGQpXgMVbydh2HmhRFbTcF5EksFF7i4SS2Hg9IhHFJTIxGPltRUtqdKKWU4rUn9I3u5l92bb6jRfeEWaTuuexwOSVRI7_1J2y4BWoawx6tYsIBaBSIqIPaOnTAvurHahqN2_BX2fraz3ZKzX3ZRzDMkUVVqZVf345kfWeV-vXQ511unWc2-B_UFxug_TXJ5t2rwBVWEzDoN-rbQs8EzZlgkdfKG3gCEUsLCp0ySI676g6LmqzSU3zTrIVzHIHEYVb-bcXvpoggFrsQppgKACCOQ7DmDmPsBfk-YTm6siLNHfyboKV3WUz3xipVUafW-rBoX0NBB9XoWX1Z0jUm7qY9imexVBS5_AwEPRwoQl9TjFFku5ZREBzbXKtTQKmrvWpBaHswpPEyCdXm-IbamrL2sj7sI8QAhY7Q4PphWAJTmEWiKZvVP4bJox047WbihNqA6_ZhUtNJKtdTenpcBsyET6QmlMubY2iB58Yld4RrdflgcQIqiflKsIUF9dmvk0D7tbt-w6OJT2A5FIGOlifW85Adf6IO74gBvANwBBBq_G5BkHfLYR0QcY72H5hc2Fpury9FkFLWcYFjpYxUMxKzYX_RkAPs_mTeDwAgQMUiFf7l68-pBHaPeffrg-434wlg8O1swyKRPoXzFCB5Zd4-D2u2_K6gee_aKctHB-ZmmCTPUFD1DdVBnFvp0PtOytjFfbGIVrKH4UBOuctelRDJVf4S9BLROW6LdTzIMZwCsgPt4SKdiy7GSxMN-rgw0aSG_YUmSrGNDxgoNZ81Yavtg5tofeK_wFhEixsLqmJ80iSZLlEbHrDAb9BtjJPlyxcHh2EhJpJ484QmaAYK5AIOU5485XTHsAhK7s6Wt5mTYe4UvU_xjQeGu58pVyG5D3lJc79TNeGXqoVJ2RTC8Dvbw236e_hnnkO6kLuq1MvAMsP7J9_8ALsCxvLdqLZO74gx_ZM-eZjJrKMvQu5gJqPDEyqw22WyXdH2uj9OROJCrA1wvOokzgRzze6hLcfMcHYDib4bz4tdF6mKgU9GO8jydiWKBAvWS6kXGM5sWkxORro41d0J9iwbJqt576-VJ5COzDo3FJq67MYHNVPfcl8d4dAkd25YyHrDmm5akBFO-igeOt5zXd4QWXUUmpG8m0p6ECBUf8c6rKp_AwwGe-G9mnlDlUr88ebqzQAFAzjEZUGRkhutLIKzKBJT9VO992VCl-bladn4lgOhtPqXbUNOkEwmRRp7uRkP5wvBMOl28Ep0LAHwAUGsKxnbBTdVQr0GMQmCOurnas5ZC6tfSo-JhC2EjZbdeiOUEv-BjiEB-_e8ARVXTiMWe9l4VW6c85R_Eb2PmqC0_YYn5-JYn288jUy8ZyNGEPMCmo4FsGOxlEDeFttQNZFRAgzRaEXIb2sQKbBEElH7gRjgHZqPfLFoa5HUvf71E2rKwDKNNWKm2rGmZJ459KaMtKD1WKDV0aXfRv6wf7I6XkHebpLRvzsAc6eP86CjCU2XC4Ta19e6DtLgF-GdoOwNL5dZFOXGThwUf3zRjFhanDRZYglrBm690jAShcDZ-w_nIPbcyLPpL5bIQ4eSSK0MHvTVyrh2ETzRWbVqDE3-mLOPpBZg_-5OazFmb-Hg-ai0pmqmPEr6zkEgYXiXF7EiEpvOn0C-Oh5stZDI9EBf79vjjXhs81fu_SUM3IW3ceUz6zoX1KzY6TD8UO0njWmDXu2Pph-p9BY0wt9jg4k2xG8_efP3_9Yddn3ie1fH7TvzyfXGUcXD900k1_LU6pQMlWv_DclEecV8WHEsj1sw5bv1AWefuBi8pXBwKqL1Vsv04D8wEp62v59tIURxxJGPOP8TKpnwdLxMxaG-ebGmiq4AKI2BlsV-RHaMSds1wXLSR8wyF5E-YmdzABmumPzmnM1SWS6RovcX9dEpYdHnfKFY5PMAvgoCNoDHnViuV-v4USgKUewOiLR-uH_qrmhO-O412gc8pvBi-mVwXjTKpMXG4q4XPD5uuIbDjF87NjwCsCqzIrcxCjP0_UjkX4zRJ9rLIODeW-hnaY6MBe7m9GRt_t8oKxrI7UZ7-RKykyWBKxHV3x4Oh1AidhANRpdn7B65__MD9zU65y8KOMyt5nB3dYAYSr60bShi5Xpf9TuW09pvuxlj_ZBk7UCW6rnetxcoAz0vh90bCkxBoZGtQRQceaOjEtq50ZxRMwdVa-YIxOPAsknirTZQenm7c4tGpDuXk6GLvXzIRrEcWFXoQheNpIdx7afpobQb31hfAO7D_npu5P0IwzMS8J0YyrilblrguhalQpkeu0e8vL8DHZ7rfTgV-uuVd5x9FOuX6aFImrPhJaOx1FtXq0a4oEfazwsXTlHjaUdUXLpr66kZk6SfoaLXXFKShnddvohnzH1zgf2cArlLqFvO2aifOONp8jz8D2gXAZC-CC4FHp5ike3mbefMwl0GM2mz40CksDoTTA1hauKCU8NkPAB9akOZmgLliWK8_tsv3D_L__A0_JJK7uCgAA';
    
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
