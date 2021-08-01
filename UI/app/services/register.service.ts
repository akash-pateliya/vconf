import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {BehaviorSubject, Observable } from 'rxjs';
import { Register } from './register';



interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private currentUserSubject: BehaviorSubject<Register>;
    public currentUser: Observable<Register>;

    constructor(private httpClient: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Register>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Register {
      return this.currentUserSubject.value;
  }
  


  private loggedInStatus = false;
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  

  private baseURL = "http://localhost:8080/Registeration/Register";
  private LogURL ="http://localhost:8080/Registeration/Login";

   

  //createEmployee(register: Register): Observable<Object>{
    //return this.httpClient.post(`${this.baseURL}`, register);
  //}

 // PostRegister(register : Register):Observable<any>{
   // return this.httpClient.post<any>(`${this.baseURL}`,register);
 // }

  PostRegister(register : Register):any{
    
    return this.httpClient.post<any>(this.baseURL,register);
    
  }

  // logincustomer(LogObj):Observable<any>
  // {
  //   return this.httpClient.post<any>(this.LogURL,LogObj);
  // }

  logincustomer(LogObj):Observable<any>
  {
    return this.httpClient.post<any>(this.LogURL,LogObj);
  }


  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}



