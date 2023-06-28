import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from './../../services/categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  listeCategories: Categorie[];
  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.obtenirListeCategories().then(res => this.listeCategories = res as Categorie[]);
    
  }


}
