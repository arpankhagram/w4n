import { Component, OnInit } from '@angular/core';
import { AlarmserviceService } from '../alarmservice.service';


@Component({
  selector: 'app-allalarms',
  templateUrl: './allalarms.component.html',
  styleUrls: ['./allalarms.component.css'],
  providers: [AlarmserviceService]
})
export class AllalarmsComponent implements OnInit {

  allAlarms: Array<any> =[];
    // [  {    "timeStamp": "1475739123614","className": "Port","instanceName": "6867<ptpNm>/shelf=1/slot=2/port=2","eventName": "Down","elementClassName": "Router","elementName": "6867","active": "0","eventText": "Down","eventDescription": "Down","severity": "4","troubleTicketId": "5808","vendor": "VENDOR5","firstNotifiedAt": "1475739123614","model": "MODEL9","occurrenceCount": "0" },
    //   {    "timeStamp": "1475739126864","className": "Port","instanceName": "5780<ptpNm>/shelf=1/slot=1/port=2","eventName": "Down","elementClassName": "Switch","elementName": "5780","active": "0","eventText": "Down","eventDescription": "Down","severity": "2","troubleTicketId": "5851","vendor": "VENDOR1","firstNotifiedAt": "1475739126864","model": "MODEL4","occurrenceCount": "0" },
    //   {    "timeStamp": "1475739130118","className": "Port","instanceName": "5699<ptpNm>/shelf=1/slot=1/port=1","eventName": "Down","elementClassName": "Router","elementName": "5699","active": "0","eventText": "Down","eventDescription": "Down","severity": "5","troubleTicketId": "4192","vendor": "CISCOTRAP","firstNotifiedAt": "1475739130118","model": "MODEL4","occurrenceCount": "1" },
    //   {    "timeStamp": "1475739133367","className": "Port","instanceName": "5436<ptpNm>/shelf=1/slot=2/port=1","eventName": "Down","elementClassName": "Router","elementName": "5436","active": "0","eventText": "Down","eventDescription": "Down","severity": "3","troubleTicketId": "7238","vendor": "CISCOTRAP","firstNotifiedAt": "1475739133367","model": "MODEL3","occurrenceCount": "0" }
    // ];

    headerList:Array<String>=[ "timeStamp","className","instanceName","eventName","elementClassName",
    "elementName","active","eventText","eventDescription","severity"];
    //,"troubleTicketId","vendor,"firstNotifiedAt","model","occurrenceCount"];


  constructor(private recentAlarmService : AlarmserviceService) {
        console.log("in constructor of All alarms component");
   }

  public totalItems:number = 80;
  public currentPage:number = 1;
  public rowsPerPage:number =10;
  public alaramsCount:number=0;
  public pageSizeArr:Array<any>=[10,20,30,40,50,60,70,80,90,100];
  public pageSizeSelected:number = 10;
  public timeStampDate= new Date();

  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  public onChangePageSize(selectedVal:any):void{
    console.log("in onChangePageSize :::: ==== "+this.pageSizeSelected);
    this.rowsPerPage=this.pageSizeSelected;
    console.log("data pageno:: "+  this.currentPage);
    this.getAllAlarmService();

  }

  public pageChanged(event:any):void {
      //this.rowsPerPage = this.pageSizeSelected;
      //console.log("page size ================== "+ this.rowsPerPage);
      console.log('Page changed to: ' + event.page);
      console.log('Number items per page: ' + event.itemsPerPage);
      this.currentPage = event.page;
      this.rowsPerPage = this.pageSizeSelected;
      console.log("data request--- page no :: "+this.currentPage+"  records::  "+this.rowsPerPage );
      this.getAllAlarmService();
  };



  // ngOnChange(currentPage){
  //   console.log("in ngOnChange() ------------------");
  //     this.getAllAlarmService();
  // }


  ngOnInit() {
        this.getAllAlarmService();
        this.getAlarmsCount();
  }

  getAlarmsCount():void{

    this.recentAlarmService.getAlarmsCount().subscribe(data => {
        console.log("recentAlarmService -------=== Recieved  data temp ::: ");
        console.log("data from backend in get alarms count :: "+data);
        this.alaramsCount=data;
   });

  }

  getAllAlarmService(): void {
        let request ={
          "pageNumber":this.currentPage,
          "pageSize":this.rowsPerPage
        };
        console.log("in getAllAlarmService() ------- ");
        console.log("data ------- "+this.allAlarms);

        let date1:any= Date.now();
        console.log("date timestamp ::: "+date1);

        this.recentAlarmService.getAlarmData(request).subscribe(data => {
            console.log("recentAlarmService -------=== Recieved  data temp ::: ");
            console.log("data from backend :: "+data);
            this.allAlarms=data;

              for(let i=0;this.allAlarms.length>i;i++){
                this.timeStampDate = new Date((this.allAlarms[i]["timeStamp"])*1000);
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

                  this.allAlarms[i]["timeStamp"] = date.toLocaleString();
              }


       });
   }

}
