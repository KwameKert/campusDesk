import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public isLoading:boolean = false;
  constructor(private authService: AuthService, 
    private router: Router,
     private spinner: NgxSpinnerService,
     private toastr: ToastrService) { }
    

    public model: any = {};


  ngOnInit() {   

          
  }

	onSubmit(){

        this.isLoading = true;
		this.authService.getUserDetails(this.model).subscribe(
     data  => {
      
       let res:any = data;
      
            const authData = {
                status : true,
                token: res.api_key,
                name: res.name,
                indexNumber: res.index_no
            };

            this.authService.setLoggedStatus(authData);
            this.toastr.success('Welcome to HelpDesk!', 'Success');
            this.isLoading = false;
            if(res.role_id == 1){
              this.router.navigate(['admin-dashboard']);
            }else{
              this.router.navigate(['client-dashboard']);
            }

        }, error  => {
          this.isLoading = false;
          this.toastr.error('Sorry! An error occured', 'Ooops', {
            timeOut: 3000
          });
            console.log("Error", error);
        })

	}



}
