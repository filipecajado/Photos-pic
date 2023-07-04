import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { PhotoComments } from "./photo-comment";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root'})
export class PhotoService{


    constructor(private http: HttpClient) {

    }

    listFromUser(userName: string) {
         return this.http
        .get<Photo[]>( API + '/' + userName +  '/photos');
    }

    listFromUserPagineted(userName: string, page: Number) {
        const params = new HttpParams()
        .append('page', page.toString())

        return this.http
       .get<Photo[]>( API + '/' + userName +  '/photos', { params });
   }

   upload(description: string, allowComments: boolean, file: File) {

        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        console.log(file, allowComments, description);
        
        return this.http.post(API + '/photos/upload', formData);

   }

   findById(photoId: number){
    return this.http.get<Photo>(API + '/photos/' + photoId )
   }
   getComments(photoId: number){
    return this.http.get<PhotoComments[]>(API + '/photos/' + photoId + '/comments')
   }

   addComment(photoId: number, commentText: string){
    return this.http.post(
        API + '/photos/' + photoId + '/comments',
        {commentText}
    );
   }
   removePhoto(photoId: number){
    return this.http.delete(API + '/photos/' + photoId)
   }
}