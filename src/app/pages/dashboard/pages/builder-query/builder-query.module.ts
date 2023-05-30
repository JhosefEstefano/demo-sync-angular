import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderQueryRoutingModule } from './builder-query-routing.module';
import { BuilderQueryComponent } from './builder-query.component';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';

import { DialogModule } from '@syncfusion/ej2-angular-popups';


@NgModule({
  declarations: [
    BuilderQueryComponent
  ],
  imports: [
    CommonModule,QueryBuilderModule,
    BuilderQueryRoutingModule,
    DialogModule 
  ]
})
export class BuilderQueryModule { }
