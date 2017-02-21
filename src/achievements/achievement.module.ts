import { NgModule } from '@angular/core';

import { AchievementListComponent } from './achievementList.component';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AchievementListComponent
    ],
    imports:[
        RouterModule.forChild([
            { path: 'achievements', component: AchievementListComponent }
        ])
    ]
})
export class AchievementModule{
    
}