import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private auth = new Subject<boolean>();
  IsAuth = false;
private user!: User

 constructor( private router: Router) { }

  signup(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.IsAuth = true;
    this.auth.next(this.IsAuth);
    this.router.navigate(['/']);
    // console.log(this.user);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.IsAuth = true;
    this.auth.next(this.IsAuth);
    this.router.navigate(['/']);
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
  isAuth(){
    return   this.user != null;
  }
  // getUser() {
  //   return this.IsAuth;
  // }

}

