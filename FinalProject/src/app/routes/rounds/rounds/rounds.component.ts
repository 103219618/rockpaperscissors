import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { NgSelectOption } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {


  constructor(public gameService: GameService, public router: Router) { }

  ngOnInit(): void {
    this.gameService.userselectionArray = [];
    this.gameService.gameresultArray = [];
  }

  roundOption(roundsSelected: 1 | 3 | 5){
    this.gameService.roundsSelect = roundsSelected;
    this.router.navigateByUrl("/pick");
  

  }

}