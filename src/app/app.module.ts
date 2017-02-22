import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { WelcomeComponent } from './welcome.component';

import { SharedModule } from '../shared/shared.module';
import { AchievementModule } from '../achievements/achievement.module';
import { AppRoutingModule } from './app-routing.module';

import { AchievementsService } from '../achievements/achievements.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AchievementModule,
    SharedModule
  ],
  providers: [ AchievementsService ],
  bootstrap: [ AppComponent ],
  exports: []
})
export class AppModule { }
