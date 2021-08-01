import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Segment } from './Segment';
import { Isegment } from './Isegment';
import { Manufacturer } from './Manufacturer';
import { Imanufacturer } from './Imanufacturer';
import { Ivariant } from './Ivariant';
import { Variant } from './Variant';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

   private getURL='http://localhost:8080/Registeration';

  constructor(private http:HttpClient) { }

  getSegment():Observable<Isegment[]>
  {
    return this.http.get<Isegment[]>(this.getURL+"/get/segments");
  }

  getManufacturer(seg_name):Observable<any[]>
  {
    //seg_id = seg_name;
    //return this.http.get<Imanufacturer[]>(`${this.url}Customers/${seg_id}`);
    return this.http.get<any[]>(this.getURL+"/crud/manufacturer/"+seg_name);
  }

  getVariant(seg_name:string,manu_name:string):Observable<any[]>
  {
    //return this.http.get<Imodel>(`${this.url}Select/?mid=${manu_id}&sid=${seg_id}`);
    return this.http.get<any[]>(this.getURL+"/crud/manufacturer/"+seg_name+"/"+manu_name);
  }

  // getVariantById(id : number):Observable<any>
  // {
  //     return this.http.get<Ivariant>(this.getURL+"crud/getModelByid/"+id);
  // }

}
