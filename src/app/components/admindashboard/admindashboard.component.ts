import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Movie_Details } from 'src/app/models/Movie_Details.model';
import { HomePageServiceService } from 'src/app/services/home-page-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  showFormFlag = false;
  showformforchange = false;
  movie = {
    movie_name: '',
    release_date: '',
    genre: '',
    about: '',
    ott_platforms: '',
    url: ''
  };
  moviechange = {
    movie_name: '',
    release_date: '',
    genre: '',
    about: '',
    ott_platforms: '',
    url: ''
  };
  fileToUpload: File | null = null;
  constructor(private http: HttpClient,private toastr: ToastrService,private homepageservice:HomePageServiceService) { }

  showForm() {
    this.showFormFlag = !this.showFormFlag;
  }


  addmovie(){
    if (this.movie.movie_name=="" || this.movie.genre=="" || this.movie.about=="" || this.movie.release_date=="" || this.movie.ott_platforms=="" || this.movie.url==""){
      this.toastr.success('Please fill all the fields!', 'Failure', {
        toastClass: 'toast-custom', // <-- Use the custom class here
        positionClass: 'toast-top-right',
        
        
      });
    }
    else{
    this.homepageservice.addnewrelease(this.movie)
    .subscribe((res:any)=>{
      if (res==0){
        this.toastr.success('Movie Already present', '', {
          toastClass: 'toast-custom', // <-- Use the custom class here
          positionClass: 'toast-top-right',
          
          
        });
      }
      else{
      console.log("new movie added!");
      this.toastr.success('New Movie Added!', '', {
        toastClass: 'toast-custom', // <-- Use the custom class here
        positionClass: 'toast-top-right',
        
        
      });
    }
    })
    this.showFormFlag = false;
  

    console.log("sdsds");
  }
  }
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }
  showformforchangemovie(){
     this.showformforchange=!this.showformforchange;
  }
  changemovie(){
    if (this.movie.movie_name=="" || this.movie.genre=="" || this.movie.about=="" || this.movie.release_date=="" || this.movie.ott_platforms=="" || this.movie.url==""){
      this.toastr.success('Please fill all the fields!', 'Failure', {
        toastClass: 'toast-custom', // <-- Use the custom class here
        positionClass: 'toast-top-right',
        
        
      });
    }
    else{
this.homepageservice.changemoviedetails(this.moviechange)
.subscribe((res:any)=>{
  if (res==0){
    this.toastr.success('Movie is already present!', 'Failure', {
      toastClass: 'toast-custom', // <-- Use the custom class here
      positionClass: 'toast-top-right',
      
      
    });
  
  }
  else{
    this.toastr.success('Successfully changed!', 'Success', {
      toastClass: 'toast-custom', // <-- Use the custom class here
      positionClass: 'toast-top-right',
      
      
    });
  
}
})
  }
}
}
