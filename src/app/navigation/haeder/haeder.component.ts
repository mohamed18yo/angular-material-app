import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-haeder',
  templateUrl: './haeder.component.html',
  styleUrls: ['./haeder.component.css'],
})
export class HaederComponent implements OnInit, OnDestroy{
  @Output() toggle = new EventEmitter<void>();
  authSub!: Subscription;
  isAuth = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  this.authSub= this.authService.getAuth().subscribe((res)=>{
     this.isAuth= res;
   })
  }
  logout(){
    this.authService.logout()
  }
  onToggle() {
    this.toggle.emit();
  }
  ngOnDestroy(){
    this.authSub.unsubscribe()
  }
}
