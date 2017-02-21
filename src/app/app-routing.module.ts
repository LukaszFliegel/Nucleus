import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { NotFoundComponent } from './notFound.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' }
            //{ path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}