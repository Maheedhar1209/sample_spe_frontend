import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HomePageServiceService } from 'src/app/services/home-page-service.service';


@Component({
  selector: 'app-popupmoviedetails',
  templateUrl: './popupmoviedetails.component.html',
  styleUrls: ['./popupmoviedetails.component.css']
})
export class PopupmoviedetailsComponent {
  showElement: boolean = true;
  phone_number : any;
  movie_details :any;
  movie_name :any;
   constructor(private router:Router,private httpClient:HttpClient,private homepageservice:HomePageServiceService){
    this.movie_details=JSON.parse(localStorage.getItem("movie_details")!);
   // this.movie_name=JSON.parse(localStorage.getItem("movie_details")!).movie_name;
   }
 // accountSid = 'ACbcec39040fe22ddea4512e79e24b6c90';
  //authToken = 'b28f21fe4f4a20af0ace6032f185685e';
  
  /*this.client.messages.create({
    body: 'This is a test SMS message',
    from: 'YOUR_TWILIO_PHONE_NUMBER',
    to: 'RECIPIENT_PHONE_NUMBER'
  }).then((message: { sid: any; }) => {
    console.log('SMS message sent:', message.sid);
  }).catch((error: any) => {
    console.log('Error sending SMS message:', error);
  });*/
  change(){
    this.showElement=!this.showElement;
    //this.sendTwilioMessage();
  }
  /*sendTwilioMessage() {
   this.homepageservice.sendmoviedetails(this.phone_number)
   .subscribe((res : any) => {
    console.log(res);
   })
  }*/
  sendsms(){
    //this.movie_details="hello!";
    this.homepageservice.sendmoviedetails(this.movie_details,this.phone_number)
    .subscribe((res:any)=>{
      alert("Sent!");
       console.log("Sent!");
    });
  }
  gotohome(){
   this.router.navigate(["/"]);
  }
}
