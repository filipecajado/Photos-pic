import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService]

})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;

  constructor(
      private formBuilder: FormBuilder,
      private userNotTakenValidatorService: UserNotTakenValidatorService,
      private signupService: SignupService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService,
      private cdRef: ChangeDetectorRef
    ) {}

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required, lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)], this.userNotTakenValidatorService.checkUserNameTaken()],
        fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
        password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
      })
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
    this.inputEmail.nativeElement.focus();
    this.cdRef.detectChanges();
}
  signup(){
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
        .signup(newUser)
        .subscribe(
          () => this.router.navigate(['home']),
          err => console.log(err)
         );
  }

}
