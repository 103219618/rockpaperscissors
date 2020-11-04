import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(public leaderboardservice: LeaderboardService) { }

  ngOnInit(): void {
  }

}
