import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl = environment.api_host;

  constructor(private _httpClient: HttpClient) { }



  getCategoryData(){
    return this._httpClient.get<any>(`${this.baseUrl}/v1/category`);
  }
}
