import { Component, inject, Input, ViewChild } from '@angular/core';
import { NameCheckerService } from '../../services/name-checker.service';
import { ActivatedRoute } from '@angular/router';
import { GamesInfo } from '../../interfaces/games-info';
import { GameListService } from '../../services/game-list.service';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NameCheckerResponse } from '../../interfaces/name-checker-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-id-button',
  imports: [MatButtonModule, NgIf],
  templateUrl: './id-button.component.html',
  styleUrl: './id-button.component.scss',
})
export class IdButtonComponent {
  @Input() id: string = '';
  @Input() userId: string = '';
  @Input() server: string = '';
  @Input() tag: string = '';
  @Input() zone_id: string = '';

  route: ActivatedRoute = inject(ActivatedRoute);
  nameCheckerService = inject(NameCheckerService);
  gameService = inject(GameListService);

  nameData?: NameCheckerResponse;
  gamesInfo: GamesInfo | undefined;

  pageId = 0;

  constructor() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesInfo = this.gameService.getGameById(gameId);
  }

  getNextData(data: any) {
    this.nameData = data;
    data.status;
    console.log(
      this.nameData?.error,
      this.nameData?.status,
      this.nameData?.msg
    );
    if (this.nameData?.msg === 'id_not_found' || this.nameData?.error) {
      alert('Invalid user ID!');
    }
  }

  getGameID() {
    if (this.id.trim() === '') {
      alert('Please insert user ID and server ID!');
    }
    if (this.gamesInfo?.id === 0) {
      this.nameCheckerService.getValorantID(this.id, this.tag).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 1) {
      this.nameCheckerService
        .getMobileLegendsID(this.id, this.server)
        .subscribe({
          next: (data) => {
            this.getNextData(data);
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else if (this.gamesInfo?.id === 2) {
      this.nameCheckerService.getJawakerID(this.userId).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 3) {
      this.nameCheckerService.getPUBGID(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 4) {
      this.nameCheckerService.getTeenPattiGold(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 5) {
      this.nameCheckerService.getHiggsDomino(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 6) {
      this.nameCheckerService.getGenshinImpact(this.id, this.server).subscribe({
        next: (data) => {
          this.nameData = data;
          data.status
          console.log(
            this.nameData?.error,
            this.nameData?.status,
            this.nameData?.msg
          )
          if (this.nameData?.msg === 'id_not_found' || this.nameData?.error) {
            alert("Invalid user ID!");
            }
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
    if (this.gamesInfo?.id === 7) {
      this.nameCheckerService.getPointBlank(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 8) {
      this.nameCheckerService.getArenaOfValor(this.userId).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 9) {
      this.nameCheckerService.getCallOfDuty(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 10) {
      this.nameCheckerService.getAceRacer(this.id, this.server).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 11) {
      this.nameCheckerService.getDragonRaja(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 12) {
      this.nameCheckerService.getEggyParty(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 13) {
      this.nameCheckerService.getBloodStrike(this.userId).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 14) {
      this.nameCheckerService
        .getTomAndJerryChase(this.id, this.server)
        .subscribe({
          next: (data) => {
            this.getNextData(data);
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else if (this.gamesInfo?.id === 15) {
      this.nameCheckerService.getSpeedDrifters(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 16) {
      this.nameCheckerService.getRevelation(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 17) {
      this.nameCheckerService.getOnePunchMan(this.id, this.zone_id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 18) {
      this.nameCheckerService.getMUOrigin3(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 19) {
      this.nameCheckerService
        .getMUDevilsAwaken(this.id, this.server)
        .subscribe({
          next: (data) => {
            this.getNextData(data);
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else if (this.gamesInfo?.id === 20) {
      this.nameCheckerService.getMetalSlug(this.id).subscribe({
        next: (data) => {
          this.getNextData(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else if (this.gamesInfo?.id === 21) {
      this.nameCheckerService.getHonorOfKings(this.id).subscribe({
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
