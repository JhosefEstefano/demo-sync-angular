import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ScheduleModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
