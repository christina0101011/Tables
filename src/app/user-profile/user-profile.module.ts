import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile.routes';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
