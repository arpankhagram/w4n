import { Component } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('bhoechieTabMenu') el:ElementRef;
  public  ngAfterViewInit() {
        $(this.el.nativeElement).find("div.list-group>li")
                       .on('click', (e, args) => {
                               e.preventDefault();
        e.preventDefault();
              $(this.el.nativeElement).find('li.active').removeClass("active");
        $(e.currentTarget).addClass("active");
        var index = $(e.currentTarget).index();
        $(this.el.nativeElement).parent().parent(".bhoechie-tab-container").find("#bhoechieTab>div.bhoechie-tab-content").removeClass("active");
       $(this.el.nativeElement).parent().parent(".bhoechie-tab-container").find("#bhoechieTab>div.bhoechie-tab-content").eq(index).addClass("active");
            });

         
    }
}
