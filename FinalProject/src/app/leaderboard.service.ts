import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaderboardsEnvelope } from './classes/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  public leaderboards: LeaderboardsEnvelope;

  constructor(private HttpClient: HttpClient) { }
  leaderboardrequest(){
    let request = this.HttpClient.get<LeaderboardsEnvelope>("https://my-json-server.typicode.com/kmalikkhil/json/Leaderboard");
    request.subscribe((response) => {
    this.leaderboards = response
    });
  }
}
