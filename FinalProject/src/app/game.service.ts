import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private selection?: 'rock' | 'paper' | 'scissors';
  //private selection: 'rock' | 'paper' | 'scissors' | null; //same as above

  constructor() { }


  commitSelection(option: 'rock' | 'paper' | 'scissors') {
    this.selection = option;

  }

}
