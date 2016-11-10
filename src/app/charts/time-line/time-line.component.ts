import { Component, OnInit } from '@angular/core';
const vis = require('vis');

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
var container = document.getElementById('vis-timeline');

var data = new vis.DataSet([
    {id: 1, content: 'item 1', start: '2014-04-20'},
    {id: 2, content: 'item 2', start: '2014-04-14'},
    {id: 3, content: 'item 3', start: '2014-04-18'},
    {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
    {id: 5, content: 'item 5', start: '2014-04-25'},
    {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
  ]);

//timeAxis = {}
// Configuration for the Timeline as JSON object
var options = {
    //width: '100%',
    editable: true 
    //height: 350, 
   // timeAxis: {scale: 'minute', step: 15}
    };

// Create a Timeline
var timeline = new vis.Timeline(container, data, options);
  }

}
