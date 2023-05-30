import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsRoutingModule } from './grids-routing.module';
import { GridsComponent } from './grids.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [
    GridsComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    GridsRoutingModule
  ]
})
export class GridsModule { }
