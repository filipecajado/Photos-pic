import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject} from 'rxjs';
import { User } from './user';
import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {


    private userSubject = new BehaviorSubject<User>({ id: 0 ,name: '', email: ''});

    constructor(private tokenService: TokenService) { }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    decodeAndNotify(){
     const token = this.tokenService.getToken();
     const user = jwt_decode(token) as User; 
     this.userSubject.next(user);  
    }
}