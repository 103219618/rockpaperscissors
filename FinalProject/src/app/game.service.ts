import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GameResult, PlayerChoice } from './classes/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _selection?: string; //using _ for private as public selection is used below
  //private selection: 'rock' | 'paper' | 'scissors' | null; //same as above
  private _comChoice?: string;
  private _result?: string;

  public username: string;

  get selection() {
    return this._selection;
  }

  get comChoice() {
    return this._comChoice;
  }

  get result() {
    return this._result;
  }

  constructor(private router: Router, private httpclient: HttpClient) { }


  commitSelection(selectOption) {

    let request = this.httpclient.post<GameResult>("http://localhost:5000/Game", {
      playerChoice: selectOption,
      userName: this.username
    } as PlayerChoice);
    request.subscribe((response) => {
      console.log(response);
      this._selection = response.playerChoice;
      this._comChoice = response.comChoice;
      this._result = response.gameResult;

      this.router.navigateByUrl("/display");
    });


  }
}