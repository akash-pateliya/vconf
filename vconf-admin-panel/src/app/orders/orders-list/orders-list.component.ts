import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders = [];
  constructor(private service: OrdersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.service.getOrders().subscribe(response => {
      if (response['status'] == 'success') {
        this.orders = response['data'];
      }
      else {
        this.toastr.error(response['error']);
      }
    })
  }
}
