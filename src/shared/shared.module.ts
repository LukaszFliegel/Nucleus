import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';

import { NotFoundComponent } from './notFound.component';

@NgModule({
    declarations:[
        NotFoundComponent
    ],
    imports: [
        SharedRoutingModule
    ]
})
export class SharedModule{

}