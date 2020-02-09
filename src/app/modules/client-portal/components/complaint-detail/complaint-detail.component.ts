import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from  "@angular/common/http";


import { ComplaintService } from '../../shared/complaint.service';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.css']
})
export class ComplaintDetailComponent implements OnInit {

  complaintId: any;
  complaint: any;
  complaintCategory: any;
  complaintDescription: any;
  complaintResponse: any;
  complaintUsername: any;
  complaintIndexNumber: any;
  complaintStatus: any;

  constructor( private route: ActivatedRoute,private complaintService: ComplaintService) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        this.complaintId = params.id;
      
      });

      this.complaintService.fetchComplaint(this.complaintId).subscribe(data=>{
        let res = data[0];
          this.complaintCategory = res.name;
          this.complaintDescription = res.description;
          this.complaintResponse = res.response;
          this.complaintUsername = res.studentName;
          this.complaintIndexNumber = res.index_no;
          this.complaintStatus = res.status;
      },error=>{
        console.log(error)
      })

  }

}
