import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, Form} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ComplaintService } from '../../../client-portal/shared/complaint.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public sortBy: string;
	public sortOrder: string = 'asc';
  complaint_id : any;
  statusForm: any;
  complaintData: any;
  all_complaints: string;
  pending_complaints: string;
  processing_complaints: string;
  resolved_complaints: string;

  
  @ViewChild('closeModal',{static: true})closeModal: ElementRef;
  constructor(private fb: FormBuilder, private complaintService: ComplaintService, private toastr: ToastrService) { }

  ngOnInit() {
    this.statusForm = this.fb.group({
      response : ["", Validators.required ],
      status: [""],
      complaint_id: [""]
    });

    this.loadComplaints();
  }


  loadComplaints(){
    this.complaintService.fetchPendingComplaints().subscribe(data=> {
      this.complaintData = data.pending_complaints;
      this.pending_complaints = data.pending_complaints_no;
      this.processing_complaints = data.processing_complaints_no;
      this.resolved_complaints = data.resolved_complaints_no;
      this.all_complaints = data.all_complaints_no
    }, error=>{
      console.log(error)
    })
  }


  changeStatus(id: any){
    this.statusForm.patchValue({
      complaint_id : id
    });
    this.complaint_id = id;
  }


  processComplaint(){
    this.statusForm.patchValue({
      status:  'Processing'
    });
    this.saveInfo(this.statusForm.value)
  }


  resolveComplaint(){
    this.statusForm.patchValue({
      status:  'Resolved'
    });
    
    this.saveInfo(this.statusForm.value)
  }

  saveInfo(data){
    this.complaintService.updateComplaint(this.complaint_id,data).subscribe(data=>{
      this.toastr.success('Complaint sent successfully!', 'Success');
      
    this.closeModal.nativeElement.click();
    this.loadComplaints();
    this.closeModal.nativeElement.click();
    }, error=> {
      console.log(error)
    })
  }



}
