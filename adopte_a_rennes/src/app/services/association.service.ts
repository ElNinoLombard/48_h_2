import { Injectable } from '@angular/core';
import ArticleModel from '../models/article.model';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http: HttpClient) {
  }

  getAllAssociations(): Observable<any>{
    const url = `http://localhost${environment.backLocation}/associations`;

    return this.http.get<any>(url);
  }
}
