import { Component, inject } from '@angular/core';
import { NameCheckerResponse } from '../../interfaces/name-checker-response';
import { NameCheckerService } from '../../services/name-checker.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-found',
  imports: [CommonModule],
  templateUrl: './user-found.component.html',
  styleUrl: './user-found.component.scss',
})
export class UserFoundComponent {
  nameData?: NameCheckerResponse;
}
