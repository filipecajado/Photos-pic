import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',

})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private userNotTakenValidatorService: UserNotTakenValidatorService
    ) {}

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required, lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)], this.userNotTakenValidatorService.checkUserNameTaken()],
        fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
        password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
      })
  }

}
