import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, Form} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ComplaintService } from '../../../client-portal/shared/complaint.service';
@Component({
  selector: 'app-processing-complaints',
  templateUrl: './processing-complaints.component.html',
  styleUrls: ['./processing-complaints.component.css']
})
export class ProcessingComplaintsComponent implements OnInit {

  public sortBy: string;
	public sortOrder: string = 'asc';
  complaint_id : any;
  statusForm: any;
  complaintData: any;
  all_complaints: string;
  pending_complaints: string;
  processing_complaints: string;
  resolved_complaints: string;

  
  @ViewChild('closeModal',{static: false})closeModal: ElementRef;
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
      this.complaintData = data.processing_complaints;
     
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
