import { Component, OnInit } from '@angular/core';
import { AlarmserviceService } from '../alarmservice.service';

@Component({
  selector: 'app-recentalarm',
  templateUrl: './recentalarm.component.html',
  styleUrls: ['./recentalarm.component.css'],
  providers: [AlarmserviceService]
})
export class RecentalarmComponent implements OnInit {

  public timeStampDate= new Date();
  recentAlarmData:any;
  //dtaajson:Object=null;
  recentAlarmDataList: Array<any>=[];
  cssColorList: Array<String> = ['status-orange', 'status-green', 'status-red'];
  recentalarms: Array<any> = [];
    // [  {    "timeStamp": "1475739123614","className": "Port","instanceName": "6867<ptpNm>/shelf=1/slot=2/port=2","eventName": "Down","elementClassName": "Router","elementName": "6867","active": "0","eventText": "Down","eventDescription": "Down","severity": "4","troubleTicketId": "5808","vendor": "VENDOR5","firstNotifiedAt": "1475739123614","model": "MODEL9","occurrenceCount": "0" },
    //   {    "timeStamp": "1475739126864","className": "Port","instanceName": "5780<ptpNm>/shelf=1/slot=1/port=2","eventName": "Down","elementClassName": "Switch","elementName": "5780","active": "0","eventText": "Down","eventDescription": "Down","severity": "2","troubleTicketId": "5851","vendor": "VENDOR1","firstNotifiedAt": "1475739126864","model": "MODEL4","occurrenceCount": "0" },
    //   {    "timeStamp": "1475739130118","className": "Port","instanceName": "5699<ptpNm>/shelf=1/slot=1/port=1","eventName": "Down","elementClassName": "Router","elementName": "5699","active": "0","eventText": "Down","eventDescription": "Down","severity": "5","troubleTicketId": "4192","vendor": "CISCOTRAP","firstNotifiedAt": "1475739130118","model": "MODEL4","occurrenceCount": "1" },
    //   {    "timeStamp": "1475739133367","className": "Port","instanceName": "5436<ptpNm>/shelf=1/slot=2/port=1","eventName": "Down","elementClassName": "Router","elementName": "5436","active": "0","eventText": "Down","eventDescription": "Down","severity": "3","troubleTicketId": "7238","vendor": "CISCOTRAP","firstNotifiedAt": "1475739133367","model": "MODEL3","occurrenceCount": "0" }
    // ];
    //recentalarms: Array<any>=[];

  constructor( private recentAlarmService : AlarmserviceService) {
      console.log("in constructor of recent alarms component");
   }

   getRecentAlarmService(): void {
        console.log("in getRecentAlarmService() ------- ");
        let request ={
          "pageNumber":1,
          "pageSize":10
        };

      //var time2: TimeRanges = new time2
      //console.log("time ::: ======= "+time2);
      var date1: any = Date.now();
      console.log("Date :: ====================== "+ date1);

          this.recentAlarmService.getAlarmData(request).subscribe(data => {

            console.log("recentAlarmService -------=== Recieved  data temp ::: ");
            console.log("data from backend :: "+data);

          this.recentalarms =  data;

            console.log(this.recentalarms);
            for(let i=0; this.recentalarms.length>i;i++){
                console.log(" data check :: ------- "+this.recentalarms[i]);
                var severityNumber = this.recentalarms[i]['severity'];
                console.log("severity number ::: "+severityNumber);

              switch (severityNumber) {
                 case '1':
                      this.recentalarms[i]["cssColor"] = "status-red";
                      break;
                 case '2':
                      this.recentalarms[i]["cssColor"] = "status-red";
                      break;
                 case '3':
                      this.recentalarms[i]["cssColor"] = "status-orange";
                     break;
                 case '4':
                      this.recentalarms[i]["cssColor"] = "status-orange";
                      break;
                 case '5':
                        this.recentalarms[i]["cssColor"] = "status-green";
                      break;
                 default:
             }
                  console.log("new temp ----- "+ this.recentalarms[i]["cssColor"]);
                  this.timeStampDate = new Date((this.recentalarms[i]["timeStamp"])*1000);
                  console.log("timestamp :: ----- "+this.timeStampDate.getSeconds());
                  var date = new Date();
                    date.setUTCDate(this.timeStampDate.getDate());
                    date.setUTCHours(this.timeStampDate.getHours());
                    date.setUTCMonth(this.timeStampDate.getMonth());
                    date.setUTCMinutes(this.timeStampDate.getMinutes());
                    date.setUTCSeconds(this.timeStampDate.getSeconds());
                    date.setUTCMilliseconds(this.timeStampDate.getMilliseconds());
                    console.log(date.toLocaleString());
                  // console.log(this.timeStampDate.toDateString());
                  // console.log(this.timeStampDate.toTimeString());
                  // console.log(this.timeStampDate.getUTCFullYear());
                  // console.log(this.timeStampDate.getUTCDate())

                    this.recentalarms[i]["timeStamp"] = date.toLocaleString();

          }


          console.log(this.recentalarms);

        });
    }

  ngOnInit() {
  //  console.log("Hello ----- ");
    this.getRecentAlarmService();
  }

}
