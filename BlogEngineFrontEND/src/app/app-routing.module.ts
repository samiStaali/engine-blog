import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './blog/categories/categorie/categorie.component';
import { PublicationComponent } from './blog/publications/publication/publication.component';


const routes: Routes = [
  {path:'',redirectTo:'blog',pathMatch:'full'},
  {path:'blog',component:BlogComponent},
  {path:'categorie',children:[
    {path:'',component:CategorieComponent},  
    {path:'modifier/:id',component:CategorieComponent}
  ]},
  {path:'publication',children:[
    {path:'',component:PublicationComponent},  
    {path:'modifier/:id',component:PublicationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
