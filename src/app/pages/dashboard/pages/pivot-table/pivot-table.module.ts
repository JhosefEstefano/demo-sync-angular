import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PivotTableRoutingModule } from './pivot-table-routing.module';
import { PivotTableComponent } from './pivot-table.component';
import { PivotFieldListAllModule, PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { BrowserModule } from '@angular/platform-browser';

// import { PivotFieldListAllModule, PivotModule } from '@syncfusion/ej2-angular-pivotview';

@NgModule({
  declarations: [
    PivotTableComponent
  ],
  imports: [
    CommonModule,
    PivotViewModule,
    PivotFieldListAllModule,
    PivotTableRoutingModule
  ]
})
export class PivotTableModule { }
