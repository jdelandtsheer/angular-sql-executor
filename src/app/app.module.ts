import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SqlExecutor } from './sql-executor';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SqlExecutor,
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/