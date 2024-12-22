import { Component, inject } from '@angular/core';
import { GameNameCheckerComponent } from "../game-name-checker/game-name-checker.component";
import { NameCheckerResponse, NameCheckerService } from '../name-checker.service';

@Component({
  selector: 'app-game-test-1',
  imports: [],
  template: `
  <p>
      game-test-1 works!
    </p>
  `,
  styles: ``
})

export class GameTest1Component {
  
  nameCheckerService = inject(NameCheckerService)
  nameData?: NameCheckerResponse;
  id = ''
  
  games = [
    {
      title: 'PUBG',
      userNumber: 'ID',
      actionLabel: 'Get ID',
      getID: () => {if (this.id.trim() === '') {
        alert("Please insert user ID!")
      }
  
      this.nameCheckerService.getPUBGID(this.id).subscribe({  
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
  }
  ]
}
