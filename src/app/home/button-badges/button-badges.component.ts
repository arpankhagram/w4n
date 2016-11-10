import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button-badges',
  templateUrl: './button-badges.component.html',
  styleUrls: ['./button-badges.component.css']
})
export class ButtonBadgesComponent implements OnInit {

public items:any = {links :['Action',
    'Another action', 'Something else'],seperatelink : 'Seperate link', seperate : true};

  constructor() { }

  ngOnInit() {
  }

}
