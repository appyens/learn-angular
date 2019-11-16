import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // making event listenable from outside by using Out
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
  this.interval = setInterval(() => {
    // emitting event on button click
    this.intervalFired.emit(this.lastNumber + 1);
    this.lastNumber++;
  }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
