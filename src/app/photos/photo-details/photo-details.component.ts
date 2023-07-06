import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { Observable } from "rxjs";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";


@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.scss']
})
export class PhotoDetailsComponent implements OnInit{


    photo$!: Observable<Photo>;
    photoId!: number;
    constructor(private route: ActivatedRoute,
            private photoService: PhotoService,
            private router: Router,
            private alertService: AlertService,
            private userService: UserService){}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params['photoId']
        this.photo$ = this.photoService.findById(this.photoId)
    }

    remove() {
        this.photoService.removePhoto(this.photoId)
        .subscribe(() => {
            this.alertService.success("Photo removed", true);
            this.router.navigate(['/user', this.userService.getUserName()]);
    },
    err => {
        console.log(err);
        this.alertService.success("Could not delete the photo!", true);
    }
    );    
    }
}