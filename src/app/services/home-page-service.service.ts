import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { response } from 'express';
import { Observable } from 'rxjs';
import { Movie_Details } from '../models/Movie_Details.model';


const baseUrl = 'http://localhost:8101';
@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  constructor(private httpclient:HttpClient) { }

  getMovieDetails(movie_name:String){
    const token = localStorage.getItem('user_token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    };
    return this.httpclient.get(`${baseUrl}/Movie?movie_name=${movie_name}`,{headers});
  }
  sendmoviedetails(movie_details:any,phone_number:String){
    const token = localStorage.getItem('user_token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    };
    return this.httpclient.get(`${baseUrl}/sms?phone_number=${phone_number}&movie_details=${movie_details}`,{headers});
  }
  logout(phone_number:String){
    const token = localStorage.getItem('user_token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    };
    localStorage.removeItem("user_token");
    
    return this.httpclient.delete(`${baseUrl}/deletenewreleases?phone_number=${phone_number}`,{headers});
  }
  getnewreleases(phone_number:String){
    const token = localStorage.getItem('user_token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    };
    return this.httpclient.get(`${baseUrl}/newreleases?phone_number=${phone_number}`,{headers});
  }
  addnewrelease(movie_details:Movie_Details){
    return this.httpclient.post(`${baseUrl}/addnewrelease`,movie_details);
  }
  changemoviedetails(movie_details:Movie_Details){
    return this.httpclient.post(`${baseUrl}/changemoviedetails`,movie_details);
  }
  sendOTP(phoneNumber:string) {
    console.log(phoneNumber);
    return this.httpclient.get(`${baseUrl}/user/sendOTP?phone_number=${phoneNumber}`);
}
verifyOTP(phoneNumber:string,otp:string) {
    return this.httpclient.get(`${baseUrl}/user/verifyOTP?phone_number=${phoneNumber}&otp=${otp}`);
}
sendOTPforadmin(phoneNumber:string) {
  console.log(phoneNumber);
  return this.httpclient.get(`${baseUrl}/admin/sendOTP?phone_number=${phoneNumber}`);
}
verifyOTPforadmin(phoneNumber:string,otp:string) {
  return this.httpclient.get(`${baseUrl}/admin/verifyOTP?phone_number=${phoneNumber}&otp=${otp}`);
}
  httpHeaders = new HttpHeaders({
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': "*"
  })


params = new HttpParams()
                  .set('user_id', '1');

postMyList(user_id: String) {
  let url = "http://localhost:8101/MyList";
  const token = localStorage.getItem('user_token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`,
    
  };
  return this.httpclient.post<any>(url, null, {params: this.params, headers: this.httpHeaders});
}

postGenre(genre: string) {
  let url ="http://localhost:8101/Genres";
  const token = localStorage.getItem('user_token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`,
  };
  return this.httpclient.post<any>(url, null, {headers: this.httpHeaders, params: new HttpParams().set('genre', genre)});
}
}
  
  

