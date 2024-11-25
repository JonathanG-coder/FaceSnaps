import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule,
  ],

  providers: [
    httpInterceptorProviders
  ]
})
export class CoreModule { }
