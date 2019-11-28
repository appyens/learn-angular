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
import {Assignment3Component} from './assignment-3/assignment3.component';
import { CommunicationComponent } from './communication/communication.component';
import { CockpitComponent } from './communication/cockpit/cockpit.component';
import { ServerElementComponent } from './communication/server-element/server-element.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import {BasicHighlightDirective} from './directive-demo/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive-demo/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directive-demo/unless.directive';

@NgModule({
  declarations: [
    AppComponent,

    ServerComponent,
    ServersComponent,
    SuccessalertComponent,
    WarningalertComponent,
    AssignmentComponent,
    TestComponent,
    Assignment3Component,
    CommunicationComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assignment4Component,
    DirectiveDemoComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
