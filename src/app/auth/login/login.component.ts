import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  maxDate: any;
  constructor() { }
  isLoading = false;
  isLoginMode = true;
  ngOnInit() {
    this.maxDate = new Date()
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 17)
  }
  onSubmit() {

  }
  onChangeMode() {

  }
}
