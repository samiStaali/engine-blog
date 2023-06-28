import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  formData: Categorie;
  constructor(private http:HttpClient) { }

  obtenirListeCategories(){
    return this.http.get(environment.apiURL+'/Categorie').toPromise();
   }


  enregistrer() {
    var body = {
      ...this.formData
    };
    return this.http.post(environment.apiURL + '/Categorie', body);
  }


  obtenirCategorie(id:number):any {
    return this.http.get(environment.apiURL + '/Categorie/'+id).toPromise();
  }

}
