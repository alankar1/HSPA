import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor( private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  Onlogin(loginform:NgForm){
     console.log(loginform.value);
   const token= this.authService.authUser(loginform.value);
   if(token){
     localStorage.setItem('token',token.userName);
    //  console.log("Login Succssefully");
     alertyfy.success("Login Succssefully");
     this.router.navigate(['/']);
   }else{
    // console.log("Invalid user id and password");
    alertyfy.error("Invalid user id and password");
   }

  }

}
