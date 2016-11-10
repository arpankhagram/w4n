import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub-settings',
  templateUrl: './sub-settings.component.html',
  styleUrls: ['./sub-settings.component.css']
})
export class SubSettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    this.profileType = this.route.snapshot.params['id'];
  }
  
  public checkParams ($event:MouseEvent):void{
  		this.profileType = this.route.snapshot.params['id'];
    	$event.preventDefault();
  }
  

  public profileType:String;
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
     this.profileType=id;
    });
  }

}
