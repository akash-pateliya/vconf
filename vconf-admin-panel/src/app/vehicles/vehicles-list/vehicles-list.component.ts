import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VehicleAddComponent } from '../vehicle-add/vehicle-add.component';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles = [];

  constructor(private service: VehiclesService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.service.getUsVehicles().subscribe(response => {
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

}
