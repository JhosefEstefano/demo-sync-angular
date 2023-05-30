import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTableComponent } from './layout-table.component';

const routes: Routes = [
  {path: '', component: LayoutTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutTableRoutingModule { }
