import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register;
  loading = false;
  submitted = false;

  regForm: FormGroup = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    email: new FormControl(),
    contactnumber: new FormControl(),
    userid: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    public fb: FormBuilder,
    private dataserv: RegisterService,
    private router: Router
  ) {
    this.buildRegForm();
  }

  buildRegForm() {
    this.regForm = this.fb.group({
      //Id: ['', Validators.required,],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      address: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ],
      ],
      contactnumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      userid: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }

  ngOnInit() {
    this.buildRegForm();
  }

  get id() {
    return this.regForm.get('id');
  }
  get name() {
    return this.regForm.get('name');
  }
  get address() {
    return this.regForm.get('address');
  }
  get email() {
    return this.regForm.get('email');
  }
  get contactnumber() {
    return this.regForm.get('contactnumber');
  }
  get userid() {
    return this.regForm.get('userid');
  }
  get password() {
    return this.regForm.get('password');
  }

  onSubmit() {
    this.submitted = true;

    if (!this.regForm.valid) {
      console.log('failed');
      return;
    }

    this.loading = true;
    console.log(this.regForm.value);
    this.dataserv.PostRegister(this.regForm.value).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        window.alert('register failed');

        console.log('error');
      }
    );
  }

  mapFormValues(form: FormGroup) {
    this.register = new Register();
    //this.register.Id = form.controls.Id.value;
    this.register.name = form.controls.name.value;
    this.register.address = form.controls.address.value;
    this.register.email = form.controls.email.value;
    this.register.contactnumber = form.controls.contactnumber.value;
    this.register.userid = form.controls.userid.value;
    this.register.password = form.controls.password.value;
  }
}
