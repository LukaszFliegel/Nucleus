import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AchievementListComponent } from './achievementList.component';

import { RouterModule } from '@angular/router';
import { AchievementRoutingModule } from './achievement-routing.module';

@NgModule({
    declarations: [
        AchievementListComponent
    ],
    imports:[
        AchievementRoutingModule,
        BrowserModule
    ]
})
export class AchievementModule{
    
}