import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url = 'http://localhost:4100/vehicles';

  constructor(private http:HttpClient)
  {

  }

  getSegments(){

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    
    return this.http.get(this.url+"/getSegments", httpOptions);
  }

  getManufacturers(name:string){
    
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url+"/getManufacturers/"+name, httpOptions);
  }

  getVariants(Manufacturername: string, segmentName: string){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url+"/getVariants/"+segmentName+"/"+Manufacturername, httpOptions);
  }
}
