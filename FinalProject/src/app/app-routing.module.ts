import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './routes/score/score.component';
import { SelectmenuComponent } from './routes/selectmenu/selectmenu.component';

const routes: Routes = [
  { path: "pick", component: SelectmenuComponent },
  { path: "display", component: ScoreComponent },

  {path: "**", redirectTo: "pick"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
