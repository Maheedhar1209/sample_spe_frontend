import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  // constructor(private service: HomePageComponent){}
  // constructor(private http: HttpClient) { }

  title = 'spe';
  // ngOnInit(): void {
      
  // }
  // myList() {
  //   let user_id = "1";

  //   this.service.postMyList(user_id).subscribe(
  //     resp=> {console.log(resp)}
  //   );
  // }

  // httpHeaders = new HttpHeaders({
  //     'Content-Type': "application/json",
  //     'Access-Control-Allow-Origin': "*"
  //   })


  // params = new HttpParams()
  //                   .set('user_id', '1');

  // postMyList(user_id: String) {
  //   let url = "http://localhost:8101/MyList";
  //   return this.http.post<any>(url, null, {params: this.params, headers: this.httpHeaders});
  // }

  // postGenre(genre: string) {
  //   let url ="http://localhost:8101/Genres";
  //   return this.http.post<any>(url, null, {headers: this.httpHeaders, params: new HttpParams().set('genre', genre)});
  // }
}
