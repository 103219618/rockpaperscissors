import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-selectmenu',
  templateUrl: './selectmenu.component.html',
  styleUrls: ['./selectmenu.component.css']
})
export class SelectmenuComponent implements OnInit {

  constructor(private gameService: GameService) { }

  playerScore = 0;
  comScore = 0;

  playerSelected: string;
  comSelected: string;
  action: string;
  status: string;
  comWeapon = [
    'rock',
    'paper',
    'scissors'
  ]

  ngOnInit(): void {
  }

  selectOption(playerWeapon: 'rock' | 'paper' | 'scissors'){
    this.gameService.commitSelection(playerWeapon);

  

  }

}
