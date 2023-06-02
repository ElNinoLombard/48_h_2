import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import ArticleModel from 'src/app/models/article.model';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss'],
})
export class ArticleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticleModel
  ) {}

  ngOnInit(): void {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
