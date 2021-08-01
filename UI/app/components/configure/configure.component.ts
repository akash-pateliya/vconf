

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,Form} from '@angular/forms';
import { ConfigureService } from '../configure.service';


@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  variant_Name:string;
  deafault_features:any[];
  standard_features:any[];
  interior_features:any[];
  exterior_features:any[];
  price_variant:any[];
  image_path:any[];
  total_price : number;
  seg_qty:number;

  

  
  con : string[];
  image : string[];
  variant_name :string;
  size: number;

  constructor(private conService:ConfigureService,private router:Router) 
  { 
    // if(localStorage.getItem('loginFlag')!="true")
    // {
    //   this.router.navigate(['/login']);
    //   localStorage.setItem('loginError',"Please Login")
    // }
    // else
    {
      this.variant_name = localStorage.getItem('variant_Name');
     
      console.log(this.variant_name);
    }
    
  }

  ngOnInit(): void {

    this.variant_Name=localStorage.getItem("variant_Name");//set inside segment which is used inside config page next to segment page 
    this.conService.getDefaultFeatures(this.variant_name).subscribe(data=>this.deafault_features=data);
    this.conService.getStandardFeatures(this.variant_name).subscribe(data=>this.standard_features=data);
    this.conService.getInteriorFeatures(this.variant_name).subscribe(data=>this.interior_features=data);
    this.conService.getExteriorFeatures(this.variant_name).subscribe(data=>this.exterior_features=data);
    this.conService.getPrice(this.variant_name).subscribe(data=>this.price_variant=data);
    this.conService.getImagepath(this.variant_name).subscribe(data=>this.image_path=data);
    this.seg_qty = parseInt(localStorage.getItem('qty'));//set inside segment

    //this.total_price *= this.price_variant[0];
   
    // solution:callby //MDN
    //this.conService.getTotalprice(this.price_variant,this.seg_qty).subscribe(data=>this.total_price=data);
   //this.deafault_features=con[]
  //  for (let i = 0; i < this.size; i++) {
  //   console.log ("Block statement execution no." + i);
  // }
  }

 
  setPrice()
  {
    //temp:String=JSON.stringify(this.price_variant[0] * this.seg_qty);
    localStorage.setItem("total_price",this.price_variant[0].toString());
    localStorage.setItem('UnitPrice',this.price_variant[0].toString());
  }
  

}


