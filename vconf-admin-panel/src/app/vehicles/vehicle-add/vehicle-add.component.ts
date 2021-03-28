import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  segments = [];
  manufacturers = [];

  segmentName: ''
  manufacturerName: ''
  variantName: ''
  unitPrice: 0
  image: undefined;

  constructor(private activeModal: NgbActiveModal, private toastr: ToastrService, private service: VehiclesService) { }

  ngOnInit(): void {
    this.loadSegments();
    this.loadManufacturers();
  }

  loadSegments() {
    this.service.getSegments().subscribe(response => {
      if (response['status'] = 'success') {
        this.segments = response['data'];
      }
      else {
        this.toastr.error(response['error']);
      }
    })
  }

  loadManufacturers() {
    this.service.getManufacturers().subscribe(response => {
      if (response['status'] = 'success') {
        this.manufacturers = response['data'];
      }
      else {
        this.toastr.error(response['error']);
      }
    })
  }

  onAdd() {
    if (this.segmentName.length == 0) {
      this.toastr.warning("PLease enter Segment Name");
    }
    else if (this.manufacturerName.length == 0) {
      this.toastr.warning("PLease enter Manufacturer Name");
    }
    else if (this.variantName.length == 0) {
      this.toastr.warning("PLease enter Variant Name");
    }
    else if (this.unitPrice == null) {
      this.toastr.warning("PLease enter Unit Price");
    }
    else {
      this.service.addVehicle(this.segmentName, this.manufacturerName, this.variantName, this.unitPrice, this.image).subscribe(response => {
        if (response['status'] == 'success') {
          this.toastr.success("Added Successfully !!");
          this.activeModal.dismiss('ok');
        }
        else {
          this.toastr.error(response['error']);
        }
      })
    }
  }

  onCancel() {
    this.activeModal.dismiss('cancel');
  }

  onImageSelect(event) {
    this.image = event.target.files[0];
  }
}
