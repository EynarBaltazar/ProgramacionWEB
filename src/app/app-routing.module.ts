import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  {path:"mycomponent",
  component: MycomponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
