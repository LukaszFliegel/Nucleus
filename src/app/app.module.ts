import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { NotFoundComponent } from './notFound.component';
import { WelcomeComponent } from './welcome.component';

import { AchievementModule } from '../achievements/achievement.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]),
    AchievementModule
  ],
  providers: [],
  bootstrap: [ AppComponent, MenuComponent ],
  exports: []
})
export class AppModule { }
