import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/auth-response.model';

// import {  } from '@angular/material';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  isLoading = false;

  constructor(public _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    if (form.valid) {
      this._authService.signIn(form.value.email, form.value.password)
      .subscribe((res: AuthResponse) => {
        if ( res.status === 200) {
          localStorage.setItem('currentUser', JSON.stringify({ token: res.token }));
          this._authService.isLoggedIn.next(true);
          this.router.navigate(['/profile']);
        } else {
          alert('Something went wrong');
        }
        // console.log('signIn', res);
      });
    } else {
      return;
    }
  }

}
