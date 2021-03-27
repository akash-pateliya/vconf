import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles = [];

  constructor(private service: VehiclesService, private toastr: ToastrService) { }

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

}
