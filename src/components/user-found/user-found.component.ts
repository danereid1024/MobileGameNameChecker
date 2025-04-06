import { Component, inject, OnInit } from '@angular/core';
import { NameCheckerService } from '../../services/name-checker.service';
import { CommonModule } from '@angular/common';
import { NameDataService } from '../../services/name-data.service';

@Component({
  selector: 'app-user-found',
  imports: [CommonModule],
  templateUrl: './user-found.component.html',
  styleUrl: './user-found.component.scss',
})
export class UserFoundComponent implements OnInit {

  public nameDataService: NameDataService = inject(NameDataService);

  checkUser() {
    console.log(this.nameDataService.nameData?.data.username);
  }
  ngOnInit(): void {
    
  }
  constructor() {

  }

}