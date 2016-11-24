import { Component, OnInit ,AfterViewInit, EventEmitter,Input} from '@angular/core';

import { GetreportService } from '../getreport.service';
import template from './mockDefaultTemplate';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { NewReportModel } from './newreport.model';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';
import { MenuServiceService } from '../menu-service.service';
var $:any;


@Component({
  selector: 'app-newreport',
  templateUrl: './newreport.component.html',
  styleUrls: ['./newreport.component.css'],
  providers: [GetreportService ,FormBuilder,NewReportModel, MenuServiceService]
})


export class NewreportComponent implements OnInit ,AfterViewInit {
@Input() editReportData: any;
@Input() isEditTemplate:boolean =false;

//@Output() myEvent : EventEmitter = new EventEmitter();
multilineGraph :any;
pieGraph:any;
lineGraph:any;
barGraph:any;
guageGraph:any;
columnChart:any;
repid : string;
editMode:boolean= false;

showMultiSelectHtmlTag: boolean = true;
showThresholdSelectHtmlTag : boolean =false;
showPropertiesHtmlTag : boolean = true;

showMultiSelectAggrHtmlTag : boolean = false;
showGraphTypeHtmltag :  boolean = true;
showDashboard :boolean = false;
reportNameArray : any;
newReportForm: FormGroup;
public newReportModel: NewReportModel = new NewReportModel();
defualtReportTemplate :any;
public propertiesCtrl: FormControl;
public reportTypeCtrl :FormControl;
public propertyclass : string ="selectpicker mulitselect";
dimensions :Array<String>=["ip","part","maxspeed","duplex","source","parttype","deviceid","devtype","unit","btcusid","location","btcusna",
"metricname" , "btsitid"];

  constructor(  formBuilder: FormBuilder ,private getreportService : GetreportService ,private reportModel :NewReportModel, private menuService : MenuServiceService,private router : Router ,private localstorageService:LocalStorageService) {

   this.reportNameArray=MenuServiceService.reportNameList;

   console.log("this.reportNameArray  MenuServiceService");
   console.log(this.reportNameArray);
    this.newReportModel =reportModel;
    this.reportTypeCtrl = formBuilder.control('alphaValue');
    this.newReportForm = formBuilder.group({
    "ReportTitle":"",
    "ReportType": "Graph",
    "graphType":"Line",
    "properties":["ip"],
    "granularity":["All"],
    "filterExpression":"",
    "aggregation":["doubleSum"],
    "metric":["Availability"],
    "filterfield":"",
    "FilterFieldValue":"",
    "fromDate":"",
    "toDate":"",
    "threshold":"10"




      });



     }
     ngAfterViewInit(){
       console.log(" inside new report component template");

       this.reportNameArray=this.localstorageService.get('reportArray');

       console.log("this.reportNameArray constructor");
       console.log(this.reportNameArray);



      this.newReportForm.controls['ReportType'].valueChanges.subscribe(
         (form: any) => {
           if(!this.editMode){
           console.log('form changed to:', form);
          if( this.newReportForm.controls["ReportType"].value == "TopN" )
          {
              this.setTopNFormParams();
          }
          else if( this.newReportForm.controls["ReportType"].value == "Table")
          {
             this.showGraphTypeHtmltag = false;
             this.showMultiSelectHtmlTag=true;
             this.showMultiSelectAggrHtmlTag = true;
             this.showPropertiesHtmlTag = true;

          }
        else{this.setDefaultFormParams();}
        }
        });



       this.newReportForm.controls['graphType'].valueChanges.subscribe(
          (form: any) => {

            if(!this.editMode){

            console.log('form changed to:', form);
         if( this.newReportForm.controls["ReportType"].value == "Graph" &&  this.newReportForm.controls["graphType"].value == "Pie")
           {
               this.setTopNFormParams();
               this.showThresholdSelectHtmlTag = false;

                this.showGraphTypeHtmltag =true;
              this.newReportModel.graphTypes=["Line","Bar","Pie","Gauge"];
              this.showMultiSelectAggrHtmlTag=false;


           }
           else if( this.newReportForm.controls["ReportType"].value == "Graph" &&  this.newReportForm.controls["graphType"].value == "Gauge")
                {

                    this.showPropertiesHtmlTag = false;

                    this.showGraphTypeHtmltag =true;
                    this.showMultiSelectAggrHtmlTag=false;
                    this.newReportModel.granularities=["All"];

           }
           else if( this.newReportForm.controls["ReportType"].value == "TopN")
           {
              this.setTopNFormParams();
              this.showThresholdSelectHtmlTag = true;
           }
         else{
               this.setDefaultFormParams();
           }
            }
         });

     }

submitted = false;
onSubmit() { this.submitted = true;
console.log("Submittted form");
}

