import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarBComponent } from './back/navbar-b/navbar-b.component';
import { SidebarBComponent } from './back/sidebar-b/sidebar-b.component';
import { FooterBComponent } from './back/footer-b/footer-b.component';
import { ReclamationComponent } from './back/reclamation/reclamation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostReclamationComponent } from './back/post-reclamation/post-reclamation.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateReclamationComponent } from './back/update-reclamation/update-reclamation.component';
import { ReclamationuserComponent } from './front/reclamationuser/reclamationuser.component';
import { AllTemplateBackComponent } from './back/all-template-back/all-template-back.component';
import { FooterFrontComponent } from './front/footer-front/footer-front.component';
import { HeaderFrontComponent } from './front/header-front/header-front.component';
import { SliderFrontComponent } from './front/slider-front/slider-front.component';
import { AllTemplateFrontComponent } from './front/all-template-front/all-template-front.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBComponent,
    SidebarBComponent,
    FooterBComponent,
    ReclamationComponent,
    PostReclamationComponent,
    UpdateReclamationComponent,
    ReclamationuserComponent,
    AllTemplateBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    SliderFrontComponent,
    AllTemplateFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
