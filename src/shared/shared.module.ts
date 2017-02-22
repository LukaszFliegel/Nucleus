import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedRoutingModule } from './shared-routing.module';

import { NotFoundComponent } from './notFound.component';

@NgModule({
    declarations:[
        NotFoundComponent
    ],
    imports: [
        SharedRoutingModule
    ],
    exports:[
        BrowserModule
    ]
})
export class SharedModule{

}