import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  constructor(private _httpClient:HttpClient) { }

private loggedInStatus = localStorage.getItem('helpDeskStatus');
private apiKey = localStorage.getItem('helpDeskToken');

setLoggedStatus(authData: any){
  localStorage.setItem('helpDeskStatus',authData.status);
  localStorage.setItem('helpDeskToken',authData.token);
  localStorage.setItem('helpDeskUsername',authData.name);
  localStorage.setItem('helpDeskIndexNumber',authData.indexNumber);
  
}


removeLoggedStatus(){
	localStorage.removeItem('helpDeskStatus');
	localStorage.removeItem('helpDeskToken');
	localStorage.removeItem('helpDeskUsername');
	localStorage.removeItem('helpDeskIndexNumber');
}

public get isLoggedIn(){

	return this.loggedInStatus;
}


public get api_token(){

	return this.apiKey;
}



  getUserDetails(data: any){
  	return  this._httpClient.post("http://localhost/helpDesk/public/api/auth/login",data);
    }
  
    registerStudent(data: any){
      return this._httpClient.post("http://localhost/helpDesk/public/api/auth/register",data);
    }
}
