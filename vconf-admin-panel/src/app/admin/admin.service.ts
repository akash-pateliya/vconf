import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  private url = 'http://localhost:4000/admin';

  constructor(private http: HttpClient, private router: Router) { }

  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + "/signin", body);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // check if user is already logged in
    if (!sessionStorage['token']) {
      // user is not yet logged in

      // force user to login
      this.router.navigate(['/signin'])

      return false
    }

    // user is already logged in
    return true
  }
}