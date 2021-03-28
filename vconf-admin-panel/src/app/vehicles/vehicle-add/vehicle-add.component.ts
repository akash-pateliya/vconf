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

  segmentName: ''
  manufacturerName: ''
  variantName: ''
  unitPrice: 0

  constructor(private activeModal: NgbActiveModal, private toastr: ToastrService, private service: VehiclesService) { }

  ngOnInit(): void {
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
      this.service.addVehicle(this.segmentName, this.manufacturerName, this.variantName, this.unitPrice).subscribe(response => {
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
}
