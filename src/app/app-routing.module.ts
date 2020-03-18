import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';


const routes: Routes = [

  { path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  { path:"categorie",component:CategorieComponent},
  {path:"Contact",component:ContactComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
