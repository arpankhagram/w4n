import { NgModule } from '@angular/core';
import { IconsComponent } from './icons.component';
import { BarDirective } from './icons-directives/bar.directive';
import { PieDirective} from './icons-directives/pie-directive.directive';
import { BarDirectivesO } from './icons-directives/bar-directives-o.directive';
import { LineDirective } from './icons-directives/line-directives.directive';

@NgModule({
    declarations: [IconsComponent, BarDirective, PieDirective, BarDirectivesO, LineDirective],   
    imports :[], 
    exports : [IconsComponent],
})

export class IconsModule {

}