  ngOnInit() {


    //this.getDefaultReportTemplate();
    console.log("NISARG @Input => this.editReportData ");
    console.log(this.editReportData);
    console.log('route navigation testing here');
    this.router.events.subscribe((e) => {
      console.log("report path");
           console.log(e);
       });
  }

  getDefaultReportTemplate()
  {
    this.getreportService.getDefaultReportTemplate().subscribe(data => {
    console.log(" Default Report Template  data " + data);
    this.defualtReportTemplate = data;
  });

  this.defualtReportTemplate =template;
  }

  public saveNewReportTemplate(event)
  {

let ReportId:any;
let dashboardId="admin1-dashboard3";
    this.showDashboard=true;
        console.log("  inside saveReportTemplate  ");
    let properties =this.newReportForm.controls["properties"].value;
    let dimension: any = "";
    let dimensionlist : Array<any> = [];
    let attributes:Array<any>=[];
    let fromDate = this.newReportForm.controls["fromDate"].value;
    let toDate = this.newReportForm.controls["toDate"].value;
let graphtype:any;
    if(this.newReportForm.controls["graphType"].value =="Bar")
    {graphtype="bar";

  }else if(this.newReportForm.controls["graphType"].value =="Line")
    {
      graphtype="line";
    }
let defualtReportTemplate :any = {
"userId": "admin1",
"reportName" : this.newReportForm.controls["ReportTitle"].value,
"dashboardId": "admin1-dashboard3",
"templateId": "101",
"type":"reports",
"reportType": this.newReportForm.controls["ReportType"].value,
      "jsonString":{

    "configuration":
     { "name" : this.newReportForm.controls["ReportTitle"].value,
       "type" : this.newReportForm.controls["ReportType"].value,

       "graphtype":graphtype
    },
 "dimensions":"",

     "intervals": fromDate+'/'+toDate,
  //   {
  //     "displayName":this.newReportForm.controls["properties"].value,
  //    "name":this.newReportForm.controls["properties"].value
  // },
  "filterExpression":"metricname==" + this.newReportForm.controls["metric"].value,
  "granularity":this.newReportForm.controls["granularity"].value,

  	"dataSourceName" : "telemetry",
  "metrics":{
    "aggregationType" :this.newReportForm.controls["aggregation"].value,
		"fieldName" : "metricvalue",
		"name" : this.newReportForm.controls["metric"].value
  }

}
  };


console.log("check here");

  // if(this.newReportForm.controls["ReportType"].value != "TopN" &&   properties.length > 1  )
  // {

  //   for (var j = 0; j < properties.length; j++) {
  //     let dimension ={
  //        "displayName": properties[j],
  //        "name": properties[j]
  //
  //   }
  //   dimensionlist.push(dimension);
  //   attributes.push(dimension);
  // }

  // defualtReportTemplate.jsonString.dimensions=dimensionlist;
 // }
// else{

    defualtReportTemplate.jsonString.dimensions = {
      "displayName":this.newReportForm.controls["properties"].value,
   "name":this.newReportForm.controls["properties"].value
  // "displayName": "ip",
  //      "name": "ip"
}
attributes.push(defualtReportTemplate.jsonString.dimensions);

// }


  if(this.newReportForm.controls["ReportType"].value == "TopN" )
  {
    console.log("threshold"+this.newReportForm.controls["threshold"].value);
    defualtReportTemplate.jsonString.threshold = this.newReportForm.controls["threshold"].value;
    defualtReportTemplate.reportType="Graph";
    defualtReportTemplate.templateId="101";

  }
  else if(this.newReportForm.controls["ReportType"].value == "Graph" )
  {

    defualtReportTemplate.reportType="Graph";
    if(this.newReportForm.controls["graphType"].value == 'Pie')
    {
    defualtReportTemplate.templateId="106";
    }
  else  if(this.newReportForm.controls["graphType"].value == 'Gauge')
    {
    defualtReportTemplate.templateId="105";
    }
    else{
        defualtReportTemplate.templateId="109";
          defualtReportTemplate.threshold = "10";
    }

  }

  if(this.newReportForm.controls["metric"].value)
  {
let metric = {
  "displayName" : this.newReportForm.controls["metric"].value,
  "name" : this.newReportForm.controls["metric"].value

}
attributes.push(metric);
}

defualtReportTemplate.jsonString.configuration.attributes=attributes;
  console.log(" attributes "+attributes);

console.log("Kushal");

  console.log(defualtReportTemplate);
if(this.isEditTemplate){

    this.getreportService.updateReportTemplate(defualtReportTemplate).subscribe(data => {
     console.log(" Default Report Template  data " + data);
     this.defualtReportTemplate = data;
     ReportId=data.dashboardReports[0].graphReports[0].graphResponse.configuration.id;
     this.repid = data.dashboardReports[0].graphReports[0].graphResponse.configuration.id;
//this.showDashboard=true;

     if( this.newReportForm.controls["graphType"].value == "line" )
     {
       if(  this.newReportForm.controls["granularity"].value == "All")
     {
       this.lineGraph=data.dashboardReports[0].graphReports[0];
     }
     else{
      this.multilineGraph=data.dashboardReports[0].graphReports[0];
     }
  }
   else  if( this.newReportForm.controls["graphType"].value == "bar")
       {
            this.barGraph=data.dashboardReports[0].graphReports[0];
       }
    else  if( this.newReportForm.controls["graphType"].value == "pie")
         {
              this.pieGraph=data;
         }
    else  if( this.newReportForm.controls["graphType"].value == "guage")
           {
             this.guageGraph=data;
           }

  });
}
else{
  this.getreportService.saveReportTemplate(defualtReportTemplate).subscribe(data => {
   console.log(" Default Report Template  data " + data);
   this.defualtReportTemplate = data;
    ReportId=data.dashboardReports[0].graphReports[0].graphResponse.configuration.id
    console.log("Report Id for menu");
    console.log(ReportId);
//this.showDashboard=true;

   if( this.newReportForm.controls["graphType"].value == "line")
   {
     this.lineGraph=data.dashboardReports[0].graphReports[0];
   }else  if( this.newReportForm.controls["graphType"].value == "bar")
     {
          this.barGraph=data.dashboardReports[0].graphReports[0];
     }
  // else  if( this.newReportForm.controls["graphType"].value == "Pie")
  //      {
  //           this.pieGraph=data;
  //      }
  // else  if( this.newReportForm.controls["graphType"].value == "Guage")
  //        {
  //          this.guageGraph=data;
  //        }


});
}
  console.log(" After Service is called");
  // event.StopPropagation();
  //event.preventDefault();
  this.submitted = true;
  //menu update call


  let reportName = this.newReportForm.controls["ReportTitle"].value;

     let report :any =
     {
       "ReportName":reportName,
       "ReportType": this.newReportForm.controls["ReportType"].value,
        "ReportId": ReportId,
        "dashId": dashboardId
      }

    this.menuService.updateReportMenu(report);


  }

