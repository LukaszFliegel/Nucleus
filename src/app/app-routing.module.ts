import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { NotFoundComponent } from './notFound.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: WelcomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
            //{ path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}