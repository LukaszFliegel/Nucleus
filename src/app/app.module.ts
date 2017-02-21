import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
//import { NotFoundComponent } from './notFound.component';
import { WelcomeComponent } from './welcome.component';

import { SharedModule } from '../shared/shared.module';
import { AchievementModule } from '../achievements/achievement.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AchievementModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent, MenuComponent ],
  exports: []
})
export class AppModule { }
