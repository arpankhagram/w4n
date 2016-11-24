import { Injectable, Inject} from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import jwt from './services/mockTemplate';

@Injectable()
export class GetreportService {
  template =jwt;
  baseURL="http://172.25.182.148:8080/dynsmiddleware";
  getUserReportURL ="/reports/getUserReports";
  getDefaultTemplateURL="/template/getAllTemplate";
  saveReportTemplateURL ="/reports/addUserReport";
  updateReportTemplateURL="/reports/editUserReport"
  specificTemplateURL = "/reports/getSpecificUserReport";
  apiUrlForFilter = "http://172.25.182.148:8080/dynsmiddleware/reports/getReportAccordingToFilter";
  fetchUserTemplateURL = "http://172.25.182.148:8080/dynsmiddleware/admin/fetchUserTemplate";
  mockconfig = [
     {
          "userId": null,
          "dashboardId": "dashboard1",
          "templateId": "101",
          "reportType": "Graph",
          "reportName": null,
          "jsonString": {
               "configuration": {
                    "attributes": [
                         {
                               "axis": "x",
                               "displayName": "IP",
                               "name": "ip"
                         },
                         {
                               "axis": "y",
                               "displayName": "BYTES",
                               "name": "ifOutUcastPkts"
                         }
                    ],
                    "graphtype": "bar",
                    "id": "3",
                    "name": "Total Traffic Line Average New1",
                    "type": "TOPN"
               },
               "dataSourceName": "telemetry_Hourly",
               "dimensions": {
                    "displayName": "IP",
                    "name": "ip"
               },
               "filterExpression": "metricname==ifOutUcastPkts",
               "granularity": "all",
               "intervals": "2016-11-18/2016-11-19",
               "metrics": {
                    "aggregationType": "doubleSum",
                    "fieldName": "metricvalueSum",
                    "name": "ifOutUcastPkts"
               },
               "threshold": 10
          }
     }
];
  constructor(private http :Http ) {}


  getReportData(dashboardId, reportId){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    let request = {
      userId:"admin1",
      dashboardId : dashboardId,
      templateId  : reportId
    }
    return this.http.post(this.baseURL+this.getUserReportURL,request ,options).map(res => res.json());
}

getSpecificTemplateData(dashboardId, reportId)
{
  let request = {
    userId:"admin1",
    dashboardId : dashboardId,
    templateId : reportId
  }
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  let options = new RequestOptions({ headers: postheaders });
return this.http.post(this.baseURL+this.specificTemplateURL ,request ,options).map(res => res.json());

}


   sendFilterReportData(filterReport)
   {
     let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
     let options = new RequestOptions({ headers: postheaders });
     let request =  filterReport;

     return this.http.post(this.apiUrlForFilter ,request ,options).map(res => res.json());
   }


getDefaultReportTemplate()
{
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  let options = new RequestOptions({ headers: postheaders });
  return this.http.get(this.baseURL+this.getDefaultTemplateURL ,options).map(res => res.json());
}

getTemplateConfigData(request :any){
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  let options = new RequestOptions({ headers: postheaders });
  return this.http.post(this.fetchUserTemplateURL ,request,options).map(res => res.json())

  //return this.mockconfig;
}

saveReportTemplate(template)
{
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  let options = new RequestOptions({ headers: postheaders });


  return this.http.post(this.baseURL+this.saveReportTemplateURL ,template,options).map(res => res.json())

}
updateReportTemplate(template)
{
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  let options = new RequestOptions({ headers: postheaders });


  return this.http.post(this.baseURL+this.updateReportTemplateURL ,template,options).map(res => res.json())

}


}
