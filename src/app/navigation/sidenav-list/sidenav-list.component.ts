import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSub!: Subscription
  @Output() onToggleList = new EventEmitter<void>();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.authSub= this.authService.getAuth().subscribe((res)=>{
      this.isAuth= res
    })

  }

  onToggle() {
    this.onToggleList.emit();
  }
  logout(){
    this.authService.logout()
    
  }

  ngOnDestroy(){
    this.authSub.unsubscribe()
  }
}
