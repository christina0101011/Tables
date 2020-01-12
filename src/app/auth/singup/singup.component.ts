import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/auth-response.model';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  isLoading = false;

  constructor(public _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    if (form.valid) {
      this._authService.createUser(form.value.email, form.value.password)
      .subscribe((res: AuthResponse) => {
        if (res.status === 200) {
          this.router.navigate(['/profile']);
        } else {
          alert('Something went wrong');
        }
        // console.log('createUser', res);
      });
    } else {
      return;
    }
  }

}
