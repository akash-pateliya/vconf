import { Component, OnInit } from '@angular/core';
import { ConfigureService } from '../configure.service';
import { Router } from '@angular/router';
import {Iorder} from '../iorder'
import {Orders} from '../order'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  post_order:Orders;
  get_order:Orders;
  variant_name : string;

  constructor(private conService:ConfigureService,private router:Router) {}
 

  
  ngOnInit(): void {
  this.post_order=new Orders(1,1,1,"","");
    this.post_order.name = localStorage.getItem('user').toString();
    this.post_order.amount = parseInt(localStorage.getItem('finalammount'));
    this.post_order.quantity= parseInt(localStorage.getItem('qty'));
    this.post_order.variantname = localStorage.getItem('variant_Name');
    this.variant_name = localStorage.getItem('variant_Name');
    
  //   this.conService.postorderdetail(this.post_order).subscribe(
  //     (data) => {console.log("posted")},
  //     error =>{console.log("error")});
    
  //   this.conService.getOrderdetail(this.post_order.name).
  //   subscribe(
  //     data=> {
  //       this.get_order=data;
  //       console.log(data);
  //             },
  //     error =>console.log("error"));
  // }
  }
   goback()
   {
     this.router.navigate["/modify"];
   }

//  logout()
//    {
//      window.alert("Thank u for placing an order");
//     // localStorage.clear();
//      this.router.navigate[""];
//    }
  
  }