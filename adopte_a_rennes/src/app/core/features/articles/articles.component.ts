import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';
import { ArticleService } from 'src/app/services/article.service';
import ArticleModel from 'src/app/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  searchTerm: string = '';
  originalArticles: ArticleModel[] = [];

  articles: ArticleModel[] = []

  constructor(private dialog: MatDialog, private articleService: ArticleService) {}

  ngOnInit(): void {
  this.articleService.getAllArticle().subscribe((articles: any) => {
    this.articles = articles.data;
    this.originalArticles = articles.data;
  });
}

  filterArticles(): void {
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, display all articles
      this.articles = this.originalArticles;
    } else {
      // Perform filtering based on the search term
      const filteredArticles = this.originalArticles.filter((article) => {
        const lowerCaseTitle = article.title!.toLowerCase();
        const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseSearchTerm);
      });

      // Assign the filtered articles to the main articles array
      this.articles = filteredArticles;
    }
  }

  showFullContent(article: ArticleModel): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      width: '500px',
      data: article,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed:', result);
    });
  }
}
