import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
