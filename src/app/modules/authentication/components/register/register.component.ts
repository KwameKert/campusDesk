import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService} from '../../shared/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading: boolean  = false;
  studentForm: any ;
  constructor(private fb: FormBuilder, private authService: AuthService, 
    private toastr: ToastrService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {

      this.studentForm = this.fb.group({
        indexNumber : ["", Validators.required],
        name: ["", Validators.required],
        gender: ["female", Validators.required],
        phone: ["",[Validators.required,
                  Validators.pattern("^[0-9]*$"),
                  Validators.minLength(8)]],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        email: ["", Validators.required]
      });
  }



  onSubmit(){

   
    let password = this.studentForm.get('password').value;
    let confirm_password = this.studentForm.get('confirmPassword').value;
    if(password !== confirm_password){
      this.toastr.error('Passwords not matching', 'Ooops', {
        timeOut: 3000
      });
    }else{
      this.saveStudent(this.studentForm.value);
    }
    
  }


  saveStudent(data){
    this.authService.registerStudent(data).subscribe(data => {
      let res: any = data;
      const authData = {
        status : true,
        token: res.api_key,
        name: res.name,
        indexNumber: res.index_no
    };


    this.authService.setLoggedStatus(authData);
    this.toastr.success('Welcome to HelpDesk!', 'Success');
    this.isLoading = false;
    if(res.role == 3){
      this.router.navigate(['client-dashboard']);
    }else{
      this.router.navigate(['client-dashboard']);
    }
    }, error => {

      this.toastr.error('Sorry! Registration process failed... Try Again', 'Ooops', {
        timeOut: 3000
      });

    })
  }




}
