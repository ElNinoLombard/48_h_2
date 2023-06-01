import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() isUserConnected: boolean = false;
  loggedOutTemplate = true;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Check the authentication status when the component is initialized
    this.checkAuthenticationStatus();
  }

  checkAuthenticationStatus() {
    // Use your authentication service to check if the user is authenticated
    this.isUserConnected = this.authService.isAuthenticated();
  }

}
