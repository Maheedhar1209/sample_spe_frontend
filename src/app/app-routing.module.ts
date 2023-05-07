import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthguardGuard } from './authguard/userauthguard.guard';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PopupmoviedetailsComponent } from './components/popupmoviedetails/popupmoviedetails.component';

const routes: Routes = [{path:'', component:HomePageComponent,canActivate:[UserauthguardGuard]},
{path:'adminlogin', component:AdminloginComponent},
{path:'popup',component:PopupmoviedetailsComponent,canActivate:[UserauthguardGuard]},
{path:'login',component:LoginComponent},
{path:'admin-dashboard',component:AdmindashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