  setTopNFormParams()
  {
    this.newReportModel.graphTypes=["Line","Bar"];
    this.newReportModel.granularities=["All"];
    this.showMultiSelectHtmlTag = false;
    this.showThresholdSelectHtmlTag = true;
    this.showPropertiesHtmlTag = true;
     this.showGraphTypeHtmltag =true;
     this.showMultiSelectAggrHtmlTag=false;
    //this.newReportForm.controls["granularity"].setValue("all");
  }

setDefaultFormParams()
{
  this.newReportModel.graphTypes=["Line","Bar","Pie","Gauge"];
  this.newReportModel.granularities=["All","Hour","Day"];

  this.showMultiSelectHtmlTag = false;
  this.showThresholdSelectHtmlTag = false;
  this.showPropertiesHtmlTag=true;

  this.showGraphTypeHtmltag =true;
  this.showMultiSelectAggrHtmlTag=false;

}

ngOnChanges(editReportData) {
console.log("In On Change- edit report");

  if (this.editReportData[0])
  {
    this.editMode=true;
    this.newReportForm.controls["ReportTitle"].setValue(this.editReportData[0].jsonString.configuration.name);
    this.newReportForm.controls["ReportType"].setValue(this.editReportData[0].reportType);
    this.newReportForm.controls["graphType"].setValue([this.editReportData[0].jsonString.configuration.graphtype]);
    this.newReportForm.controls["properties"].setValue(this.editReportData[0].jsonString.dimensions.name);
    this.newReportForm.controls["granularity"].setValue([this.editReportData[0].jsonString.granularity]);
    let dates = this.editReportData[0].jsonString.intervals.split('/');

    //let fromDate = new Date(dates[0]).toLocaleDateString();
    let fromDate = this.formatDate(dates[0]);
    let toDate = this.formatDate(dates[1]);
    console.log(dates);
    this.newReportForm.controls["fromDate"].setValue(fromDate);
    this.newReportForm.controls["toDate"].setValue(toDate);
    this.newReportForm.controls["aggregation"].setValue(this.editReportData[0].jsonString.metrics.aggregationType);
    this.newReportForm.controls["metric"].setValue(this.editReportData[0].jsonString.metrics.name);
    console.log("rerender In On Change- Edit Report ");
    this.editMode=false;
}

  }

  formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
  }
}
