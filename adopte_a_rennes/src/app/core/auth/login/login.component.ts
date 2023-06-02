import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    // Check if the user is already authenticated
    if (this.authService.isAuthenticated()) {
      this.redirectToHome();
    }
  }

  login(username: string, password: string): void {
    const loggedIn = this.authService.login(username, password);
    if (loggedIn) {
      this.redirectToHome();
    } else {
      // Handle invalid credentials or display an error message
    }
  }

  redirectToHome(): void {
    this.router.navigateByUrl('');
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('login');
  }

}
