import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: any[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params['userName'];
      this.photos = this.activatedRoute.snapshot.data['photos'];
    })

  }

  

  load(){
    this.photoService.listFromUserPagineted(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length){
        this.hasMore = false
      }
    });
  }

  
}
