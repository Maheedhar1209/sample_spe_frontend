import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
//import { PopupmoviedetailsComponent } from './components/popupmoviedetails/popupmoviedetails.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { PopupmoviedetailsComponent } from './components/popupmoviedetails/popupmoviedetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    //PopupmoviedetailsComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    PopupmoviedetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right',toastClass: 'toast-custom',
    iconClasses: {
      error: 'toast-custom-error',
      info: 'toast-custom-info',
      success: 'toast-custom-success',
      warning: 'toast-custom-warning'
    }}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
