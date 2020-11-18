import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectmenuComponent } from './routes/selectmenu/selectmenu.component';
import { ScoreComponent } from './routes/score/score.component';
import { UsernameComponent } from './routes/username/username.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LeaderboardComponent } from './routes/leaderboard/leaderboard.component';
import { RoundsComponent } from './routes/rounds/rounds/rounds.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectmenuComponent,
    ScoreComponent,
    UsernameComponent,
    LeaderboardComponent,
    RoundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
