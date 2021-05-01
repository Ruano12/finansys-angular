import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    //shared modules
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
