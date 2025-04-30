import { Component, inject, Input } from '@angular/core';
import { NameCheckerService } from '../../services/name-checker.service';
import { ActivatedRoute } from '@angular/router';
import { GamesInfo } from '../../interfaces/games-info';
import { GameListService } from '../../services/game-list.service';
import { MatButtonModule } from '@angular/material/button';
import { NameDataService } from '../../services/name-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-id-button',
  imports: [MatButtonModule],
  templateUrl: './id-button.component.html',
  styleUrl: './id-button.component.scss',
})
export class IdButtonComponent {

  constructor(private nameDataService: NameDataService) {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesInfo = this.gameService.getGameById(gameId);
  }

  @Input() id: string = '';
  @Input() userId: string = '';
  @Input() server: string = '';
  @Input() tag: string = '';
  @Input() zone_id: string = '';

  route: ActivatedRoute = inject(ActivatedRoute);
  nameCheckerService = inject(NameCheckerService);
  gameService = inject(GameListService);

  gamesInfo: GamesInfo | undefined;
  pageId = 0;

  getNextData(data: any) {
    this.nameDataService.setNextData(data);
    console.log(this.nameDataService.nameData?.data.username)
  }

  getGameID() {
    const emptyString = (this.id.trim() === '') ? alert('Please fill in field(s)!') : null;
    const gameId = this.gamesInfo?.id;

    const gameApiMap: Record<number, () => Observable<any>> = {
      0: () => this.nameCheckerService.getValorantID(this.id, this.tag),
      1: () => this.nameCheckerService.getMobileLegendsID(this.id, this.server),
      2: () => this.nameCheckerService.getJawakerID(this.userId),
      3: () => this.nameCheckerService.getPUBGID(this.id),
      4: () => this.nameCheckerService.getTeenPattiGold(this.id),
      5: () => this.nameCheckerService.getHiggsDomino(this.id),
      6: () => this.nameCheckerService.getGenshinImpact(this.id, this.server),
      7: () => this.nameCheckerService.getPointBlank(this.id),
      8: () => this.nameCheckerService.getArenaOfValor(this.id),
      9: () => this.nameCheckerService.getCallOfDuty(this.id),
      10: () => this.nameCheckerService.getAceRacer(this.id, this.server),
      11: () => this.nameCheckerService.getDragonRaja(this.id),
      12: () => this.nameCheckerService.getEggyParty(this.id),
      13: () => this.nameCheckerService.getBloodStrike(this.id),
      14: () => this.nameCheckerService.getTomAndJerryChase(this.id, this.server),
      15: () => this.nameCheckerService.getSpeedDrifters(this.id),
      16: () => this.nameCheckerService.getRevelation(this.id),
      17: () => this.nameCheckerService.getOnePunchMan(this.id, this.zone_id),
      18: () => this.nameCheckerService.getMUOrigin3(this.id),
      19: () => this.nameCheckerService.getMUDevilsAwaken(this.id, this.server),
      20: () => this.nameCheckerService.getMetalSlug(this.id),
      21: () => this.nameCheckerService.getHonorOfKings(this.id),
    };

    const apiCall = gameApiMap[gameId!];
    if (apiCall) {
      apiCall().subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
