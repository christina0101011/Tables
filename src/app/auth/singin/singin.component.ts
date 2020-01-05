import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {  } from '@angular/material';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    console.log(555, form.value);
    
  }

}
