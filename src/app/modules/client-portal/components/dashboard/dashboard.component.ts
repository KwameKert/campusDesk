import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  FormBuilder, Validators} from '@angular/forms';
import { CategoryService} from '../../shared/category.service';
import { Select2OptionData } from 'ng2-select2';
import { ToastrService } from 'ngx-toastr';
import { ComplaintService } from '../../shared/complaint.service';
import Swal from 'sweetalert2';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('closeModal',{static: false})closeModal: ElementRef;
  complaintForm: any;
  complaints: any;
  pending_complaints: string ;
  processing_complaints: string;
  completed_complaints: string;
  
	public sortBy: string;
	public sortOrder: string = 'asc';
  
  indexNumber: any = localStorage.getItem('helpDeskIndexNumber');
  public categoryData: Array<Select2OptionData>;
  constructor(private fb: FormBuilder, private categoryService: CategoryService, 
    private complaintService: ComplaintService, private toastr: ToastrService) { }

  public options: Select2Options;
  ngOnInit() {

    this.complaintForm = this.fb.group({
      'category': ["fees", Validators.required],
      'description': ["", Validators.required],
      'indexNumber': localStorage.getItem('helpDeskIndexNumber')
    })


    // this.categoryService.getCategoryData().subscribe(data=> {
    //   this.categoryData = data;
    // });


  this.loadComplaints();
  }


  loadComplaints(){
    const data = {
      indexNumber: this.indexNumber
    }

    this.complaintService.getStudentComplaint(data).subscribe(data=>{
      this.complaints = data.complaints;
      this.pending_complaints = data.pending_complaints;
      this.processing_complaints = data.processing_complaints;
      this.completed_complaints = data.completed_complaints;

  
      
    $('#datatable').DataTable();
    }, error=> {
      console.log(error)
    })
  }

  changed(data: {value: string}){

    this.complaintForm.patchValue({
      cat_id: data.value
    });

  }


  onSubmit(){

    this.complaintService.submitComplaint(this.complaintForm.value).subscribe(data =>{
    this.toastr.success('Complaint sent successfully!', 'Success');
    this.loadComplaints();
    this.closeModal.nativeElement.click();
    }, error => {
      this.toastr.error('Sorry! Complaint not sent... Try Again', 'Ooops', {
        timeOut: 3000
      });
    })

  }

  retractComplaint(id: string){


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, retract it!'
    }).then((result) => {
      if (result.value) {
        this.complaintService.retractComplaint(id).subscribe(data  => {
        
          Swal.fire(
           'Retracted!',
           'Complaint  has been retracted.',
           'success'
         )
         this.loadComplaints();
         },
         error  => {
           console.error("Error", error);
           Swal.fire(
           'Ooops!',
           'An error occured.',
           'warning'
         )
         });
 
      }
    })
    
  }

}
