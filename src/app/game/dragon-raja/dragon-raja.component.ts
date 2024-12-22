import { Component, inject } from '@angular/core';
import { NameCheckerResponse, NameCheckerService } from '../../name-checker.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dragon-raja',
  imports: [CommonModule, FormsModule],
  template: `
  <div class="content">
  <div class="title">
  <h1>Clash Royale Name Checker</h1>
  </div>
  <div class="description">
  <h2>Search for a user's name</h2>
  <h6>Enter the user's ID to see their username</h6>
  </div>
  <div class="search">
      <p class="username">{{nameData?.data?.username}}</p>
      <div *ngIf="nameData?.msg === 'id_found'">
        User found!
      </div>
  </div>
  
  <div class="input">
  <input class="text" type="text" [(ngModel)]="id" name="id">
  </div>
  <div class="button">
  
  <button (click)="getDragonRaja()">Check ID</button>
  </div>
  </div>
  `,
  styles: `
  .title{
      text-align: center; 
    }
    .search{
      text-align: center;
      margin-left: 30%;
      margin-right: 30%;
      display: block;
      code {
        margin-left: none;
      }
    }

    .description{
      text-align: center;
    }
    .button {
      text-align: center;
      display: block;
    }

    .input {
      text-align: center;
      display: block;
    }
    button{
      width: 200px;
    }

    html {
      display: grid;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      grid-template-columns: auto auto auto;
    }
    .content {
      margin-top: 10%
    }

    .username {
      color: green;
    }`
})
export class DragonRajaComponent {
  nameCheckerService = inject(NameCheckerService);
  id = ''
  nameData?: NameCheckerResponse;

  getDragonRaja() {
    if (this.id.trim() === '') {
      alert("Please insert user ID and server ID!")
    }

    this.nameCheckerService.getClashRoyale(this.id).subscribe({  
      next: (data) => {
        this.nameData = data;
        data.status
        console.log(
          this.nameData?.error,
          this.nameData?.status,
          this.nameData?.msg
        )
        if (this.nameData?.msg === 'id_not_found' || this.nameData?.error) {
          alert("Invalid user tag!");
          }
      },
      error: (err) => {
        console.error(err);
      },
  });
  } 
}
