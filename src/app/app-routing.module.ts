import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { Main3Component } from './components/main3/main3.component';

import { CanActivateViaAuthGuard as AuthGuard } from './guards/auth-guard.service'

const routes: Routes = [
  { path: '', redirectTo:'first', pathMatch: 'full'},
  { path: 'first', component: MainComponent, data: { animation: 'first' }}, //use angular animation for routes
  { path: 'lazy', loadChildren: 'src/app/lazy/lazy.module#LazyModule'}, //lazy load module
  { path: 'third', component: Main3Component, canActivate: [AuthGuard]} //used route guards to dissable this url, but without access
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
