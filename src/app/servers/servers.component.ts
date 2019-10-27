import { Component, OnInit } from '@angular/core';

@Component({
  // you can use attribute selectors
  // selector: '[app-servers]',
  // you can use css class selectore
  // selector: '.app-servers',
  selector: 'app-servers',
  // inline template
  // inline template overrides separate template
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  // you can add multiple style sheets
  // you can write inline css
  // styles: [`
  //   h3 {
  //       color: red;
  //   }
  // `]
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private isDisabled = true;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created and the name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
