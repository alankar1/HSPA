import { Component, OnInit } from '@angular/core';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedinUser:string;
  constructor() { }

  ngOnInit() {
  }
  loggedIN()
  {
    this.loggedinUser =localStorage.getItem('token');
    return this.loggedinUser;
  }
  logout()
  {
    localStorage.removeItem('token');
    alertyfy.success("You are Logout");

  }
}
