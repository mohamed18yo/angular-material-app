import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  maxDate: any;
  isLoading = false;
  // signupForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.signupForm = new FormGroup({});
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 17);
  }

  onSubmit(form: NgForm) {
    this.authService.signup({
      email: form.value.email,
      password: form.value.password,
    });
    // console.log(form.value);

  }
}
