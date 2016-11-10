import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public dt:Date = new Date();
  public minDate:Date = void 0;
  public events:Array<any>;
  public tomorrow:Date;
  public afterTomorrow:Date;
   public dateInput:Date;
public dtDate =this.dt.getDate();
  public formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  public format:string = this.formats[0];
  public dtJQ:Date = new Date();
  public dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;
  @ViewChild('datePicker') el:ElementRef;

  public constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }
 
  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }


 
  public today():void {
    this.dt = new Date();
  }
 
  public d20090824():void {
    //this.dt = moment('2009-08-24', 'YYYY-MM-DD').toDate();
  }
 
  // todo: implement custom class cases
  public getDayClass(date:any, mode:string):string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);
 
      for (let i = 0; i < this.events.length; i++) {
        let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
 
        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }
 
    return '';
  }
 
  public disabled(date:Date, mode:string):boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }
 
  public open():void {
    this.opened = !this.opened;
  }
 
  public clear():void {
    this.dt = void 0;
  }
 
  public toggleMin():void {
    this.dt = new Date(this.minDate.valueOf());
  }
  ngOnInit() {
  }

   public dateModel: Date;
   
    label: string;
    
   
    private showDatepicker: boolean = false;

    showPopup() {
        this.showDatepicker = true;
        //this.dtDate =this.dt.getUTCDate();
        console.log("Show pop up");
        
    }

    hidePopup(event) {
        this.showDatepicker = false;
        this.dateModel = event;
       this.dtDate =this.dt.getDate();
            }


            public myTime:Date = new Date();
  public options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };
 
  
 
  public update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.myTime = d;
  };


public today1 = function () {
            this.date1 = new Date();
        };
        

       birthday = new Date(1988, 3, 15); 

       public opened1:boolean = false;

      public dateOptions1 : Object = {
            //dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(2010, 1, 1),
            startingDay: 1
        };
 
  public changed():void {
    
  };
 public  ngAfterViewInit() {
        $(this.el.nativeElement).siblings("#datePicker")
                       .on('click', (e, args) => {
                $(this.el.nativeElement).siblings("#datePicker").datepicker("show");
            });
            $(this.el.nativeElement).siblings("#datePicker").datepicker({
        dateFormat: 'DD,d MM, yy',
        maxDate: 0,
        changeYear: true 
    });
     $(this.el.nativeElement).siblings("#datePicker").on('change',(e,args)=>{
       this.dtJQ= $(this.el.nativeElement).siblings("#datePicker").val();
     })
    $(this.el.nativeElement).datepicker("setDate", new Date());
    }
  

}
