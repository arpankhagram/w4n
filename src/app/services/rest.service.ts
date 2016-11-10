import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
// import { DefaultTemplate } from '../../services/mockTemplate';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import jwt from './mockTemplate';


@Injectable()
export class RestService {


constructor (private http: Http) { console.log("RestService"+this.DefaultTemplate);   }
 DefaultTemplate = jwt;

  POST(query, url) {
      let postheaders = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: postheaders });
      console.log("URL : "+url);
      console.log("Query :"+query);
      return this.http.post(url, query, options)
      .map((res: Response) => {
            if (res)
            {return this.DefaultTemplate}
        })
      .catch(this.handleError);
    }


   GET(url) : Observable<string[]>{
       return this.http.get(url)
              .map(this.extractData)
              .catch(this.handleError);
   }

   private extractData(res: Response) {
      let body = res.json();
     return this.DefaultTemplate;
  }

  private handleError(error: Response) {
      console.log(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
