import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppBarModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    AppBarModule,
    ButtonModule, 
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
