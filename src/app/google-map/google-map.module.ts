import { NgModule } from '@angular/core';
import { GoogleMapComponent } from './google-map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    declarations: [GoogleMapComponent],   
    imports: [
        AgmCoreModule.forRoot({
           apiKey: 'AIzaSyCI14fWEFAY7ITHFxUIBM72HPqukFDJXYs'
             })
             ],
    exports : [GoogleMapComponent],
})

export class GoogleMapModule {

}