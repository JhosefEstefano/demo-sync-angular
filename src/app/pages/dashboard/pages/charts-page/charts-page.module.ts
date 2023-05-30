import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';

import {
  ChartAllModule,
  AccumulationChartAllModule,
  RangeNavigatorAllModule,
} from '@syncfusion/ej2-angular-charts';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartsPageRoutingModule } from './charts-page-routing.module';
import { ChartsPageComponent } from './charts-page.component';

@NgModule({
  declarations: [ChartsPageComponent],
  imports: [
    CommonModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    ButtonModule,
    AccumulationChartAllModule,
    NumericTextBoxModule,
    DatePickerModule,
    DropDownListAllModule,
    DashboardLayoutModule,
    ChartsPageRoutingModule,
  ],
})
export class ChartsPageModule {}
