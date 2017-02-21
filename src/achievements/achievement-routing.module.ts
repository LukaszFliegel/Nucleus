import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AchievementListComponent } from './achievementList.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'achievements', component: AchievementListComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AchievementRoutingModule{

}