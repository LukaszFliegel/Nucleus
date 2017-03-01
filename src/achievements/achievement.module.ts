import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AchievementListComponent } from './achievement-list/achievement-list.component';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';

import { RouterModule } from '@angular/router';
import { AchievementRoutingModule } from './achievement-routing.module';

@NgModule({
    declarations: [
        AchievementListComponent,
        AchievementDetailComponent
    ],
    imports:[
        AchievementRoutingModule,
        BrowserModule,
        FormsModule
    ]
})
export class AchievementModule{
    
}