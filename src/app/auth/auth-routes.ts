import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: '',
    component: AuthComponent, children: [
      {
        path: 'signin', component: SinginComponent
      },
      {
        path: 'signup', component: SingupComponent
      },
      {
        path: '', redirectTo: 'signup', pathMatch: 'full'
      },
      // { path: '**', component:  Page404balanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
