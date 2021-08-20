import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  radioval=0;
  hide:boolean = true;
  submitted:boolean = false;
  registerForm!: FormGroup;
  fullname = "Last name";
  email = "Email Id";
  password = "Password";
  mobile = "Confirm";
  constructor(
    private formBuilder: FormBuilder,
    private service:UserService,
    private snackBar:MatSnackBar,
    private router:Router,
    private acRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]]
  });
  }
  get f() { return this.registerForm.controls; }
  login() {}
  onRegister(){}
  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    let data = {
      "fullName":this.f.fullname.value,
      "emailId":this.f.email.value,
      "password":this.f.password.value,
      "mobileNumber":this.f.mobile.value
    }
    this.service.registration(data).subscribe((dataReturned:any) =>{ 
      console.log(dataReturned);
      this.snackBar.open("Register Successful","Okay")
    })
// }

}

}
