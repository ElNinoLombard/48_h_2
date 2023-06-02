import { Component, OnInit } from '@angular/core';
import { AssociationService } from 'src/app/services/association.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss'],
})
export class AssociationsComponent implements OnInit {
  searchTerm: string = '';
  originalAssociations: UserModel[] = [];

  associations: UserModel[] = [];

  constructor(private associationService: AssociationService) {}

  ngOnInit(): void {
    this.associationService.getAllAssociations().subscribe((associations: any) => {
      console.log(associations);
      this.associations = associations.data.filter((association: UserModel) => association.role_id === '4');
      console.log(this.associations);
    });
  }

  filterArticles(): void {
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, display all articles
      this.associations = this.originalAssociations;
    } else {
      // Perform filtering based on the search term
      const filteredArticles = this.originalAssociations.filter((article) => {
        const lowerCaseTitle = article.title!.toLowerCase();
        const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseSearchTerm);
      });

      // Assign the filtered articles to the main articles array
      this.associations = filteredArticles;
    }
  }
}