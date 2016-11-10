import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  public tableheadings : Array<String> =['#','First Name','Last  Name' , 'User Name'];
  public tabledata : Array<any> =[{id:'1',firstName : 'Mark',lastName:'Otto',userName:'@mdp'},{id :'2',firstName : 'Jacob',lastName:'Thornton',userName:'@jtn'},{id :'3',firstName : 'Larry',lastName:'The bird',userName:'@twitter'}];

  ngOnInit() {
  }

}
