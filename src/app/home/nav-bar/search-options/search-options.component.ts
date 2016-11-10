import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  public selected:string = '';
 public textfromdd:string = 'All';
 public customSelected:string = '';
 public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['All',
    'Site', 'Alarm' , 'Alert', 'Customer'  ];

    public states:Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico',
    'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];
    
    public searchComplex:Array<any> = [
    {id: 'Alarm', name: 'Alaska'}, {id: 'Alert', name: 'Arizona'},
    {id: 'Site', name: 'Arkansas'}, {id: 'Alarm', name: 'California'},
    {id: 'Site', name: 'Colorado'}, {id: 'Alarm', name: 'Connecticut'},
    {id: 'Site', name: 'Delaware'}, {id:'Alarm', name: 'Florida'},
    {id: 'Site', name: 'Georgia'}, {id: 'Alarm', name: 'Hawaii'},
    {id: 'Site', name: 'Idaho'}, {id: 'Alarm', name: 'Illinois'},
    {id: 'Site', name: 'Indiana'}, {id: 'Alarm', name: 'Iowa'},
    {id: 'Site', name: 'Kansas'}, {id: 'Alarm', name: 'Kentucky'},
    {id: 'Site', name: 'Louisiana'}, {id: 'Alarm', name: 'Maine'},
    {id: 'Site', name: 'Maryland'}, {id: 'Alarm', name: 'Massachusetts'},
    {id: 'Site', name: 'Michigan'}, {id: 'Alarm', name: 'Minnesota'},
    {id: 'Site', name: 'Mississippi'}, {id: 'Alarm', name: 'Missouri'},
    {id: 'Site', name: 'Montana'}, {id: 'Alarm', name: 'Nebraska'},
    {id: 'Alert', name: 'Nevada'}, {id: 'Customer', name: 'New Hampshire'},
    {id: 'Alert', name: 'New Jersey'}, {id: 'Customer', name: 'New Mexico'},
    {id: 'Alert', name: 'New York'}, {id: 'Customer', name: 'North Dakota'},
    {id: 'Alert', name: 'North Carolina'}, {id: 'Customer', name: 'Ohio'},
    {id: 'Alert', name: 'Oklahoma'}, {id: 'Customer', name: 'Oregon'},
    {id:'Alert', name: 'Pennsylvania'}, {id: 'Customer', name: 'Rhode Island'},
    {id: 'Alert', name: 'South Carolina'}, {id: 'Customer', name: 'South Dakota'},
    {id:'Alert', name: 'Tennessee'}, {id: 'Customer', name: 'Texas'},
    {id: 'Alert', name: 'Utah'}, {id: 'Customer', name: 'Vermont'},
    {id: 'Alert', name: 'Virginia'}, {id: 'Customer', name: 'Washington'},
    {id: 'Alert', name: 'West Virginia'}, {id: 'Customer', name: 'Wisconsin'},
    {id: 'Alert', name: 'Wyoming'}];

    public statesComplex:Array<any> = [
    {id: 2, name: 'Alaska'}, {id: 3, name: 'Arizona'},
    {id: 4, name: 'Arkansas'}, {id: 5, name: 'California'},
    {id: 6, name: 'Colorado'}, {id: 7, name: 'Connecticut'},
    {id: 8, name: 'Delaware'}, {id: 9, name: 'Florida'},
    {id: 10, name: 'Georgia'}, {id: 11, name: 'Hawaii'},
    {id: 12, name: 'Idaho'}, {id: 13, name: 'Illinois'},
    {id: 14, name: 'Indiana'}, {id: 15, name: 'Iowa'},
    {id: 16, name: 'Kansas'}, {id: 17, name: 'Kentucky'},
    {id: 18, name: 'Louisiana'}, {id: 19, name: 'Maine'},
    {id: 21, name: 'Maryland'}, {id: 22, name: 'Massachusetts'},
    {id: 23, name: 'Michigan'}, {id: 24, name: 'Minnesota'},
    {id: 25, name: 'Mississippi'}, {id: 26, name: 'Missouri'},
    {id: 27, name: 'Montana'}, {id: 28, name: 'Nebraska'},
    {id: 29, name: 'Nevada'}, {id: 30, name: 'New Hampshire'},
    {id: 31, name: 'New Jersey'}, {id: 32, name: 'New Mexico'},
    {id: 33, name: 'New York'}, {id: 34, name: 'North Dakota'},
    {id: 35, name: 'North Carolina'}, {id: 36, name: 'Ohio'},
    {id: 37, name: 'Oklahoma'}, {id: 38, name: 'Oregon'},
    {id: 39, name: 'Pennsylvania'}, {id: 40, name: 'Rhode Island'},
    {id: 41, name: 'South Carolina'}, {id: 42, name: 'South Dakota'},
    {id: 43, name: 'Tennessee'}, {id: 44, name: 'Texas'},
    {id: 45, name: 'Utah'}, {id: 46, name: 'Vermont'},
    {id: 47, name: 'Virginia'}, {id: 48, name: 'Washington'},
    {id: 49, name: 'West Virginia'}, {id: 50, name: 'Wisconsin'},
    {id: 51, name: 'Wyoming'}];
    public typeaheadOnSelect(e:any):void {
    console.log('Selected value: ', e.item);
  }
   public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  public onClickDropdown(e:any):void {
    this.textfromdd=e;
    console.log("selected search type: "+this.textfromdd);
  }

   public onClickSearchButton():void {
    
    console.log("search button clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
