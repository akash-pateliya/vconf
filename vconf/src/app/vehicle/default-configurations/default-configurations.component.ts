import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-default-configurations',
  templateUrl: './default-configurations.component.html',
  styleUrls: ['./default-configurations.component.css']
})
export class DefaultConfigurationsComponent implements OnInit {

  manufacturerName = sessionStorage['manufacturerName'];
  variantName = '';
  variantId = 0;

  specifications:any = [];
  interiors:any = [];
  exteriors:any = [];

  constructor(private service:VehicleService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.variantName =  this.service.getVariantName();
    this.getVariantId();
  }

  getVariantId(){
    this.service.getVariantId(this.variantName)
    .subscribe(response => {
      if(response['status'] == 'success'){
        this.variantId = response['data'][0]['variantId'];
        this.loadSpecifications();
        this.loadInterior();
        this.loadExterior();
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }
  loadSpecifications(){
    this.service.getSpecifications(this.variantId).subscribe(response => {
      if(response['status'] == 'success'){
        this.specifications = response['data'][0];
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }

  loadInterior(){
    this.service.getInterior(this.variantId).subscribe(response => {
      if(response['status'] == 'success'){
        this.interiors = response['data'][0];
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }

  loadExterior(){
    this.service.getExterior(this.variantId).subscribe(response => {
      if(response['status'] == 'success'){
        this.exteriors = response['data'][0];
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }

}
