import {Component} from '@angular/core';

@Component({
  selector: 'app-warningalert',
  template: `<input type="button" value="Click me" (click)="showAlert()" class="btn btn-danger"><p class="m-3">This is warning message</p>`,
  styles: [
    `
    p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
    }
    `
  ]
})
export class WarningalertComponent {
  private message = 'I am warning alert';

  showAlert() {
    alert(this.message);
  }
}
