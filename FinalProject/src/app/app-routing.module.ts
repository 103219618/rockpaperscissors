import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './routes/leaderboard/leaderboard.component';
import { ScoreComponent } from './routes/score/score.component';
import { SelectmenuComponent } from './routes/selectmenu/selectmenu.component';

const routes: Routes = [
  { path: "pick", component: SelectmenuComponent },
  { path: "display", component: ScoreComponent },
  { path: "leaderboard", component: LeaderboardComponent },

  {path: "**", redirectTo: "pick"} //defaults to selectmenu component
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
