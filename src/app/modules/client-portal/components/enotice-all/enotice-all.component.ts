import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, Form} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ComplaintService } from '../../../client-portal/shared/complaint.service';
@Component({
  selector: 'app-enotice-all',
  templateUrl: './enotice-all.component.html',
  styleUrls: ['./enotice-all.component.css']
})
export class EnoticeAllComponent implements OnInit {

  enoticeForm: any;
  public sortBy: string;
  public sortOrder: string = 'asc';
  public enoticeData: any;
  @ViewChild('closeModal',{static: true})closeModal: ElementRef;
  constructor(private fb: FormBuilder, private complaintService: ComplaintService, private toastr: ToastrService) { }


  ngOnInit() {
    this.enoticeForm = this.fb.group({
      'title' : ["", Validators.required],
      'description' : ["", Validators.required],
    });

    this.loadMessages();
  }

  onSubmit(){

    this.complaintService.broadcastMessage(this.enoticeForm.value).subscribe(data =>{
    this.toastr.success('Complaint sent successfully!', 'Success');
    this.loadMessages();
    this.closeModal.nativeElement.click();
    }, error => {
      this.toastr.error('Sorry! Complaint not sent... Try Again', 'Ooops', {
        timeOut: 3000
      });
    })

  }

  loadMessages(){
    this.complaintService.loadMessages().subscribe(data=>{
        this.enoticeData = data
    }, error=>{
      console.log(error)
    })
  }


}
