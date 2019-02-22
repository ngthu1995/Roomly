import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private authListenerSubs: Subscription;
  userIsAuthenticated = false
  currentUser: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.currentUser = this.authService.getCurrentUser();
      });
  }

  get isManager() {
    return this.currentUser && this.currentUser.role === 'manager';
  }

  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    return false
  }

  logOut() {
    this.authService.logOut();
  }
}
