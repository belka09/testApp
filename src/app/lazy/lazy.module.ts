import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main2Component } from './../components/main2/main2.component';


const routes: Routes = [
  {
    path: '',
    component: Main2Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Main2Component]
})
export class LazyModule { }
