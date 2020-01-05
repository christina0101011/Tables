import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routes';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { MatIconModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, SinginComponent, SingupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class AuthModule { }
