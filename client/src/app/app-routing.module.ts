import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalAccountPageComponent } from './gal-account-page/gal-account-page.component';

const routes: Routes = [
  { path: ':account', component: GalAccountPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
