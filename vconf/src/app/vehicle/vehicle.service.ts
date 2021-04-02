import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private variantName: string;

  private url = 'http://localhost:4100/vehicles';

  constructor(private http: HttpClient) {

  }

  getVariantName() {
    return this.variantName;
  }

  setVariantName(name: string) {
    this.variantName = name;
  }

  getVariantId(name: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    const body = {
      name: name
    }

    return this.http.post(this.url + '/getVariantId', body, httpOptions)
  }

  getSegments() {

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url + "/getSegments", httpOptions);
  }

  getManufacturers(name: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url + "/getManufacturers/" + name, httpOptions);
  }

  getVariants(Manufacturername: string, segmentName: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url + "/getVariants/" + segmentName + "/" + Manufacturername, httpOptions);
  }

  getSpecifications(id: number) {

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url + '/getSpecifications/' + id, httpOptions);
  }

  getInterior(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url+'/getInterior/'+id, httpOptions);
  }

  getExterior(id: number){

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url+'/getExterior/'+id, httpOptions);
  }
}
