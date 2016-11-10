import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  lat: number = 18.5204;
  lng: number = 73.8567;

  constructor() { }

  ngOnInit() {
  }

}
