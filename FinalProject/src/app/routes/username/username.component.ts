import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }
  
  userName(userName): void {
    this.gameService.username = userName;
  }
}
