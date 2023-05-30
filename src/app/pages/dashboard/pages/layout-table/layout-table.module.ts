import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutTableRoutingModule } from './layout-table-routing.module';
import { LayoutTableComponent } from './layout-table.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';


@NgModule({
  declarations: [
    LayoutTableComponent
  ],
  imports: [
    CommonModule,
    DashboardLayoutModule,
    LayoutTableRoutingModule
  ]
})
export class LayoutTableModule { }
