import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _selection?: 'rock' | 'paper' | 'scissors'; //using _ for private as public selection is used below
  //private selection: 'rock' | 'paper' | 'scissors' | null; //same as above


  get selection() {
    return this._selection;
  }

  constructor(private router: Router) { }


  commitSelection(selectOption) {
    of(null).pipe(delay(500 /*delay of 0.5 seconds*/)).subscribe(() => {
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
      'rock',
      'paper',
      'scissors'
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
    }, 1000);

  }

  //timer to clear selection for the next draw.
  clearField() {
    setTimeout(() => {
      this.status = '';
      this.playerSelected = '';
      this.comSelected = '';
    }, 10000);
  }

  //calls winner on user or comp based on the results
  win(player, com) {
    this.playerScore++;
    this.playerSelected = player;
    this.comSelected = com;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }

  //calls looser on user or comp based on the results
  lose(player, com) {
    this.comScore++;
    this.playerSelected = player;
    this.comSelected = com;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  //calls draw based on the result
  draw(player, com) {
    this.playerSelected = player;
    this.comSelected = com;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const playerChoice = this.playerSelected;
    const comChoice = this.comSelected;
    switch (playerChoice + comChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(playerChoice, comChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(playerChoice, comChoice);
        break;
      default:
        this.draw(playerChoice, comChoice);
        break;

    }
  }

}
