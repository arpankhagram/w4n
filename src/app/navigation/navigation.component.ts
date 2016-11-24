import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ApiService } from '../api.service';
import jwt from '../services/mockTemplate';
import jsObj from './mockObject';
import { MenuServiceService } from '../menu-service.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;
import temp from './mockObject';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers :[MenuServiceService]
})


export class NavigationComponent implements OnInit {
private subscription: Subscription;
dashBoardNameList: string[] = [];
temp = jsObj;
dashBaordDataArray: Array<any> = [];
myReportsArray: Array<any> = [];
dummmyJson : any ;

@ViewChild('menuItem') el:ElementRef;
  constructor(private apiService : ApiService, private menuServiceService : MenuServiceService ,private localstorageService:LocalStorageService) {
    this.subscription =  MenuServiceService.newreportName$.subscribe(
     value => {
       console.log("Received new report name in nav component");
       this.myReportsArray.push(value);
     });
  }

  public isCollapsed:boolean = true;
  public isCollapsedDashBoard:boolean = true;
  public collapseReport:boolean = true;
  ngOnInit() {
    console.log("inside ngint of navigation");
    this.getTemplateJson();
    this.subscription = MenuServiceService.newreportName$.subscribe(
     value => {
       console.log("Received new report name in nav component" +value);
       this.myReportsArray.push(value);
     });
      }




  public  ngAfterViewInit() {
        $(this.el.nativeElement).find("#menu-toggle-2")
                       .on('click', (e, args) => {
                               e.preventDefault();
        $(this.el.nativeElement).siblings(".silide-nav").toggleClass("toggled-2");
                                $(this.el.nativeElement).toggleClass("inc-width")
    if(!$(this.el.nativeElement).hasClass("inc-width")){
    this.isCollapsed=true;
    this.isCollapsedDashBoard=true;

    }
            });
$(this.el.nativeElement).siblings("div.silide-nav").find("li a.toggleNavbar, li span.toggleNavbar, div li a.toggleNavbar")
          .on('click', (e, args) => {

        $(this.el.nativeElement).siblings("div.silide-nav").toggleClass("toggled-2");
                                $(this.el.nativeElement).toggleClass("inc-width")
    if(!$(this.el.nativeElement).hasClass("inc-width")){
    this.isCollapsed=true;
    this.isCollapsedDashBoard=true;
    }
            });
             var h = $(document).height() - 64;
      $(this.el.nativeElement).siblings(".silide-nav").css("min-height", h);
      $(document).resize(function() {
         var xh = $(document).height();
         $(this.el.nativeElement).siblings(".silide-nav").css("min-height", xh);
   });

    }


getTemplateJson(): void {

  let request ={
      userId:"admin1",
      dashboardId:""
      }



  this.apiService.getTemplateData(request).subscribe(data => {
    this.dummmyJson = data;
    console.log("dummmyJson is here");
    console.log(this.dummmyJson);

    let dashBoard : Array<any> = this.dummmyJson.dashboardReports;

       for(let obj of dashBoard) {
       let dashbaordName: string = obj.name;
       let dashboardId: string = obj.id;
       let dt : string =  obj.type;
       let reports : any[] = [];
       let dashBoardReportArray : any[] = [];
       let flag = false;

       if(dt === "reports") {
         flag = true;
       }

       if (obj.graphReports != null) {
         for(let obj1 of obj.graphReports) {
            reports.push({"ReportName": obj1.graphResponse.configuration.name,
                             "ReportType": obj1.graphResponse.configuration.graphtype,
                                "ReportId": obj1.graphResponse.configuration.id,
                              "dashId": dashboardId});
         }
       }


       if (obj.tableReports != null){
         for(let obj1 of obj.tableReports) {
           reports.push({"ReportName": obj1.tableResponse.configuration.name,
                      "ReportType": obj1.tableResponse.configuration.type,
                         "ReportId": obj1.tableResponse.configuration.id,
                         "dashId": dashboardId});
                        }
                    }


       if(flag) {
         Array.prototype.push.apply(this.myReportsArray, reports);
       } else {
         Array.prototype.push.apply(dashBoardReportArray, reports);
         this.dashBaordDataArray.push({"dashbaordName": dashbaordName, "dashboardId": dashboardId,
                             "dt": dt, "reports": dashBoardReportArray ,"collapse" : false});
       }

       }
       this.menuServiceService.setReportMenu(this.myReportsArray);

         this.localstorageService.set('reportArray', this.myReportsArray);
    });


}

ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
