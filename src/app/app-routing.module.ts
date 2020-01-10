import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard]
    
  }
  // { path: '**', component: Page404leavesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
