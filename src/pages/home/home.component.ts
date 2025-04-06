import {
  Component,
  inject,
  OnInit,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { GamesComponent } from '../../components/games/games.component';
import { GamesInfo } from '../../interfaces/games-info';
import { Tile } from '../../interfaces/tile';
import { GameListService } from '../../services/game-list.service';

//Material imports
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [
    GamesComponent,
    NgFor,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  gamesList: GamesInfo[] = [];
  gamesService = inject(GameListService);
  filteredGameList: GamesInfo[] = [];

  constructor(private elementRef: ElementRef) {
    this.gamesList = this.gamesService.getAllGames();
    this.filteredGameList = this.gamesList;
  }

  ngOnInit(): void {
    // Your existing initialization code
  }

  ngAfterViewInit() {
    this.initializeCardEffects();
  }

  filterGames(text: string) {
    if (!text) this.filteredGameList = this.gamesList;

    this.filteredGameList = this.gamesList.filter((game) =>
      game.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  private initializeCardEffects() {
    const cards = this.elementRef.nativeElement.querySelectorAll('.game-card');

    cards.forEach((card: HTMLElement) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
        const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees

        // Update CSS variables
        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        // Reset rotations
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      });
    });
  }
}
