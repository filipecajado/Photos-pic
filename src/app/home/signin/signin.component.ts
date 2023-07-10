import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/plataform-detector/plataform-detector.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{

    loginForm!: FormGroup;
     @ViewChild('userNameInput') userNameInput!: ElementRef;
     fromUrl!: string;


    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private cdRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute
        ){}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params["fromUrl"])
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngAfterViewInit(): void {
        this.platformDetectorService.isPlatformBrowser() &&
        this.userNameInput.nativeElement.focus();
        this.cdRef.detectChanges();
    }

    login(){

       const userName = this.loginForm.get('userName')?.value;
       const password = this.loginForm.get('password')?.value;

       this.authService
            .authenticate(userName, password)
            .subscribe( 
                () => { 
                    
                    if(this.fromUrl){
                        this.router.navigateByUrl(this.fromUrl);
                    }else{
                        this.router.navigateByUrl("user/"+ userName) 
                    }
                },
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    alert('invalid username ou password');
                }
            );


       
    }
}