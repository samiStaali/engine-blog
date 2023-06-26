import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }

  obtenirListePublications(){
   return this.http.get(environment.apiURL+'/Publication').toPromise();
  }
}
