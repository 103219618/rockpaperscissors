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


  commitSelection(option: 'rock' | 'paper' | 'scissors') {
    of(null).pipe(delay(500 /*delay of 0.5 seconds*/)).subscribe(() => {
      this._selection = option;
      this.router.navigateByUrl("/display");
    }); //delaying

  }

}
