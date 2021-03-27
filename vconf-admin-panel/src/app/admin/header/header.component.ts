import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    // clear the session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user_name');

    this.router.navigate(['/signin']);

  }
}