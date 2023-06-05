import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

const routes: Routes = [

    {
      path: '', 
      component: HomeComponent,
      children: [

        { 
          path: '', component: SigninComponent
        },
    

        { 
          path: 'signup', component: SignupComponent
        },
    

      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
