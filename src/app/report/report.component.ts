import { Component, OnInit,AfterViewInit,ViewChild,ElementRef,Input } from '@angular/core';
//import { ReactiveFormsModule ,FormGroup, FormControl, FormBuilder, Validators, AbstractControl,FormsModule } from "@angular/forms";

import { GetreportService } from '../getreport.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import  templateData  from './templateData';

declare var $:any;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

@Input() reportData:Observable<any>;
@ViewChild('reportMenu li a') el:ElementRef;


editMode : boolean = false;
DashboardConfig : any;
Report : any;
ReportType : any;
dashboardId : string = "";
reportId : string = "";
reportTemplate:any = {};
public dtJQ:Date = new Date(2016, 10, 1);
granularityAll : ['Minute', 'Hour', 'Day', 'All'];
graphReports: Array<any> = [];
barGraphReport:any;showBar:boolean=false;
LineGraphReport:any;showLine:boolean=false;
gaugeGraphReports: any;showGauge:boolean=false;
multilineGraphReports :any;showMultiLine:boolean=false;
showTable : boolean = false;

pieGraphReports: Array<any> = [];


multibarGraphReports:Array<any> = [];
public profileType:String;


filterReport = {
  granularityAll : ['minute', 'hour', 'day', 'all'],
  granularitySelected :"",
  fromDate: "",
  toDate :"",
};

filterJson ={
    userId : "admin1",
    dashboardId : "dashboard1",
    templateId: "101",
    jsonString: {
          granularity : this.filterReport.granularitySelected,
          intervals: this.filterReport.fromDate+"/"+this.filterReport.toDate
    }
};



constructor(private route: ActivatedRoute, private router : Router, private getreportService : GetreportService,  private localStorageService: LocalStorageService){
  // console.log("Report");
  this.editMode= false;
  // console.log(this.route.snapshot.params['id']);
  //this.profileType = this.route.snapshot.params['id'];
//  this.localStorageService.set('myKey', templateData);
}

