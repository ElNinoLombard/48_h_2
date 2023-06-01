import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './core/features/acceuil/acceuil.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { ArticlesComponent } from './core/features/articles/articles.component';
import { AssociationsComponent } from './core/features/associations/associations.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { 
    path: 'auth',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard',
    //canActivate: [AuthGuard], // Apply the auth guard to the dashboard parent route
    children: [
      { path: 'articles', component: ArticlesComponent },
      { path: 'associations', component: AssociationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
