import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { Publication } from 'src/app/models/publication.model';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  listePublications: Publication[];
  listeCategories: Categorie[];
  
  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.publicationService.obtenirListePublications().then(res => this.listePublications = res as Publication[]); 
  }


}