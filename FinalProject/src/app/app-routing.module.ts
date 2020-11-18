import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './routes/leaderboard/leaderboard.component';
import { ScoreComponent } from './routes/score/score.component';
import { SelectmenuComponent } from './routes/selectmenu/selectmenu.component';
import { RoundsComponent } from './routes/rounds/rounds/rounds.component';

const routes: Routes = [
  { path: "pick", component: SelectmenuComponent },
  { path: "display", component: ScoreComponent },
  { path: "leaderboard", component: LeaderboardComponent },
  { path: "rounds", component: RoundsComponent },


  {path: "**", redirectTo: "rounds"} //defaults to selectmenu component
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
