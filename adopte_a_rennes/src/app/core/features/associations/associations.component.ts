import { Component, OnInit } from '@angular/core';
import { AssociationService } from 'src/app/services/association.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss'],
})
export class AssociationsComponent implements OnInit {
  associations: UserModel[] = [];

  constructor(private associationService: AssociationService) {}

  ngOnInit(): void {
    this.associationService.getAllAssociations().subscribe((associations: any) => {
      console.log(associations);
      this.associations = associations.data.filter((association: UserModel) => association.role_id === '4');
      console.log(this.associations);
    });
  }
}
