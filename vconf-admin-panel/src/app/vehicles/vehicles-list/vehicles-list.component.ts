import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VehicleAddComponent } from '../vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from '../vehicle-edit/vehicle-edit.component';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  popoverTitle = 'Delete Confirmation';
  popoverMessage = 'Are you sure you want to Delete this record !!!';
  confirmClicked = false;
  vehicles = [];

  constructor(private service: VehiclesService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.service.getVehicles().subscribe(response => {
      if (response['status'] = 'success') {
        this.vehicles = response['data'];
      }
      else {
        this.toastr.error(response['error']);
      }
    })
  }

  onAdd() {
    const modalRef = this.modalService.open(VehicleAddComponent);

    modalRef.result.finally(() => {
      // reload the categories
      this.loadVehicles();
    })
  }

  // onEdit(vehicle) {
  //   const modalRef = this.modalService.open(VehicleEditComponent);
  //   const component = modalRef.componentInstance as VehicleEditComponent;

  //   component.segmentName = vehicle.segmentName;
  //   component.manufacturerName = vehicle.manufacturerName;
  //   component.variantName = vehicle.variantName;
  //   component.unitPrice = vehicle.unitPrice;

  //   modalRef.result.finally(() => {
  //     // reload the categories
  //     this.loadVehicles();
  //   })
  // }

  onDelete(vehicle) {
    this.service.deleteVehicle(vehicle['variantName']).subscribe(response => {
      if (response['status'] = 'success') {
        this.toastr.success('Deleted !!!');
        this.loadVehicles();
      } else {
        this.toastr.error(response['error']);
      }
    })
  }

}
