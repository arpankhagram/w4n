import { Injectable, Inject} from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import jwt from './services/mockTemplate';

import { Subject }    from 'rxjs/Subject';


@Injectable()
export class MenuServiceService {

static  reportNameList : any = [];
reportNameList : Subject<string> = new Subject<string>();

  name : string;
  static newreportName: Subject<string> = new Subject<string>();
  // Observable string streams
  static newreportName$ = MenuServiceService.newreportName.asObservable();
 //reportNameList$ = this.reportNameList.asObservable();

  constructor(private http :Http) { }

  updateReportMenu(newreportName)
  {
    console.log("New name pushed to service in menu service");
    this.name = newreportName;
    console.log("Before name is pushed to array in service");
    console.log(this.name);
    MenuServiceService.reportNameList.push(newreportName);
    console.log("After name is pushed to array in service");
    this.change();
  }

  change(){
    console.log("Name changed in menu service");
      MenuServiceService.newreportName.next(this.name);
  }

  setReportMenu(myReportsArray)
  {
    console.log("Report list is assigned to array in menu service");
    MenuServiceService.reportNameList = myReportsArray;
    console.log(MenuServiceService.reportNameList);
  }
}
