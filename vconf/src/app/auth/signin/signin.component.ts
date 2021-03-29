import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = ''
  password = ''
  constructor(private toastr: ToastrService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignin() {
    if (this.email.length == 0) {
      this.toastr.warning("Please enter your Email !!")
    }
    else if (this.password.length == 0) {
      this.toastr.warning("Please enter your password !!");
    }
    else {
      this.service.signin(this.email, this.password).subscribe(response => {
        if (response['status'] == 'success') {

          // cache the user details along with the token
          const user = response['data']
          sessionStorage['name'] = user['name']
          sessionStorage['token'] = user['token']

          this.toastr.success("Login successfullly !!");
          this.router.navigate(['/home']);
        }
        else {
          console.log(response['error']);
          this.toastr.error(response['error']);
        }
      })
    }
  }
}
