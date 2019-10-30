import {Component} from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
    showDetails = false;
    statement = 'My name is Anurag';
    log = [];

    toggleDetails(event) {
      this.showDetails = !this.showDetails;
      this.log.push(this.log.length + 1);
    }
}
