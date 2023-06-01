import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shouldShowNavbar: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.shouldShowNavbar = this.shouldShowNavbarOnCurrentRoute();
      });
  }

  private shouldShowNavbarOnCurrentRoute(): boolean {
    const currentUrl = this.router.url;
    const routesWithoutNavbar = ['/login', '/signup'];
    return !routesWithoutNavbar.includes(currentUrl);
  }
}
