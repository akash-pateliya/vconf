import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  companyName = ''
  companyAddress = ''
  username = ''
  password = ''
  confirmPassword = ''
  email = ''
  contactNo = ''

  constructor(private toastr: ToastrService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignup() {
    if (this.password != this.confirmPassword) {
      this.toastr.warning("Password not matched")
    }
    else if (this.email.length == 0) {
      this.toastr.warning("Please enter email")
    }
    else {
      this.service.signup(this.companyName, this.companyAddress, this.email, this.username, this.password, this.contactNo).subscribe(response => {
        if (response['status'] == 'success') {
          this.toastr.success("Signup Successfully !!!");
          this.router.navigate(['/auth/signin'])
        }
        else {
          console.log(response['error'])
          this.toastr.error(response['error']);
        }
      })
    }
  }
}
