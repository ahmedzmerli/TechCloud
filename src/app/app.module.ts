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
import { AddPostComponent } from './front/gestionforum/post/add-post/add-post.component';
import { UpdatePostComponent } from './front/gestionforum/post/update-post/update-post.component';
import { AllPostComponent } from './front/gestionforum/post/all-post/all-post.component';
import { DeletePostComponent } from './front/gestionforum/post/delete-post/delete-post.component';
import { AllCommentaireComponent } from './front/gestionforum/commentaire/all-commentaire/all-commentaire.component';
import { AddCommentaireComponent } from './front/gestionforum/commentaire/add-commentaire/add-commentaire.component';
import { UpdateCommentaireComponent } from './front/gestionforum/commentaire/update-commentaire/update-commentaire.component';
import { DeleteCommentaireComponent } from './front/gestionforum/commentaire/delete-commentaire/delete-commentaire.component';
import { AddReactComponent } from './front/gestionforum/react/add-react/add-react.component';
import { UpdateReactComponent } from './front/gestionforum/react/update-react/update-react.component';
import { DeleteReactComponent } from './front/gestionforum/react/delete-react/delete-react.component';
import { ReactComponent } from './front/gestionforum/react/react.component';
import { CommentaireComponent } from './front/gestionforum/commentaire/commentaire.component';
import { PostComponent } from './front/gestionforum/post/post.component';
import { AllReactComponent } from './front/gestionforum/react/all-react/all-react.component';
import { ViewPostComponent } from './front/gestionforum/post/view-post/view-post.component';
import { SearchbytitleComponent } from './front/gestionforum/post/searchbytitle/searchbytitle.component';
import { StatComponent } from './front/gestionforum/post/stat/stat.component';
import { CommonModule } from '@angular/common';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { environement } from './front/gestionforum/environement/environement';
import { RouterModule } from '@angular/router';
import {AngularFireModule} from "@angular/fire/compat";



import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import de MatSnackBarModule
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { MatTableModule } from '@angular/material/table';

import { NgChartsModule } from 'ng2-charts';




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
    AddPostComponent,
    UpdatePostComponent,
    AllPostComponent,
    DeletePostComponent,
    AllCommentaireComponent,
    AddCommentaireComponent,
    UpdateCommentaireComponent,
    DeleteCommentaireComponent,
    AddReactComponent,
    UpdateReactComponent,
    DeleteReactComponent,
    ReactComponent,
    CommentaireComponent,
    PostComponent,
    AllReactComponent,
    ViewPostComponent,
    SearchbytitleComponent,
    StatComponent
   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environement.firebaseConfig),
    AngularFireStorageModule,
   MatSnackBarModule,
   MatCardModule,
  MatChipsModule,
    MatIconModule,
    BrowserAnimationsModule,
   MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatRadioModule,
    MatGridListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    NgChartsModule
   
  ],
  providers: [HttpClient,EvenementService,MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
