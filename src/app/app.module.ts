import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { PosteComponent } from './poste/poste.component';
import { CategorieComponent } from './categorie/categorie.component';
import { LiveradioComponent } from './liveradio/liveradio.component';
import { ContactComponent } from './contact/contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { PartComponent } from './part/part.component';
import { DashbComponent } from './dashb/dashb.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    PosteComponent,
    CategorieComponent,
    LiveradioComponent,
    ContactComponent,
    CardsComponent,
    HomeComponent,
    PartComponent,
    DashbComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
