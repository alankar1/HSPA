import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';
import {User} from 'src/app/model/user';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm:FormGroup
  user:User;
  userSubmmited:boolean;
  constructor( private fb:FormBuilder , private userService :UserServiceService) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmpassword:new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.PasswordmissmatchValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirmpassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]

    },{Validators:this.PasswordmissmatchValidator});
  }

  PasswordmissmatchValidator(fg:FormGroup):Validators{
    return fg.get('password').value===fg.get('confirmpassword').value?null :
    {notmatched:true};
  }

  // getter method for all form control
  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registrationForm.get('email') as FormControl;
  }
  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmpassword()
  {
    return this.registrationForm.get('confirmpassword') as FormControl;
  }
  get mobile()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }

  OnSubmit(){
    console.log(this.registrationForm)
    this.userSubmmited=true;
    if(this.registrationForm.valid)
    {
      // this.user=Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
      //  this.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmmited=false;
       alertyfy.success("Congrates,you are successfilly registerd");
    }
    else{
      alertyfy.error("Kindle required valid field");

    }

  }

  userData():User{
    return this.user={
      userName: this.userName.value,
      email:this.email.value,
      mobileNo:this.mobile.value,
      password:this.password.value
    }
  }
}
