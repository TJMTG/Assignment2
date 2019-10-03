import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(
    private Http: HttpClient
  ){}

  imageUpload(fd){
    return this.Http.post<any>("http://localhost:3000/image/upload", fd)
  }

}
