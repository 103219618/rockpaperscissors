import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _selection?: 'Rock' | 'Paper' | 'Scissors'; //using _ for private as public selection is used below
  //private selection: 'rock' | 'paper' | 'scissors' | null; //same as above


  get selection() {
    return this._selection;
  }

  constructor(private router: Router) { }


  commitSelection(selectOption) {
    of(null).pipe(delay(0 /*delay of 0 seconds*/)).subscribe(() => {
      this._selection = selectOption;
      this.selectOption(this.selection);
      this.router.navigateByUrl("/display");
    }); //delaying

  }
    playerScore = 0;
    comScore = 0;
    playerSelected: string; // Which weapon user selected
    comSelected: string; //which weapon computer selected
    action: string; //is known whether user weapon beats or loses to computer
    status: string; //know whether it's a win or lose
    comWeapon = [
      'Rock',
      'Paper',
      'Scissors'
    ];

    //userPick function which is executed whenever a 'weapon' is clicked
    selectOption(playerWeapon: string): void {
      this.playerSelected = playerWeapon;
      console.log(this.playerSelected);
      setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.comSelected = this.comWeapon[randomNum];
      console.log(this.comSelected);
      this.checkResult();
    }, 100);

  }

  //timer to clear selection for the next draw.
  clearField() {
    setTimeout(() => {
      this.status = '';
      this.playerSelected = '';
      this.comSelected = '';
    }, 1000);
  }

  //calls winner on user or comp based on the results
  win(player, com) {
    this.playerScore++;
    this.playerSelected = player;
    this.comSelected = com;
    this.action = 'Beats';
    this.status = '. You Win!';
    //this.clearField();
  }

  //calls looser on user or comp based on the results
  lose(player, com) {
    this.comScore++;
    this.playerSelected = player;
    this.comSelected = com;
    this.action = 'Loses to';
    this.status = '. You Lose!';
    //this.clearField();
  }

  //calls draw based on the result
  draw(player, com) {
    this.playerSelected = player;
    this.comSelected = com;
    this.action = '&';
    this.status = '. You Draw!';
    //this.clearField();
  }

  checkResult() {
    const playerChoice = this.playerSelected;
    const comChoice = this.comSelected;
    switch (playerChoice + comChoice) {
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
        this.win(playerChoice, comChoice);
        break;
      case 'RockPaper':
      case 'ScissorsRock':
      case 'PaperScissors':
        this.lose(playerChoice, comChoice);
        break;
      default:
        this.draw(playerChoice, comChoice);
        break;
    }

  }
}