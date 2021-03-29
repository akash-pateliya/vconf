import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private url = 'http://localhost:4100/user'

  constructor(private http: HttpClient, private router: Router) { }

  signup(companyName: string, companyAddress: string, email: string, username: string, password: string, contactNo: string) {
    const body = {
      companyName: companyName,
      companyAddress: companyAddress,
      email: email,
      username: username,
      password: password,
      contactNo: contactNo
    }

    return this.http.post(this.url + "/signup", body);
  }

  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + "/signin", body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // check if user is already logged in
    if (!sessionStorage['token']) {
      // user is not yet logged in

      // force user to login
      this.router.navigate(['/auth/signin'])

      return false
    }

    // user is already logged in
    return true
  }
}
