import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './select-vehicle.component.html',
  styleUrls: ['./select-vehicle.component.css']
})
export class SelectVehicleComponent implements OnInit {

  segments = [];
  manufacturers = [];
  variants = [];

  @ViewChild('segment') segment;
  @ViewChild('manufacturer') manufacturer;
  @ViewChild('variant') variant;

  variantName = '';

  constructor(private service: VehicleService, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.loadSegments();
  }

  loadSegments(){
    this.service.getSegments().subscribe(response => {
      if(response['status'] == 'success'){
        this.segments = response['data'];
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }

  onChangeSelect(value: string){
    this.service.getManufacturers(value).subscribe(response => {
      if(response['status'] == 'success'){
        this.manufacturers = response['data'];
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }

  onChangeManufacturer(value: string){
    this.service.getVariants(value).subscribe(response => {
      if(response['status'] == 'success'){
        this.variants = response['data'];
      }
      else{
        this.toastr.error(response['error']);
      }
    })
  }

  onReset(){
    this.segment.nativeElement.value = ' ';
    this.manufacturer.nativeElement.value = ' ';
    this.variant.nativeElement.value = ' ';
  }

  onConfirm(){
    console.log(this.variantName);
  }

}
