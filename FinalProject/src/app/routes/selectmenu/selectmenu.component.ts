import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-selectmenu',
  templateUrl: './selectmenu.component.html',
  styleUrls: ['./selectmenu.component.css']
})
export class SelectmenuComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  selectOption(playerWeapon: 'Rock' | 'Paper' | 'Scissors'){

    this.gameService.commitSelection(playerWeapon);
  }

}
