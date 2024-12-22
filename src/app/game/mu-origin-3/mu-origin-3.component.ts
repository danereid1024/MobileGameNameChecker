import { Component, inject } from '@angular/core';
import { NameCheckerResponse, NameCheckerService } from '../../name-checker.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mu-origin-3',
  imports: [FormsModule, CommonModule],
  template: `
    <p>
      mu-origin-3 works!
    </p>
  `,
  styles: ``
})
export class MuOrigin3Component {

}
