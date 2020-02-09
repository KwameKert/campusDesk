import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, Form} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ComplaintService } from '../../../client-portal/shared/complaint.service';
@Component({
  selector: 'app-resolved-complaints',
  templateUrl: './resolved-complaints.component.html',
  styleUrls: ['./resolved-complaints.component.css']
})
export class ResolvedComplaintsComponent implements OnInit {

 
  public sortBy: string;
	public sortOrder: string = 'asc';
  complaint_id : any;

  complaintData: any;

  
  @ViewChild('closeModal',{static: false})closeModal: ElementRef;
  constructor(private fb: FormBuilder, private complaintService: ComplaintService, private toastr: ToastrService) { }

  ngOnInit() {
   

    this.loadComplaints();
  }


  loadComplaints(){
    this.complaintService.fetchPendingComplaints().subscribe(data=> {
      this.complaintData = data.resolved_complaints;
     
    }, error=>{
      console.log(error)
    })
  }




 



}
