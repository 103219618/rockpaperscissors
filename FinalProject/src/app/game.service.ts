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
  public roundsSelect: number;
  public username: string;
  public userselectionArray:PlayerChoice[] = [];
  public gameresultArray: any = [];


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

  adduserselectiontoArray(userselected: string, maxrounds: number, roundcounter: number){
    let Data = {
      playerChoice: userselected,
      userName: this.username,
      currentRound: roundcounter,
      maxRound: this.roundsSelect
    }

    this.userselectionArray.push(Data);
  }


  commitSelection(selectOption) {

    let request = this.httpclient.post<GameResult>("http://localhost:5000/Game", this.userselectionArray);
    request.subscribe((response) => {
      console.log(response);
      this.gameresultArray = response;
      
      //this._selection = response.playerChoice;
      //this._comChoice = response.comChoice;
      //this._result = response.gameResult;

      //this.router.navigateByUrl("/display");
    });


  }

  /*commitRoundSelection(roundsSelect: number) {

    let request = this.httpclient.post<RoundsSelect>("http://localhost:5000/Game", {
      roundsSelect: this._roundsSelect
    } as RoundsSelect);
    console.log(this._roundsSelect);
    request.subscribe((response) => {
      console.log(response);
      this._roundsSelect = response.roundsSelect;

      this.router.navigateByUrl("/pick");
    });


  }*/
}