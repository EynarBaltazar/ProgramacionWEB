import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { Component3Component } from './component3/component3.component';
import { NewComponent } from './new.component';


@NgModule({
  declarations: [ Component3Component, NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
