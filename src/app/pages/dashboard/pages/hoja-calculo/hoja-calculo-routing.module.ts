import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HojaCalculoComponent } from './hoja-calculo.component';

const routes: Routes = [{
  path: '', component: HojaCalculoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HojaCalculoRoutingModule { }