getRoutes()
      {
        this.editMode= false;
      this.route.params.subscribe(params => {
        console.log("==========");
        console.log("Kushal :) url here " +  this.router.url);
        let res = this.router.url.split('/');
        this.dashboardId = this.router.url;
        this.reportId = this.router.url;
        this.editMode=false;
        this.showLine = false;
        this.showBar = false;
        this.showMultiLine = false;
        this.showGauge = false;
        this.showTable = false;
        console.log(res);
        // console.log(this.route);
        // console.log(this.route.params);
        if(res)
        {
        if (res.length>2)
        {
        this.dashboardId = res[2];
        this.reportId = res[4];
      }
    }
       console.log(this.dashboardId);
       console.log(this.reportId)
        this.getReportData(this.dashboardId, this.reportId);
  // this.getTemplateConfig()
    });
    }





  getReportData(dashboardId, reportId)
    {
      this.getreportService.getSpecificTemplateData(dashboardId, reportId).subscribe(data => {
      console.log(" report data ");
      console.log(data);
      this.reportTemplate = data;
      let graphReports = this.reportTemplate.dashboardReports[0].graphReports;
      let tableReports = this.reportTemplate.dashboardReports[0].tableReports;
      this.fillTemplateData(graphReports,tableReports);
      console.log(graphReports);
      console.log(" check bar data " );
      console.log("showBar"+this.showBar);
      console.log("showLine"+this.showLine);
      console.log("showMultiLine"+this.showMultiLine);
      console.log("showGauge"+this.showGauge);
      console.log("showTable"+this.showTable);
    });
  }


  fillTemplateData(graphReports,tableReports){

          if(graphReports){
          if(graphReports[0].graphResponse.configuration.graphtype == "bar"){
                this.Report = graphReports.filter(element => {
                              this.showBar = true;
                              return element.graphResponse.configuration.graphtype == "bar";
                            });
          }
          if(graphReports[0].graphResponse.configuration.graphtype == "pie"){
                this.Report = graphReports.filter(element => {
                              this.showBar = true;
                              return element.graphResponse.configuration.graphtype == "pie";
                            });
          }

          if(graphReports[0].graphResponse.configuration.graphtype == "line"){
                this.Report = graphReports.filter(element => {
                              this.showLine = true;
                              return element.graphResponse.configuration.graphtype == "line";
                            });
          }

          if(graphReports[0].graphResponse.configuration.graphtype == "multi-line"){
                this.Report = graphReports.filter(element => {
                              this.showMultiLine = true;
                              return element.graphResponse.configuration.graphtype == "multi-line";
                            });
          }
          if(graphReports[0].graphResponse.configuration.graphtype == "gauge"){
                this.Report = graphReports.filter(element => {
                              this.showGauge = true;
                              return element.graphResponse.configuration.graphtype == "gauge";
                            });
          }

          if(graphReports[0].graphResponse.configuration.graphtype == "multi-bar"){
                this.Report = graphReports.filter(element => {
                              this.showBar = true;
                              return element.graphResponse.configuration.graphtype == "multi-bar";
                            });
          }
      }
          if(tableReports){
            if(tableReports[0].tableResponse.configuration.type == "TABLE"){
              this.showTable = true;
                this.Report = tableReports[0];
              }
         }
    }


  sendfilterData(){
          this.filterJson ={
              userId : "admin1",
              dashboardId : this.dashboardId,
              templateId:this.reportId,
              jsonString: {
                    granularity : this.filterReport.granularitySelected,
                    intervals: this.filterReport.fromDate+"/"+this.filterReport.toDate
              }
          };
          console.log("this.filterJson Data");
          console.log(this.filterJson);
          this.getreportService.sendFilterReportData(this.filterJson).subscribe(data => {
          console.log("filtered report data ");
          this.reportTemplate = data;
          console.log(this.reportTemplate);
          let graphReports = this.reportTemplate.dashboardReports[0].graphReports;
          let tableReports = this.reportTemplate.dashboardReports[0].tableReports;
          this.fillTemplateData(graphReports,tableReports);
          console.log("Refreshed Graph Data");
          //  console.log(this.barGraphReports);
          console.log(this.Report);
        });
    }


  makeFilteredReport(){
      console.log("Filtered Data");
      console.log(this.filterReport);
      console.log(this.filterReport.fromDate);
      console.log(this.filterReport.fromDate.toString);
      console.log(this.filterReport.fromDate);
      this.filterJson ={
          userId : "admin1",
          dashboardId : this.dashboardId,
          templateId: this.reportId,
          jsonString: {
                granularity : this.filterReport.granularitySelected,
                intervals: this.filterReport.fromDate+"/"+this.filterReport.toDate
          }
      };
      console.log("Inside makeFilteredReport  () ");
      this.sendfilterData();
  }

getTemplateConfig(){
      this.editMode=true;
      let request = {
        templateId:this.reportId,
        dashboardId:this.dashboardId
      }
      if(this.dashboardId != null)
      {
        request.dashboardId = this.dashboardId;
      }
      this.getreportService.getTemplateConfigData(request).subscribe(data => {
      console.log("this.response for zone aware promise -- ");
      this.reportTemplate = data;
      this.editMode=true;
      });
  }

ngOnInit() {
      this.editMode=false;
      this.showLine = false;
      this.showBar = false;
      this.showMultiLine = false;
      this.showGauge = false;
      this.showTable=false;
      this.getRoutes();
        //this.parseReportData();
      }

public  ngAfterViewInit() {
     $(".reportMenu li a").click(function () {
         var tablink = $(this).attr('href');
         $(".tabHolder").fadeOut();
         $(tablink).fadeIn();
         $(this).parents(".reportMenu").find('li').removeClass("active");
         $(this).parents(".reportMenu li").addClass("active");
         return false;
     });
     $("#closeFilter").click(function(){
        $(this).parents(".reportMenu").find('li').removeClass("active");
        $(".tabHolder").fadeOut();
     });

    //  $( "#fromdate" ).datepicker({ dateFormat: 'yy-mm-dd'});
    //  $( "#todate" ).datepicker({ dateFormat: 'yy-mm-dd'});
}
}
