import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { GamesComponent } from '../../components/games/games.component';
import { GamesInfo } from '../../interfaces/games-info';
import { Tile } from '../../interfaces/tile';
import { GameListService } from '../../services/game-list.service';

//Material imports
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [GamesComponent, NgFor, MatGridListModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  gamesList: GamesInfo[] = [];
  gamesService = inject(GameListService);

  constructor() {
    this.gamesList = this.gamesService.getAllGames();
  }
}
