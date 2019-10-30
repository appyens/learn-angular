import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './basics/server/server.component';
import { ServersComponent } from './basics/servers/servers.component';
import {SuccessalertComponent} from './basics/assignment-1/successalert/successalert.component';
import {WarningalertComponent} from './basics/assignment-1/warningalert/warningalert.component';
import {FormsModule} from '@angular/forms';
import {AssignmentComponent} from './basics/assignment-2/assignment.component';
import {TestComponent} from './basics/test/test.component';
import {Assignment3Component} from './basics/assignment-3/assignment3.component';
import { BasicMainComponent } from './basics/basic-main/basic-main.component';
import { HeaderComponent } from './project/header/header.component';
import { RecipesComponent } from './project/recipes/recipes.component';
import { RecipeListComponent } from './project/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    // bsics
    ServerComponent,
    ServersComponent,
    SuccessalertComponent,
    WarningalertComponent,
    AssignmentComponent,
    TestComponent,
    Assignment3Component,
    BasicMainComponent,
    // project
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
