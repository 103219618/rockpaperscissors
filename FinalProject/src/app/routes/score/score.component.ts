import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    
    }
  }


/*ngOnInit(): void {
  if (this.gameService.selection == null) {
    this.router.navigateByUrl("/pick") // defaults to selectmenu when manually entering page
    }*/
