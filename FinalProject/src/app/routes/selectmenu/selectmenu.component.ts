import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { NgSelectOption } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectmenu',
  templateUrl: './selectmenu.component.html',
  styleUrls: ['./selectmenu.component.css']
})
export class SelectmenuComponent implements OnInit {

  roundCounter = 1;
  maxRounds: number;

  constructor(public gameService: GameService, public router: Router) { }

  ngOnInit(): void {
    this.maxRounds = this.gameService.roundsSelect;
  }

  selectOption(playerWeapon: 'Rock' | 'Paper' | 'Scissors'){
    //this.gameService.roundsSelect = this.maxRounds;
    if(this.roundCounter != this.maxRounds){
      this.gameService.adduserselectiontoArray(playerWeapon,this.maxRounds,this.roundCounter)
      this.roundCounter++;
      console.log(this.maxRounds, this.roundCounter)
    }else{
      this.gameService.adduserselectiontoArray(playerWeapon,this.maxRounds,this.roundCounter)
      this.gameService.commitSelection(playerWeapon);
      this.router.navigateByUrl("/display");
      
    }
      

    
  }

}
