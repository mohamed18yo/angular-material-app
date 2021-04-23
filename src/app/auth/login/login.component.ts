import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg!: any;
  maxDate: any;
  constructor(private authService: AuthService) {}
  isLoading = false;
  isLoginMode = true;
  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 17);
  }
  onSubmit(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
    });
    this.authService.getErrorMsg().subscribe((err) => {
      this.errorMsg = err;
    });
    setTimeout(() => {
      this.errorMsg = null;
    }, 5000);
    // console.log(form.value);
  }
  onChangeMode() {}
}
