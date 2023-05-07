import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageServiceService } from 'src/app/services/home-page-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  otp_verify=true;
  phone_number:any;
  otp:any;
  constructor(private service:HomePageServiceService,private router:Router){

  }
  sendotp(){
    this.service.sendOTPforadmin(this.phone_number)
    .subscribe({
      next: (response:any) => {
        // Verify OTP entered by user
        if (response == 1) {
          // Authenticate user and log them in
          alert('OTP sent successfully.');
        } 
        else {
          alert('OTP sending failed!');
        }
      },
    });
   
    this.otp_verify=false;
  }
  verifyOTP() {
    // TODO: Send a request to a back-end service to verify the OTP.
    // If the OTP is valid, log the user in.
    this.service.verifyOTPforadmin(this.phone_number,this.otp)
      .subscribe((response:  any) => {
        // Verify OTP entered by user
        //console.log(response);
        if (response.token == "not") {
          // Authenticate user and log them in
          alert('OTP incorrect!');
          this.router.navigate(["/login"]);
        } else {
          localStorage.setItem("user_token",response.token);
          this.router.navigate(["/"]);
        }
      });
  }
}
