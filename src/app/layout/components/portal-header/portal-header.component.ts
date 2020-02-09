import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../../../modules/authentication/shared/auth.service';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService) { }

  username = localStorage.getItem('helpDeskUsername');
  ngOnInit() {
  }

  logOut(){
  	this.auth.removeLoggedStatus();
  	  this.router.navigate(['login']);
  }

}
