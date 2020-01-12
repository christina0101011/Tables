import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  isLoggedIn = false;

  constructor(public _authService: AuthService) { }

  ngOnInit() {
    this._authService.isLoggedIn.subscribe((res: boolean) => {
      this.isLoggedIn = res;
    });
  }

}
