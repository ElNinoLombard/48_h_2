import { Injectable } from '@angular/core';
import ArticleModel from '../models/article.model';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getAllArticle(username: string, password: string): ArticleModel {
    const url = environment.backLocation + '/article';

    const resp = this.http.get(url);

    resp.subscribe(
      data => {
        console.log(data)
        // const varTemp1 = data.parse()
      }
    )
  }
}
