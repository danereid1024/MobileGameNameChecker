import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesInfo } from '../../interfaces/games-info';
import { Tile } from '../../interfaces/tile';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-games',
  imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatListModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  @Input() gamesDetails!:GamesInfo;


}
