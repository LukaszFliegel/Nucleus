import { NgModule } from '@angular/core';

import { AchievementListComponent } from './achievementList.component';

import { RouterModule } from '@angular/router';
import { AchievementRoutingModule } from './achievement-routing.module';

@NgModule({
    declarations: [
        AchievementListComponent
    ],
    imports:[
        AchievementRoutingModule
    ]
})
export class AchievementModule{
    
}