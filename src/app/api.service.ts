import { Injectable, Inject} from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import jwt from './services/mockTemplate';
// import {UserTemplateData} from './user.templatedata';


// export class ApiConfig {
//     apiUrl: string;
//     //apiToken: string;
//
//     constructor ()
//     {
//       this.apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
//       //this.apiToken = "";
//     }
// }

@Injectable()
export class ApiService {
  // We can easily inject the API config using the DI token created when
      //  the application was bootstrapped
      //
      template =jwt;
      apiUrl = "http://172.25.182.148:8080/dynsmiddleware/reports/getUserReports";
      tableReportsUrl ="http://172.25.182.148:8080/dynsmiddleware/reports/getSpecificUserReport";
      baseURL="http://172.25.182.148:8080/dynsmiddleware";
      getuserReports = "/reports/getUserReports";
      specificTemplateURL = "/reports/getSpecificUserReport";
      fetchUserTemplateURL = "http://172.25.182.148:8080/dynsmiddleware/admin/fetchUserTemplate";
      constructor(private http :Http){
        //  , public  userTemplateData:UserTemplateData) {

      }

      getTemplateData(request :any){
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });
      return this.http.post(this.baseURL+this.getuserReports ,request ,options).map(res => res.json());



   }

      getDataOnPageChange(request :any){
          let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
          let options = new RequestOptions({ headers: postheaders });
          return this.http.post(this.apiUrl ,request ,options).map(res => res.json());
        }
   getSpecificTemplateData(request :any){
     let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
     let options = new RequestOptions({ headers: postheaders });
   return this.http.post(this.baseURL+this.specificTemplateURL ,request ,options).map(res => res.json());

}



   
   private handleError(error: Response) {
  let   dashboards:Array<any>=[];
         console.log(error);
         return dashboards;
     }

 }
