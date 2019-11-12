import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
        .online {
            color: white;
        }
  `]
})
export class ServerComponent {
    private serverId = 10;
    private serverStatus = 'offline';
    private serversList = ['Test 1-Server', 'Test 2-Server', 'Test 3-Server'];

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
      return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}
