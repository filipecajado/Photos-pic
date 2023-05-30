import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [ SigninComponent, SignupComponent, HomeComponent],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule
     ]

})
export class HomeModule{


}