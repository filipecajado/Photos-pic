import { Injectable } from '@angular/core';
import { SignupService } from './signup.service';
import { AbstractControl } from '@angular/forms';

import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(userName => 
                         this.signupService.checkUserNameTaken(userName)
                    ))
                    .pipe(map((isTaken: any) => isTaken ? { userNameTaken: true} : null))
                    .pipe(first());
        }
    }
}