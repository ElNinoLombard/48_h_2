import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  form!: FormGroup;
  constructor(private articleService: ArticleService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: new FormControl(
        '',Validators.required
      )
    })
    this.articleService.getAllArticle();
  }

  articles = [
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
    {title:'rufus',description:'rufus est un développeur de 23 ans qui donne la patte et ne se bave pratiquement pas dessus'},
  ]





}
