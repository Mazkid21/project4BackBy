import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
users;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  	
  	this.users = this.auth.getUsers()

  	console.log(this.users);
  }

 

}
