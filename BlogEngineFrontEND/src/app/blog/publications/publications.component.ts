import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication.model';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  //listePublications: Publication[];
  listePublications: string[] = ['mimi', 'mama', 'momo'];
  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    //this.CategorieService.obtenirListeCategories().then(res => this.listeCategories = res as Categorie[]);
    
  }


}