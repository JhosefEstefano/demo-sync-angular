import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'pivot-table', loadChildren: () => import('./pages/pivot-table/pivot-table.module').then(m=>m.PivotTableModule)},
      {path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m=>m.CalendarModule)},
      {path: 'hoja-calculo', loadChildren: () => import('./pages/hoja-calculo/hoja-calculo.module').then(m=>m.HojaCalculoModule)},
      {path: 'dashboard-layout', loadChildren: () => import('./pages/layout-table/layout-table.module').then(m=>m.LayoutTableModule)},
      {path: 'query-builder', loadChildren: () => import('./pages/builder-query/builder-query.module').then(m=>m.BuilderQueryModule)},
      {path: 'grid', loadChildren: () => import('./pages/grids/grids.module').then(m=>m.GridsModule)},
      {path: 'charts', loadChildren: () => import('./pages/charts-page/charts-page.module').then(m=>m.ChartsPageModule)},


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
