import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { LoginAuthGuard } from '../core/auth/login.guard';

const routes: Routes = [

    {
      path: '', 
      component: HomeComponent,
      canActivate: [LoginAuthGuard],
      children: [

        { 
          path: '', component: SigninComponent,
          data: {
            title: 'Sign in'
          }
        },
    

        { 
          path: 'signup', component: SignupComponent,
          data: {
            title: 'Sign up'
          }
        },
    

      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
