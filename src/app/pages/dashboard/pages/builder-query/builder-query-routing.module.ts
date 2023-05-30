import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderQueryComponent } from './builder-query.component';

const routes: Routes = [{path: '', component: BuilderQueryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderQueryRoutingModule { }
