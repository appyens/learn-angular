import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {SuccessalertComponent} from './assignment-1/successalert/successalert.component';
import {WarningalertComponent} from './assignment-1/warningalert/warningalert.component';
import {FormsModule} from '@angular/forms';
import {AssignmentComponent} from './assignment-2/assignment.component';
import {TestComponent} from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessalertComponent,
    WarningalertComponent,
    AssignmentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
