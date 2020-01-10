import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
// import {  } from '@angular/material';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  isLoading = false;

  constructor(public _authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    if (form.valid) {
      this._authService.signIn(form.value.email, form.value.password)
      .subscribe(res => {
        if( res.status === 200) {
          this._authService.getToken.next(res.token)
          this._authService.isLoggedIn.next(true)
        }
        // console.log(555, res);
      })
    } else {
      return
    }
  }

}
