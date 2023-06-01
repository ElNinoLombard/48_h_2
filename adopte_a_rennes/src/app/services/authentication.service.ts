import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Implement your login logic here
    // Example: Check if the provided credentials are valid and set the authentication status accordingly
    if (username === 'example' && password === 'password') {
      this.authenticated = true;
      return true;
    } else {
      this.authenticated = false;
      return false;
    }
  }

  logout(): void {
    // Implement your logout logic here
    // Example: Clear authentication status and perform any necessary cleanup
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    // Return the authentication status
    return this.authenticated;
  }
}
