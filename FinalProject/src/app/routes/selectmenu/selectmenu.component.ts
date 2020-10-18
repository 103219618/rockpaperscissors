import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-selectmenu',
  templateUrl: './selectmenu.component.html',
  styleUrls: ['./selectmenu.component.css']
})
export class SelectmenuComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  selectOption(option: 'rock' | 'paper' | 'scissors'){
    this.gameService.commitSelection(option);

  }

}
