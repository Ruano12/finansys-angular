import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

@NgModule({
  declarations: [
    BreadCrumbComponent, 
    PageHeaderComponent, 
    FormFieldErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    //shared modules
    CommonModule,
    ReactiveFormsModule,
    BreadCrumbComponent,
    RouterModule,
    PageHeaderComponent,
    FormFieldErrorComponent
  ]
})
export class SharedModule { }
