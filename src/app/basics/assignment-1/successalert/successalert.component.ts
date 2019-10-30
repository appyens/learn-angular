import {Component} from '@angular/core';

@Component({
  selector: 'app-successalert',
  template: `<input type="button" (click)="showAlert()" class="btn btn-success" value="Click me"><hr><p>This is success message</p>`,
  styles: [
    `
    p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
    }
    `
  ]
})
export class SuccessalertComponent {
    private message = 'I am success alert';

    showAlert() {
      alert(this.message);
    }

}

