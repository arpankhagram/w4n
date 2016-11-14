import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {


    sub: any;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

    constructor(
                private route: ActivatedRoute,
                private router: Router){
    }



    ngOnDestroy(){
        this.sub.unsubscribe();
    }

}
