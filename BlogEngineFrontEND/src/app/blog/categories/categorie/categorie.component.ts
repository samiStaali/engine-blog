import { PublicationService } from 'src/app/services/publication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from 'src/app/services/categorie.service';
//import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.model';
import { Publication } from 'src/app/models/publication.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  isValid: boolean = true;
  listeCategories: Categorie[];
  listePublications: Publication[];
  constructor(public categorieService: CategorieService,
    private router: Router,
    private publicationService: PublicationService,
    private currentRoute: ActivatedRoute,
    //private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.categorieService.obtenirListeCategories().then(res => this.listeCategories = res as Categorie[]);
    this.publicationService.obtenirListePublications().then(res => this.listePublications = res as Publication[]);
    let categorieID = this.currentRoute.snapshot.paramMap.get('id');
    if (categorieID == null)
      this.resetForm();
    else {
      this.categorieService.obtenirCategorie(parseInt(categorieID)).then(res => {
        this.categorieService.formData = res;
      });
    }

  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.categorieService.formData = {
      CategorieID: null,
      Titre: ''
    }
  }

  validateForm() {
    this.isValid = true;
    
    if (this.categorieService.formData.CategorieID == 0)
      this.isValid = false;
    return this.isValid;
  }
  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.categorieService.enregistrer().subscribe(res => {
        this.resetForm();
      // this.toastr.success('Submitted Successfully', 'Blog App.');
      this.router.navigate(['/blog']);
      })
    }
  }
}
