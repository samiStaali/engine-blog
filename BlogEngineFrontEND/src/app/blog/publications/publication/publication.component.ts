import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublicationService } from 'src/app/services/publication.service';
//import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  isValid: boolean = true;
  listeCategories: Categorie[];
  constructor(public publicationService: PublicationService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    public categorieService: CategorieService
    ) { }

  ngOnInit(): void {
    this.categorieService.obtenirListeCategories().then(res => this.listeCategories = res as Categorie[]);
    debugger;
    let publicationID = this.currentRoute.snapshot.paramMap.get('id');
    if (publicationID == null)
      this.resetForm();
    else {
      this.publicationService.obtenirPublication(parseInt(publicationID)).then(res => {
        this.publicationService.formData = res;
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.publicationService.formData = {
      PublicationID: null,
      CategorieID: null,
      Titre: '',
      DatePublication: null,
      Contenu:''
    }
  }

  validateForm() {
    this.isValid = true;
    
    if (this.publicationService.formData.PublicationID == 0)
      this.isValid = false;
    return this.isValid;
  }
  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.publicationService.enregistrer().subscribe(res => {
        this.resetForm();
      // this.toastr.success('Submitted Successfully', 'Blog App.');
      this.router.navigate(['/blog']);
      })
    }
  }
}
