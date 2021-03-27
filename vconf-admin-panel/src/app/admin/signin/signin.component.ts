import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';
  constructor(private service: AdminService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignin() {
    if (this.email.length == 0) {
      this.toastr.warning("Please enter your Email !");
    }
    else if (this.password.length == 0) {
      this.toastr.warning("Please enter your password !");
    }
    else {
      this.service.signin(this.email, this.password).subscribe(response => {
        if (response['status'] == 'success') {
          this.toastr.success("Login Successfully !!");

          const user = response['data'];
          sessionStorage['name'] = user.name;
          sessionStorage['token'] = user.token;

          this.router.navigate(['/orders-list']);
        }
        else {
          this.toastr.error(response['error']);
        }
      })
    }
  }
}