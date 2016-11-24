import { Component, OnInit, Input } from '@angular/core';
import { DataTableResource } from 'angular-2-data-table';
import persons from './data-table.data';
import { ApiService } from '../api.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

templateId: string;
dashboardId: string;
pagingIdentifier : string;

constructor(private apiService : ApiService, private router : Router , private route : ActivatedRoute ) { }

@Input() tabledata: any;

header: Array<any> = [];
data: Array<any> = [];
eventArray : Array<any> = [];
colNameArray : Array<any> = [];
public tableName : any ;

public totalItems:number = 70;
public currentPage:number = 1;
public rowsPerPage:number =10;
public pageSizeArr:Array<any>=[10,20,30,40,50,60,70,80,90,100];
public pageSizeSelected:number = 10;

ngOnInit() {

  this.getTableData();
  //this.getRoutes();
  this.getTemplateId();

}

ngOnChanges(tabledata) {
console.log("In On Change- tabledata");
this.getTableData();
this.getTemplateId();
}

getTemplateId()
{
  if (this.tabledata)
  {
    this.templateId = this.tabledata.tableResponse.configuration.id;
    let temp = this.tabledata.tableResponse.druidSelectResponce[0].result.pagingIdentifiers;
    this.pagingIdentifier = Object.keys(temp)[0];
    console.log("######################################Paging Identifier");
    console.log(this.pagingIdentifier);
  }
}

// getRoutes()
//   {
//   this.route.params.subscribe(params => {
//     console.log("==========");
//     let res = this.router.url.split('/');
//     console.log(res);
//     if(res)
//     {
//       if (res.length>2)
//       {
//         this.dashboardId = res[2];
//       }
// }
//    console.log(this.dashboardId);
//    console.log(this.templateId);
// });
//
// }

public getTableData () {
  this.header = this.tabledata.tableResponse.configuration.attributes;
  this.data = this.tabledata.tableResponse.druidSelectResponce;
   for ( let d of this.data) {
    let tempArray : any[] = d.result.events;
    for (let eventEle of tempArray) {
        this.eventArray.push(eventEle.event);
    }
   }

   this.header.unshift({"name": "timestamp ","displayName": "Timestamp"});
   this.tableName ="";
   this.tableName = this.tabledata.tableResponse.configuration.name;
   console.log(this.eventArray);
   console.log("this.header>>>>>>>>>>>>>>>>>>>>>>>>>>");
   console.log(this.header);
}

    public getPageUpdatedData (data) {
     //this.header= Array<any> == [];
      this.header = [];
      this.data = [];
      this.eventArray = [];
      this.header = data.dashboardReports[0].tableReports[0].tableResponse.configuration.attributes;
      this.header.unshift({"name": "timestamp ","displayName": "Timestamp"});

      this.data = data.dashboardReports[0].tableReports[0].tableResponse.druidSelectResponce;
       for ( let d of this.data) {
        let tempArray : any[] = d.result.events;
        for (let eventEle of tempArray) {
            this.eventArray.push(eventEle.event);
        }
       }
console.log("this.eventArray");
       console.log(this.eventArray);
    }

    public pageChanged(event:any):void {
      this.currentPage = event.page;
      this.rowsPerPage = event.itemsPerPage;
      console.log("data request--- page no :: "+this.currentPage+"  records::  "+this.rowsPerPage );
      //    this.getDataOnPageChange();
     let res = this.router.url.split('/');
     console.log(res);
     if(res)
        {
        this.dashboardId = res[1];
        }
      console.log(this.dashboardId);
      //console.log(this.templateId);
        this.getDataOnPageChange();

  };

getDataOnPageChange(): void {
   let request ={
     "templateId":this.templateId,
     "userId":"admin1",
     "dashboardId":this.dashboardId,
     "pageNumber":this.currentPage,
     "pageSize":this.pageSizeSelected,
     "identifiers":this.pagingIdentifier
   };
   //
  //  let date1:any= Date.now();
  //  console.log("date timestamp ::: "+ date1);

   this.apiService.getDataOnPageChange(request).subscribe(data => {
       console.log("getDataOnPageChange>>>>>>>>>>>>>>>>>>>>>>>>> ");
       console.log(data);
       this.getPageUpdatedData(data);
  });
}
}
