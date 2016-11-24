import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Router } from '@angular/router';
import temp from '../navigation/mockObject';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService]
})
export class DashboardComponent implements OnInit {


  @ViewChild('alarms') el:ElementRef;
  @ViewChild('close') el1:ElementRef;

  templateConfig:any;
  nullReports:boolean=true;
  graphReports: Array<any> = [];
  barGraphReports: Array<any> = [];
  pieGraphReports: Array<any> = [];
  lineGraphReports: Array<any> = [];
  guageGraphReports: Array<any> = [];
  multilineGraphReports :Array<any> = [];
  multibarGraphReports:Array<any> = [];

  tableReports:Array<any> = [];
  temporary = temp;

  @Input() dashboardId : any;


  constructor( private apiService : ApiService,  private localStorageService: LocalStorageService ,private route: ActivatedRoute, private router : Router){



 }
 ngOnInit() {
         this.getRoutes();
         this.getApiService();
 }

 getRoutes()
 {
   console.log(this.route.snapshot.params['url']);
   this.dashboardId = this.route.snapshot.params['id'];

   this.route.params.subscribe(params => {
   let id = params['id'];
 this.dashboardId = id;

   console.log(params);
   console.log(id);
   console.log(this.route.params);
   if(this.dashboardId != null)
   {
     this.getSpecificDashboard();}

   //call service from here to update from the View
   console.log("==========");
 });
 }

  getApiService(): void {

  let request = {
      userId:"admin1",
      dashboardId:""

      }

    if(this.dashboardId != null)
    {
      request.dashboardId = this.dashboardId;
    }
  this.apiService.getTemplateData(request).subscribe(data => {


  console.log("this.response for zone aware promise -- ");
  this.templateConfig = data;
    console.log(data);
  console.log(" Dashboard Component");
  if(this.localStorageService.get('myKey') == null){
  this.localStorageService.set('myKey', this.templateConfig);
  }
  else
  {
  let dashboardId = data.dashboardReports[0].id;
  let templateData :any = this.localStorageService.get('myKey');
  let DashboardList :any[] = templateData.dashboardReports;

  for (var j = 0; j < DashboardList.length; j++) {
  let DashboardData = DashboardList[j];
  if(DashboardData != null  && DashboardData.id == dashboardId )
  {
  templateData.dashboardReports[j] = data;
  }
  }

  this.localStorageService.set('myKey', templateData);
  }
  console.log("Local storage data -- > " + this.localStorageService.get('myKey'));
  //this.templateConfig =this.apiService.template;

  console.log(" Recieved template data ");
  console.log(this.templateConfig);
  this.graphReports = this.templateConfig.dashboardReports[0].graphReports;

  this.tableReports = this.templateConfig.dashboardReports[0].tableReports;
  console.log("Table Reports Data");
  console.log(this.tableReports);

  this.barGraphReports = this.graphReports.filter(element => {
  return element.graphResponse.configuration.graphtype == "bar";           });

   this.pieGraphReports = this.graphReports.filter(element => {
   return element.graphResponse.configuration.graphtype == "pie";   });

   this.lineGraphReports = this.graphReports.filter(element => {
  return element.graphResponse.configuration.graphtype == "line";});

  this.guageGraphReports = this.graphReports.filter(element => {
    return element.graphResponse.configuration.graphtype == "gauge";  });

  this.multilineGraphReports = this.graphReports.filter(element => {
    return element.graphResponse.configuration.graphtype == "multi-line";  });

this.multibarGraphReports = this.graphReports.filter(element => {
  return element.graphResponse.configuration.graphtype == "multi-bar";});

// console.log("this.graphreports");
// console.log(this.graphReports);
// console.log("this.bargraphReports");
// console.log(this.barGraphReports);
// console.log("this.pieGraphReports");
// console.log(this.pieGraphReports);
// console.log("this.lineGraphReports");
// console.log(this.lineGraphReports);
// console.log("this.guageGraphReports");
//  console.log(this.guageGraphReports);
// console.log("this.multilineGraphReports");
// console.log(this.multilineGraphReports);
      });
  }

  public  ngAfterViewInit() {
      $(this.el.nativeElement).find("#alarms")
                 .on('click', function(event){
             event.preventDefault();
             $('.cd-panel').addClass('is-visible');
      });

      $(this.el1.nativeElement).find("#close")
               .on('click', function(event){
             if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') || $(event.target).is('.closepan') ) {
                           $('.cd-panel').removeClass('is-visible');
                           event.preventDefault();
            }
      });
  }
    getSpecificDashboard(): void {

    let request ={

      "userId" : "admin1",
       "dashboardId": this.dashboardId
    }

    this.apiService.getSpecificTemplateData(request).subscribe(data => {
    console.log("this.response for zone aware promise -- ");

    if(data != null &&  data.dashboardReports[0].graphReports == null)
    {
        this.templateConfig = null;
          // this.nullReports=false;
    }
    else{
    this.templateConfig = data;
    // this.nullReports=true;
      console.log(data);
    console.log(" Dashboard Component");
    if(this.localStorageService.get('myKey') == null){
    this.localStorageService.set('myKey', this.templateConfig);
    }
    else
    {
    let dashboardId = data.dashboardReports[0].id;
    let templateData :any = this.localStorageService.get('myKey');
    let DashboardList :any[] = templateData.dashboardReports;

    for (var j = 0; j < DashboardList.length; j++) {
    let DashboardData = DashboardList[j];
    if(DashboardData != null  && DashboardData.id == dashboardId )
    {
    templateData.dashboardReports[j] = data;
    }
    }

    this.localStorageService.set('myKey', templateData);
    }
    console.log("Local storage data -- > " + this.localStorageService.get('myKey'));
    //this.templateConfig =this.apiService.template;

    console.log(" Recieved template data ");
    console.log(this.templateConfig);
    this.graphReports = this.templateConfig.dashboardReports[0].graphReports;

    this.barGraphReports = this.graphReports.filter(element => {
    return element.graphResponse.configuration.graphtype == "bar";           });

     this.pieGraphReports = this.graphReports.filter(element => {
     return element.graphResponse.configuration.graphtype == "pie";   });

     this.lineGraphReports = this.graphReports.filter(element => {
    return element.graphResponse.configuration.graphtype == "line";});

    this.guageGraphReports = this.graphReports.filter(element => {
      return element.graphResponse.configuration.graphtype == "gauge";  });

    this.multilineGraphReports = this.graphReports.filter(element => {
      return element.graphResponse.configuration.graphtype == "multi-line";  });

    this.multibarGraphReports = this.graphReports.filter(element => {
    return element.graphResponse.configuration.graphtype == "multi-bar";});

  // if(!this.graphReports && !this.tableReports){
  //   console.log("Before:"+this.nullReports);
  //   this.nullReports=false;
  //     console.log("After:"+this.nullReports);
  // }
}
        });

      }



}
