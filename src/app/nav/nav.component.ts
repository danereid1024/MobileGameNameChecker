import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GameNameCheckerComponent } from "../game-name-checker/game-name-checker.component";

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet, RouterLink],
  template: `
    <li><a  routerLink="valorant">Valorant</a></li>
    <li><a routerLink="mobile-legends">Mobile Legends</a></li>
    <li><a routerLink="jawaker">Jawaker</a></li>
    <li><a routerLink="pubg">PUBG Mobile</a></li>
    <li><a routerLink="royal-dream">Royal Dream</a></li>
    <li><a routerLink="teen-patti-gold">Teen Patti Gold</a></li>
    <li><a routerLink="brawl-stars">Brawl Stars</a></li>
    <li><a routerLink="clash-royale">Clash Royale</a></li>
    <li><a routerLink="coc">Clash of Clans</a></li>
    <li><a routerLink="higgs-domino">Higgs Domino</a></li>
    <li><a routerLink="genshin">Genshin Impact</a></li>
    <li><a routerLink="point-blank">Point Blank</a></li>
    <li><a routerLink="arena-of-valor">Arena of Valor</a></li>
    <li><a routerLink="cod-mobile">Call of Duty Mobile</a></li>
    <li><a routerLink="ace-racer">Ace Racer</a></li>
    <li><a routerLink="lifeafter">Life After</a></li>
    <li><a routerLink="dragon-raja">Dragon Raja</a></li>
    <li><a routerLink="eggy-party">Eggy Party</a></li>
    <li><a routerLink="hayday">Hay Day</a></li>
    <li><a routerLink="blood-strike">Blood Strike</a></li>
    <li><a routerLink="tom-and-jerry-chase">Tom and Jerry Chase</a></li>
    <li><a routerLink="speed-drifters">Speed Drifters</a></li>
    <li><a routerLink="revelation">Revelation</a></li>
    <li><a routerLink="opm-the-strongest">One Punch Man: The Strongest</a></li>
    <li><a routerLink="mu-origin-3">MU: Origin 3</a></li>
    <li><a routerLink="mu-devils-awaken">MU: Devils Awaken</a></li>
    <li><a routerLink="metal-slug">Metal Slug</a></li>
    <li><a routerLink="honor-of-kings">Honor of Kings</a></li>
    
    <router-outlet></router-outlet>
  `,
  styles: `li {
    display: inline;
    padding: 1em;
  }`
})
export class NavComponent {

  gameName = '';

  valorantButton() {
    return this.gameName = 'valorant'
  }
}
