import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriesComponent } from './blog/categories/categories.component';
import { PublicationsComponent } from './blog/publications/publications.component';
import { CategorieComponent } from './blog/categories/categorie/categorie.component';
import { FormsModule } from '@angular/forms';
import { PublicationComponent } from './blog/publications/publication/publication.component';
//import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CategoriesComponent,
    PublicationsComponent,
    CategorieComponent,
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
