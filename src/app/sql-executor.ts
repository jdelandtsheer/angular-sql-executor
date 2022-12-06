import { Component } from '@angular/core';

@Component({
  selector: 'sql-executor',
  template: `
    <input #newSql
      (keyup.enter)="addSql(newSql.value)"
      (blur)="addSql(newSql.value); newSql.value=''">

      <input #newSql
      (keyup.enter)="addSql(newSql.value)"
      (blur)="addSql(newSql.value); newSql.value='' ">

    <button type="button" (click)="addSql(newSql.value)">Add</button>

    <ul><li *ngFor="let query of queries">{{query}}</li></ul>
  `,
})
export class SqlExecutor {
  queries = ['select * from TABLE1'];
  addSql(newSql: string) {
    if (newSql) {
      this.queries.push(newSql);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
