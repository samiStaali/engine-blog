import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Publication } from '../models/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  formData: Publication;
  constructor(private http:HttpClient) { }

  obtenirListePublications(){
    return this.http.get(environment.apiURL+'/Publication').toPromise();
   }

  enregistrer() {
    var body = {
      ...this.formData
    };
    return this.http.post(environment.apiURL + '/Publication', body);
  }


  obtenirPublication(id:number):any {
    return this.http.get(environment.apiURL + '/Publication/'+id).toPromise();
  }


  
}
