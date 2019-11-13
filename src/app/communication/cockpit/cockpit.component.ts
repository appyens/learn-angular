import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';
  // alternative to template reference variable
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(referenceInput: HTMLInputElement) {
    console.log(this.serverContentInput);

    this.serverCreated.emit({
      // serverName: this.newServerName,
      // reference varialbe demo
      serverName: referenceInput.value,
      // serverContent: this.newServerContent
      // for ViewChiled() demo purpose
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(referenceInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      // reference varialbe demo
      serverName: referenceInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
