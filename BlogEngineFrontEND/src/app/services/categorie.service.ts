import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  obtenirListeCategories(){
   return this.http.get(environment.apiURL+'/Categorie').toPromise();
  }
}
