import { Component, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../../services/game-list.service';
import { GamesInfo } from '../../interfaces/games-info';
import { IdInputComponent } from '../../components/id-input/id-input.component';
import { UserFoundComponent } from '../../components/user-found/user-found.component';
import { IdButtonComponent } from "../../components/id-button/id-button.component";


@Component({
  selector: 'app-id-search',
  imports: [CommonModule, IdInputComponent, UserFoundComponent, IdButtonComponent],
  templateUrl: './id-search.component.html',
  styleUrl: './id-search.component.scss'
})
export class IdSearchComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  gameService = inject(GameListService);
  gamesInfo : GamesInfo | undefined;

  gamepageId?: any

  id: any = ''
  server: string = '';
  tag: string = '';
  // zone_id: string;

  updateId(newId: any) {
    this.id = newId;

  }

  updateServer(newServer: string) {
    this.server = newServer;
  }

  constructor() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesInfo = this.gameService.getGameById(gameId);
    console.log(this.gamesInfo);

    this.gamepageId = this.gamesInfo

  }
}
