import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  this.authService.getProfile().subscribe(profile => 
    {
    var user = profile.user;
    console.log(user.name);
    },
  err => {
    console.log(err, 'kjhkjh');
    return false;
  })
  }

}
