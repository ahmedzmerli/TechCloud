import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './back/all-template-back/all-template-back.component';
import { SidebarBackComponent } from './back/sidebar-back/sidebar-back.component';
import { NavbarBackComponent } from './back/navbar-back/navbar-back.component';
import { FooterComponent } from './back/footer/footer.component';
import { EvenementComponent } from './back/evenement/evenement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EvenementService } from './back/service/evenement.service';
import { PostEvenementComponent } from './back/post-evenement/post-evenement.component';
import { UpdateEvenementComponent } from './back/update-evenement/update-evenement.component';
import { DetailEvenementComponent } from './back/detail-evenement/detail-evenement.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderFrontComponent } from './front/header-front/header-front.component';
import { FooterFrontComponent } from './front/footer-front/footer-front.component';
import { SliderFrontComponent } from './front/slider-front/slider-front.component';
import { EvenementFrontComponent } from './front/evenement-front/evenement-front.component';

import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { CertificatComponent } from './back/gestionformation/certificat/certificat.component';
import { FormationComponent } from './back/gestionformation/formation/formation.component';
import { ModuleformationComponent } from './back/gestionformation/moduleformation/moduleformation.component';
import { UpdateComponent } from './back/gestionformation/formation/update/update.component';
import { AddComponent } from './back/gestionformation/formation/add/add.component';
import { AllComponent } from './back/gestionformation/formation/all/all.component';
import { DeleteComponent } from './back/gestionformation/formation/delete/delete.component';
import { UpdateCertificatComponent } from './back/gestionformation/certificat/update-certificat/update-certificat.component';
import { AddCertificatComponent } from './back/gestionformation/certificat/add-certificat/add-certificat.component';
import { DeleteCertificatComponent } from './back/gestionformation/certificat/delete-certificat/delete-certificat.component';
import { AllCertificatComponent } from './back/gestionformation/certificat/all-certificat/all-certificat.component';
import { AddModuleformationComponent } from './back/gestionformation/moduleformation/add-moduleformation/add-moduleformation.component';
import { AllModuleformationComponent } from './back/gestionformation/moduleformation/all-moduleformation/all-moduleformation.component';
import { UpdateModuleformationComponent } from './back/gestionformation/moduleformation/update-moduleformation/update-moduleformation.component';
import { DeleteModuleformationComponent } from './back/gestionformation/moduleformation/delete-moduleformation/delete-moduleformation.component';
import { SuccessComponentComponent } from './back/gestionformation/success-component/success-component.component';
import { ParticipateComponent } from './back/gestionformation/formation/participate/participate.component';
import { DownloadComponent } from './back/gestionformation/download/download.component';
import { PiechartComponent } from './back/gestionformation/certificat/piechart/piechart.component';




@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    SidebarBackComponent,
    NavbarBackComponent,
    FooterComponent,
    EvenementComponent,
    PostEvenementComponent,
    UpdateEvenementComponent,
    DetailEvenementComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    SliderFrontComponent,
    EvenementFrontComponent,
    CertificatComponent,
    FormationComponent,
    ModuleformationComponent,
    UpdateComponent,
    AddComponent,
    AllComponent,
    DeleteComponent,
    UpdateCertificatComponent,
    AddCertificatComponent,
    DeleteCertificatComponent,
    AllCertificatComponent,
    AddModuleformationComponent,
    AllModuleformationComponent,
    UpdateModuleformationComponent,
    DeleteModuleformationComponent,
    SuccessComponentComponent,
    ParticipateComponent,
    DownloadComponent,
         PiechartComponent
   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,

   RouterModule.forRoot([]), // Ajoutez RouterModule.forRoot avec les routes de votre application ici
    NgChartsModule
  ],
  providers: [HttpClient,EvenementService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
