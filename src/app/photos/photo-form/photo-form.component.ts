import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit{

  photoForm!: FormGroup;
  file!: File ;

  constructor(
       private formBuilder: FormBuilder,
       private photoService: PhotoService,
       private router: Router
    ){}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group ({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComents: [true, Validators.required]
    })
  }


  upload(){

    const description = this.photoForm.get('description')?.value;
    const allowComents = this.photoForm.get('allowComents')?.value;

    this.photoService.upload(description, allowComents, this.file).subscribe(() => this.router.navigate(['']));
  }
}
