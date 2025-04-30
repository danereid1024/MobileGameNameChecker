import { Component, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { GamesInfo } from '../../interfaces/games-info';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../../services/game-list.service';

@Component({
  selector: 'app-id-input',
  imports: [CommonModule, FormsModule, MatInputModule],
  templateUrl: './id-input.component.html',
  styleUrl: './id-input.component.scss',
})
export class IdInputComponent implements OnInit {
  String(arg0: number | undefined): string {
    throw new Error('Method not implemented.');
  }
  convertToString(value: any): string {
    return String(value); // Convert to string logic
  }

  @Output() idChanged = new EventEmitter<any>();
  @Output() userIdChanged = new EventEmitter<string>();
  @Output() serverChanged = new EventEmitter<string>();
  @Output() tagChanged = new EventEmitter<string>();
  @Output() zoneIdChanged = new EventEmitter<string>();
  @Output() nameDataChanged = new EventEmitter<any>();

  route: ActivatedRoute = inject(ActivatedRoute);
  gamesInfo: GamesInfo | undefined;
  gameService = inject(GameListService);

  
  pageId = false;
  pageUserId = false;
  pageTag = false;
  pageServer = false;
  pageZoneId = false;

  constructor() {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gamesInfo = this.gameService.getGameById(gameId);
  }

  ngOnInit(): void {

    const id = this.gamesInfo?.id;

    const idOnlySet = new Set([3, 4, 5, 7, 8, 9, 11, 13, 15, 16, 18, 20, 21]);
    const userIdOnlySet = new Set([2]);
    const idAndServerSet = new Set([1, 6, 10, 12, 14, 19]);
    const idAndTagSet = new Set([0]);
    const idAndZoneIdSet = new Set([17]);

    if (id !== undefined && idAndTagSet.has(id)) {
      this.pageId = true;
      this.pageTag = true;
    } else if (id !== undefined && userIdOnlySet.has(id)) {
      this.pageUserId = true;
    }else if (id !== undefined && idAndServerSet.has(id)) {
      this.pageId = true;
      this.pageServer = true;
    } else if (id !== undefined && idAndZoneIdSet.has(id)) {
      this.pageId = true;
      this.pageZoneId = true;
    } else if (id !== undefined && idOnlySet.has(id)) {
      this.pageId = true;
    }

    // switch (this.gamesInfo?.id) {
    //   case 0:
    //     this.pageId = true;
    //     this.pageTag = true;
    //     break;
    //   case 1:
    //     this.pageId = true;
    //     this.pageServer = true;
    //     break;
    //   case 2:
    //   case 3:
    //   case 4:
    //   case 5:
    //     this.pageId = true;
    //     break;
    //   case 6:
    //     this.pageId = true;
    //     this.pageServer = true;
    //     break;
    //   case 7:
    //   case 8:
    //   case 9:
    //     this.pageId = true;
    //     break;
    //   case 10:
    //     this.pageId = true;
    //     this.pageServer = true;
    //     break;
    //   case 11:
    //     this.pageId = true;
    //     break;
    //   case 12:
    //     this.pageId = true;
    //     this.pageServer = true;
    //     break;
    //   case 13:
    //     this.pageId = true;
    //     break;
    //   case 14:
    //     this.pageId = true;
    //     this.pageServer = true;
    //     break;
    //   case 15:
    //   case 16:
    //     this.pageId = true;
    //     break;
    //   case 17:
    //     this.pageId = true;
    //     this.pageZoneId = true;
    //     break;
    //   case 18:
    //     this.pageId = true;
    //     break;
    //   case 19:
    //     this.pageId = true;
    //     this.pageServer = true;
    //     break;
    //   case 20:
    //   case 21:
    //     this.pageId = true;
    //     break;
    // }
  }

  onIdInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.idChanged.emit(inputValue);
  }

  onUserIdInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.userIdChanged.emit(inputValue);
  }

  onServerInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.serverChanged.emit(inputValue);
  }

  onTagInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.tagChanged.emit(inputValue);
  }

  onZoneIdInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.zoneIdChanged.emit(inputValue);
  }



  /*
      this.userIdChanged.emit(inputValue);
    
    this.tagChanged.emit(inputValue);
    this.zoneIdChanged.emit(inputValue);
  */
}
