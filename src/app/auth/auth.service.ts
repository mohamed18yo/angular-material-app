import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private auth = new Subject<boolean>();
  errorMsg = new Subject<string>();
  IsAuth = false;
  private user!: User;

  constructor(private router: Router, private http: HttpClient) {}

  signup(authData: AuthData) {
    this.user = {
      email: authData.email,
      password: authData.password,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.http
      .post<{ user: any }>(
        'http://localhost:3000/users/signup',
        this.user
      )
      .subscribe((res) => { 

        if (res.user) {
          this.IsAuth = true;
          this.auth.next(this.IsAuth);
          this.router.navigate(['/']);
        }
      },error=>{
         const err= error.error.message
         console.log(err);

          this.errorMsg.next(err);
      });

    // console.log(this.user);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      password: authData.password,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.http
      .post<{ token: any; expirIn: number }>(
        'http://localhost:3000/users/login',
        this.user
      )
      .subscribe(
        (res) => {
          const token = res.token;
          if (token) {
            this.IsAuth = true;
            this.auth.next(this.IsAuth);
            this.router.navigate(['/']);
          }
        },
        (error) => {
          const msg = error.error.message;
          if (msg) {
            this.errorMsg.next(msg);
          }
        }
      );
  }
  getErrorMsg() {
    return this.errorMsg;
  }

  logout() {
    // this.user = null;
    this.IsAuth = false;
    this.auth.next(this.IsAuth);
    this.router.navigate(['login']);
  }

  getAuth() {
    return this.auth.asObservable();
  }
  isAuth() {
    return this.user != null;
  }
  // getUser() {
  //   return this.IsAuth;
  // }
}
