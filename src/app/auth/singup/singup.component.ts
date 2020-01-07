import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  isLoading = false;

  constructor(public _authServece: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    if (form.valid) {
      this._authServece.createUser(form.value.email, form.value.password)
      .subscribe(res => {
        console.log(555, res);
      })
    } else {
      return
    }
  }

}
