import { Component } from '@angular/core';
import { LeaderboardComponent } from './routes/leaderboard/leaderboard.component';
import { LeaderboardService } from './leaderboard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';

  constructor(public leaderboardService: LeaderboardService){

  }

  getleaderboard(){
    this.leaderboardService.leaderboardrequest();
  }
}
