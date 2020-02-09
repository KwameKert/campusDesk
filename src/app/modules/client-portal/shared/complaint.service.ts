import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private _httpClient: HttpClient) { }



   submitComplaint(data: any){
    return  this._httpClient.post("http://localhost/helpDesk/public/api/v1/complaint",data);
  }

  getStudentComplaint(data){
    return this._httpClient.post<any>("http://localhost/helpDesk/public/api/v1/getStudentComplaints",data);
  }


  retractComplaint(id){
    return this._httpClient.put("http://localhost/helpDesk/public/api/v1/retractComplaint/"+id, {'status':'Retracted'});
  }


  fetchPendingComplaints(){
    return this._httpClient.get<any>("http://localhost/helpDesk/public/api/v1/fetchPendingComplaint");
  }

  updateComplaint(id: any,data: any){
    
    return this._httpClient.put("http://localhost/helpDesk/public/api/v1/updateComplaint/"+id, data);
  }



  fetchComplaint(id: any){
    return this._httpClient.get<any>("http://localhost/helpDesk/public/api/v1/complaint/"+id);
  }

  broadcastMessage(data){
    return this._httpClient.post<any>("http://localhost/helpDesk/public/api/v1/enotice",data);
  }


  loadMessages(){
    return this._httpClient.get<any>("http://localhost/helpDesk/public/api/v1/enotice");
  }






}
