import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {}

   signOut() {
    this._authService.signOut();
    this.router.navigate(['/']);
   }

}
