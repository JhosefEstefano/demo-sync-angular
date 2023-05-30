import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HojaCalculoRoutingModule } from './hoja-calculo-routing.module';
import { HojaCalculoComponent } from './hoja-calculo.component';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';


@NgModule({
  declarations: [
    HojaCalculoComponent
  ],
  imports: [
    CommonModule,
    SpreadsheetAllModule,
    HojaCalculoRoutingModule
  ]
})
export class HojaCalculoModule { }
