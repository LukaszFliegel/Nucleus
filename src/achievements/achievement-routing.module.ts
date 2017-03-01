import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AchievementListComponent } from './achievement-list/achievement-list.component';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'achievements', component: AchievementListComponent },
            { path: 'detail/:id', component: AchievementDetailComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AchievementRoutingModule{

}