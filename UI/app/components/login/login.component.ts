import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  register: Register;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg : string;
 // ValidString:string;
  LogForm : FormGroup= new FormGroup(
    {
    userid : new FormControl,
    password : new FormControl, 
    }
  );

  constructor(
    public fb: FormBuilder,
    private dataserv: RegisterService,
    private router: Router
  ) 
  { 
    // if(localStorage.getItem('loginFlag')==="false")
    // {
    //   this.errorMsg = localStorage.getItem('loginError');
    // }
  }
    

onSubmit()
{
  this.submitted=true;
  if(!this.LogForm.valid)
  {
    console.log(this.LogForm.value);
  }
  else{
    this.postData(this.LogForm.value);
  }
  
};


postData(loginObj)
{
  var booleanValue : string;
  this.dataserv.logincustomer(loginObj).subscribe
  (
    data=>
    {
      window.alert(data);
      console.log(data);
      booleanValue = data;
      localStorage.setItem('loginFlag',data);
      if(booleanValue==="Valid user")
      {
        this.router.navigate(['/segment']);
        localStorage.setItem('user',loginObj.userid);
        console.log(localStorage.getItem('user'))
      }
      else
      {
        window.alert("Invalid user");
        this.router.navigate(['login']);
      }  
    }
  ),
(
  error => {console.log("error");
  window.alert("error");


})};
  ngOnInit()
  {

  }

  get f() { return this.LogForm.controls};

  get userid() {
    return this.LogForm.get('userid');
  }
  get password() {
    return this.LogForm.get('password');
  }

  // onSubmit() 
  // {
  //   this.submitted = true;

  //   if (!this.LogForm.valid) 
  //     {
  //       console.log("failed");
  //       return;
  //     }
      
  //     this.loading = true;
  //     this.dataserv.GetUserValid(this.LogForm.value.UserId,this.LogForm.value.Password).subscribe(
  //       (data) => {console.log()
  //         //this.router.navigate(['/success']);
  //       },
  //       error => {console.log("error");
  //       this.loading=false;
  //      });
  //     }

    //   onSubmit() {
    //     this.submitted = true;

    //     // stop here if form is invalid
    //     if (this.LogForm.invalid) {
    //         return;
    //     }

    //     this.loading = true;
    //     this.dataserv.login(this.f.UserId.value, this.f.Password.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 console.log("error")
    //                 this.loading = false;
    //             });
    // }
       

 

  //mapFormValues(form: FormGroup) {
    //this.register = new Register();
   // this.register.UserId = form.controls.UserId.value;
  //  this.register.Password = form.controls.Password.value;
 // }

  //CheckUser(username, password) {
   // this.dataserv.GetUserValid(username, password).subscribe(
    //  (data) => {
     //   console.log(data);
     //   this.router.navigate([' ']);
     // },
    //  (error) => console.log('error')
//);
 // }

  // GetUserValid(username, password) {
  //   this.dataserv.GetUserValid(username, password).subscribe((data) => {
  //     console.log(data);
  //     this.router.navigate(['#']);
  //   });
  // }

}
