import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  checkUserConnexion(mail: string,password: string): Observable<any>{
    const url = `http://localhost${environment.backLocation}/login`;

    const args = {
      mail: mail,
      password: password
    }
    return this.http.post<any>(url,args);
  }
}
