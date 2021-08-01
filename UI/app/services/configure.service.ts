import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import {Orders} from './order'
import {Iorder} from './iorder'


@Injectable({
  providedIn: 'root'
})
export class ConfigureService {

  private conURL='http://localhost:8080/Registeration';
  // flag : string;
 // flagBool : boolean = true;

  constructor(private http:HttpClient) { }

  getDefaultFeatures(variant_name:string):Observable<any[]>
  {
      return this.http.get<any[]>(this.conURL+"/GetDefaultFeatures/"+variant_name);
  }
 
  getStandardFeatures(variant_name:string):Observable<any[]>
  {
    return this.http.get<any[]>(this.conURL+"/GetStandardFeatures/"+variant_name);
  }

  getExteriorFeatures(variant_name:string):Observable<any[]>
  {
    return this.http.get<any[]>(this.conURL+"/GetExteriorFeatures/"+variant_name);
  }
  
  getInteriorFeatures(variant_name:string):Observable<any[]>
  {
    return this.http.get<any[]>(this.conURL+"/GetInteriorFeatures/"+variant_name);
  }

  getPrice(variant_name:string):Observable<any[]>
  {
    return this.http.get<any[]>(this.conURL+"/GetVehiclePrice/"+variant_name);
  }

  getImagepath(variant_name:string):Observable<any[]>
  {
    return this.http.get<any[]>(this.conURL+"/GetImagePath/"+variant_name);
  }
  getModification(variant_name:string):Observable<any>
  {
    return this.http.get<number>(this.conURL+"/showIntConfUser/"+variant_name);
  }

  

  getOrderdetail(username:string):Observable<Orders>
  {
   return this.http.get<Orders>(this.conURL+"/getorder/"+username);
  }
  
  postorderdetail(order : Orders):any{
    
    return this.http.post<any>(this.conURL+"/addorder",order);
    
  }

 
 
}