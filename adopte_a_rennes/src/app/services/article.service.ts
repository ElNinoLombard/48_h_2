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
    const url = `http://localhost${environment.backLocation}/article`;

    return this.http.get<any>(url);

    }

  addArticle(title: string, description: string, author_id: string, image_id: string, createdDate: string, modifiedDate: string): Observable<any> {
    const url = `http://localhost${environment.backLocation}/article`;

    const params = {
      title,
      description,
      author_id,
      image_id,
      createdDate,
      modifiedDate
    }

    return this.http.post<any>(url, params);
  }


}
