import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectmenuComponent } from './SelectMenu/selectmenu/selectmenu.component';
import { ScoreComponent } from './Score/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectmenuComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
