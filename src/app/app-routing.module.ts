import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
 {
    path: '',
    component: LoginComponent
 },
 {
   path: 'home',
   component: HomeComponent
 },
 {
   path: 'detail',
   component: DetailComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
