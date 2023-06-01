import { Injectable } from '@angular/core';
import ArticleModel from '../models/article.model';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { url } from 'inspector';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getAllArticle(): Observable<any>{
    const url = `http://localhost${environment.backLocation}`;
    console.log(this.http.get<any>(url).subscribe());
    return this.http.get<any>(url);
  }
}
