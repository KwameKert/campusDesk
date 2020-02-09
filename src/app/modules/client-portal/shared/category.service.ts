import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }



  getCategoryData(){
    return this._httpClient.get<any>("http://localhost/helpDesk/public/api/v1/category");
  }
}
