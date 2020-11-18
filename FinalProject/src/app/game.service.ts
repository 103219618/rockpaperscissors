import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GameResult, PlayerChoice, RoundsSelect } from './classes/game';
import { SelectmenuComponent } from './routes/selectmenu/selectmenu.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _selection?: string; //using _ for private as public selection is used below
  //private selection: 'rock' | 'paper' | 'scissors' | null; //same as above
  private _comChoice?: string;
  private _result?: string;
  
  private _roundsSelect?: string;

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

  get roundsSelection() {
    return this. _roundsSelect;
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

  commitRoundSelection(roundsSelect: string) {

    let request = this.httpclient.post<RoundsSelect>("http://localhost:5000/Game", {
      roundsSelect: this._roundsSelect
    } as RoundsSelect);
    console.log(this._roundsSelect);
    request.subscribe((response) => {
      console.log(response);
      this._roundsSelect = response.roundsSelect;
      console.log(response)

      this.router.navigateByUrl("/selectmenu");
    });


  }
}