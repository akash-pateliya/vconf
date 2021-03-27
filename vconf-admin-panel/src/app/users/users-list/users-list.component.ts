import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [];
  constructor(private service: UsersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getUsers().subscribe(response => {
      if (response['status'] == 'success') {
        this.users = response['data'];
      }
      else {
        this.toastr.error(response['error']);
      }
    })
  }

}
