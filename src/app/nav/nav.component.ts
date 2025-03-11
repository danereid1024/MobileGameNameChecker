import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet, RouterLink],
  template: `

    <nav class="navbar bg-body-tertiary fixed-top bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mobile Game Name Checker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Mobile Game Name Checker</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="valorant">Valorant</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="mobile-legends">Mobile Legends</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="jawaker">Jawaker</a>
          </li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="pubg">PUBG Mobile</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="royal-dream">Royal Dream</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="teen-patti-gold">Teen Patti Gold</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="brawl-stars">Brawl Stars</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="clash-royale">Clash Royale</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="coc">Clash of Clans</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="higgs-domino">Higgs Domino</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="genshin">Genshin Impact</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="point-blank">Point Blank</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="arena-of-valor">Arena of Valor</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="cod-mobile">Call of Duty Mobile</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="ace-racer">Ace Racer</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="lifeafter">Life After</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="dragon-raja">Dragon Raja</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="eggy-party">Eggy Party</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="hayday">Hay Day</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="blood-strike">Blood Strike</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="tom-and-jerry-chase">Tom and Jerry Chase</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="speed-drifters">Speed Drifters</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="revelation">Revelation</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="opm-the-strongest">One Punch Man: The Strongest</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="mu-origin-3">MU: Origin 3</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="mu-devils-awaken">MU: Devils Awaken</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="metal-slug">Metal Slug</a></li>
    <li class="nav-item"><a class="nav-link active" aria-current="page" routerLink="honor-of-kings">Honor of Kings</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    <router-outlet></router-outlet>
  `,
  styles: `li {
    display: inline;
    padding: 1em;
  }`
})
export class NavComponent {

  constructor(private cdr: ChangeDetectorRef) { }


  gameName = '';

  valorantButton() {
    return this.gameName = 'valorant'
  }
}
