import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigureService } from '../configure.service';



@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {

  mymap : Map<any,any>;
  variant_name : string;
  acc_price:number=0;
  min_qty:number=0;
  unit_price:number=0;
  totalprice:number=0;
  

  constructor(private conService:ConfigureService,private router:Router) {}

  ngOnInit(): void {
  
 
    this.variant_name = localStorage.getItem('variant_Name');
    this.min_qty = parseInt(localStorage.getItem('qty'));
    this.unit_price = parseInt(localStorage.getItem('UnitPrice'));
    this.conService.getModification(this.variant_name).
    subscribe(
      data=> {
        this.mymap=data; 
        console.log(data);
        console.log(this.mymap);
              },

      error =>console.log(error));
  }

   onChangeFeature(acc_price)
  {
    var totalfeatureprice = 0;
    console.log(acc_price);
    totalfeatureprice += parseInt(acc_price);
    console.log(totalfeatureprice);
    this.totalprice = totalfeatureprice + this.totalprice;
    console.log(this.totalprice);//nan
    let finalammount:number;
    finalammount= (this.min_qty*this.unit_price) + (this.totalprice*this.min_qty);
    console.log(finalammount);
    localStorage.setItem('finalammount',finalammount.toString());
  }
}