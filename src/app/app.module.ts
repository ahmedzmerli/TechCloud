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
import { NgChartsModule } from 'ng2-charts';
import { StatsComponent } from './back/stats/stats.component';
import { DetailsEvenementFrontComponent } from './front/details-evenement-front/details-evenement-front.component';



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
    StatsComponent,
    DetailsEvenementFrontComponent,
   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgChartsModule,
   
  ],
  providers: [HttpClient,EvenementService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
