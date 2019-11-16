import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(eventData: number) {
    console.log(eventData);
    if (eventData % 2 === 0 ) {
      this.evenNumbers.push(eventData);
    } else {
      this.oddNumbers.push(eventData);
    }
  }

}
