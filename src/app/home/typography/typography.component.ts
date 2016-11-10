import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  public h1:Object = {msg:'Typography heading', secondaryText: 'Secondary text'}

  public h2:Object = {msg:'Typography heading', secondaryText: 'Secondary text'}

  public h3:Object = {msg:'Typography heading', secondaryText: 'Secondary text'}

  public h4:Object = {msg:'Typography heading', secondaryText: 'Secondary text'}

  public h5:Object = {msg:'Typography heading', secondaryText: 'Secondary text'}

  public h6:Object = {msg:'Typography heading', secondaryText: 'Secondary text'}

 

  ngOnInit() {
  }

}
