import { Injectable, Inject } from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';

export class ApiConfig {
    apiUrl: string;
    //apiToken: string;

    constructor ()
    {
      this.apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
      //this.apiToken = "";
    }
}

@Injectable()
export class ApiService {
  // We can easily inject the API config using the DI token created when
      //  the application was bootstrapped
      //
      constructor(
          @Inject("api.config") private apiConfig: ApiConfig, private http :Http
      ) {
          console.log("Injected config:", this.apiConfig);
      }

      getData(){
       return this.http.get(this.apiConfig.apiUrl).map(res => res.json());
   }
}
