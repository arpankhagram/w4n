import { Injectable, Inject} from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AlarmserviceService {
      // We can easily inject the API config using the DI token created when
      //  the application was bootstrapped


      apiUrl = //"http://172.31.66.47:8080/dynsmiddleware/reports/fetchtrapsbyfilter"
             "http://172.25.182.148:8080/dynsmiddleware/reports/fetchtrapsbyfilter";
     trapCountUrl = "http://172.25.182.148:8080/dynsmiddleware/reports/fetchfiltercount";
      constructor(private http :Http ) {
      }

      getAlarmData(request :any){
          let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
          let options = new RequestOptions({ headers: postheaders });

        // let request ={
        // //  "timestamp":1479632424911,
        //     "pageNumber":1,
        //     "pageSize":10
        // }
          return this.http.post(this.apiUrl ,request ,options).map(res => res.json());
      }
      getAlarmsCount(){
          let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
          let options = new RequestOptions({ headers: postheaders });

        let request ={        }

          return this.http.post(this.trapCountUrl ,request ,options).map(res => res.json());
      }
 }
