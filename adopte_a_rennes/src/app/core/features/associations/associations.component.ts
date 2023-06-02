import { Component, OnInit } from '@angular/core';

export interface Association {
  image: string;
  nom: string;
  telephone: string;
  site: string;
  localisation: string;
}

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss'],
})
export class AssociationsComponent implements OnInit {
  associations: Association[] = [
    {
      image: 'link-to-image.png',
      nom: 'Association 1',
      telephone: '06 00 00 00 00',
      site: 'www.association1.com',
      localisation: 'Paris',
    },
    {
      image: 'link-to-image.png',
      nom: 'Association 2',
      telephone: '06 00 00 00 00',
      site: 'www.association2.com',
      localisation: 'Paris',
    },
    {
      image: 'link-to-image.png',
      nom: 'Association 3',
      telephone: '06 00 00 00 00',
      site: 'www.association3.com',
      localisation: 'Paris',
    },
    {
      image: 'link-to-image.png',
      nom: 'Association 4',
      telephone: '06 00 00 00 00',
      site: 'www.association4.com',
      localisation: 'Paris',
    },
    {
      image: 'link-to-image.png',
      nom: 'Association 5',
      telephone: '06 00 00 00 00',
      site: 'www.association5.com',
      localisation: 'Paris',
    },
    {
      image: 'link-to-image.png',
      nom: 'Association 6',
      telephone: '06 00 00 00 00',
      site: 'www.association6.com',
      localisation: 'Paris',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
