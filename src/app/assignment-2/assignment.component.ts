import {Component} from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment.component.html',
})
export class AssignmentComponent {
  private username = '';

  resetUsername() {
    if (this.username.length > 0) {
      this.username = '';
    }
  }
}
