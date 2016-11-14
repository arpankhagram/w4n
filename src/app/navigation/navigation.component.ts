import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
@ViewChild('menuItem') el:ElementRef;
  constructor() {

  }
  public isCollapsed:boolean = true;
    public isCollapsedDashBoard:boolean = true;
  ngOnInit() {

  }
  public  ngAfterViewInit() {
        $(this.el.nativeElement).find("#menu-toggle-2")
                       .on('click', (e, args) => {
                               e.preventDefault();
        $(this.el.nativeElement).siblings(".silide-nav").toggleClass("toggled-2");
		$(this.el.nativeElement).toggleClass("inc-width")
    if(!$(this.el.nativeElement).hasClass("inc-width")){
    this.isCollapsed=true;
    this.isCollapsedDashBoard=true;
    }
            });
$(this.el.nativeElement).siblings("div.silide-nav").find("li a.toggleNavbar, li span.toggleNavbar, div li a.toggleNavbar")
          .on('click', (e, args) => {

        $(this.el.nativeElement).siblings("div.silide-nav").toggleClass("toggled-2");
		$(this.el.nativeElement).toggleClass("inc-width")
    if(!$(this.el.nativeElement).hasClass("inc-width")){
    this.isCollapsed=true;
    this.isCollapsedDashBoard=true;
    }
            });
             var h = $(document).height() - 64;
      $(this.el.nativeElement).siblings(".silide-nav").css("min-height", h);
      $(document).resize(function() {
         var xh = $(document).height();
         $(this.el.nativeElement).siblings(".silide-nav").css("min-height", xh);
   });

    }

}
