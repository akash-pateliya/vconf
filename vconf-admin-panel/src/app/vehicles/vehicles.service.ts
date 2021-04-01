import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private url = 'http://localhost:4000/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles() {

    // send the token along with the request
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url, httpOptions);
  }

  getSegments() {
    // send the token along with the request
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url + '/getSegments', httpOptions);
  }

  getManufacturers(name: string) {
    // send the token along with the request
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url + '/getManufacturers/'+ name, httpOptions);
  }

  addVehicle(segmentName: string, manufacturerName: string, variantName: string, unitPrice: number, image: any) {
    const body = new FormData();
    body.append("segmentName", segmentName);
    body.append("manufacturerName", manufacturerName);
    body.append("variantName", variantName);
    body.append("unitPrice", '' + unitPrice);
    body.append("image", image);

    // send the token along with the request
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.post(this.url + '/add-vehicle', body, httpOptions);
  }

  deleteVehicle(variantName: string) {
    // send the token along with the request
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.delete(this.url + '/' + variantName, httpOptions);
  }

  // updateVehicle(segmentName: string, manufacturerName: string, variantName: string, unitPrice: number) {
  //   const body = {
  //     segmentName: segmentName,
  //     manufacturerName: manufacturerName,
  //     variantName: variantName,
  //     unitPrice: unitPrice
  //   }

  //   // send the token along with the request
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       token: sessionStorage['token']
  //     })
  //   }

  //   return this.http.put(this.url, body, httpOptions);
  // }
}
