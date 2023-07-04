import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { Observable } from "rxjs";


@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.scss']
})
export class PhotoDetailsComponent implements OnInit{


    photo$!: Observable<Photo>;
    photoId!: number;
    constructor(private route: ActivatedRoute,
            private photoService: PhotoService,
            private router: Router){}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params['photoId']
        this.photo$ = this.photoService.findById(this.photoId)
    }

    remove() {
        this.photoService.removePhoto(this.photoId).subscribe(() => this.router.navigate(['']));    
    }
}