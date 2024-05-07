import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './back/evenement/evenement.component';
import { PostEvenementComponent } from './back/post-evenement/post-evenement.component';
import { UpdateEvenementComponent } from './back/update-evenement/update-evenement.component';
import { DetailEvenementComponent } from './back/detail-evenement/detail-evenement.component';
import { EvenementFrontComponent } from './front/evenement-front/evenement-front.component';
import { FooterComponent } from './back/footer/footer.component';
import { FooterFrontComponent } from './front/footer-front/footer-front.component';
import { CommentaireComponent } from './front/gestionforum/commentaire/commentaire.component';
import { AddCommentaireComponent } from './front/gestionforum/commentaire/add-commentaire/add-commentaire.component';
import { AllCommentaireComponent } from './front/gestionforum/commentaire/all-commentaire/all-commentaire.component';
import { DeleteCommentaireComponent } from './front/gestionforum/commentaire/delete-commentaire/delete-commentaire.component';
import { UpdateCommentaireComponent } from './front/gestionforum/commentaire/update-commentaire/update-commentaire.component';
import { AddPostComponent } from './front/gestionforum/post/add-post/add-post.component';
import { AllPostComponent } from './front/gestionforum/post/all-post/all-post.component';
import { DeletePostComponent } from './front/gestionforum/post/delete-post/delete-post.component';
import { PostComponent } from './front/gestionforum/post/post.component';
import { SearchbytitleComponent } from './front/gestionforum/post/searchbytitle/searchbytitle.component';
import { StatComponent } from './front/gestionforum/post/stat/stat.component';
import { UpdatePostComponent } from './front/gestionforum/post/update-post/update-post.component';
import { ViewPostComponent } from './front/gestionforum/post/view-post/view-post.component';
import { AddReactComponent } from './front/gestionforum/react/add-react/add-react.component';
import { AllReactComponent } from './front/gestionforum/react/all-react/all-react.component';
import { DeleteReactComponent } from './front/gestionforum/react/delete-react/delete-react.component';
import { ReactComponent } from './front/gestionforum/react/react.component';
import { UpdateReactComponent } from './front/gestionforum/react/update-react/update-react.component';





const routes: Routes = [
  {
    path:"",
    component: EvenementComponent,
  },
  {
    path:"front",
    component: EvenementFrontComponent
  },
  
  
  {
    path:"evenements",
    component: EvenementComponent,
  },
  {
    path:"ajout",
    component:PostEvenementComponent,
  },

  {
    path:"evenement/:id",
    component:UpdateEvenementComponent,
  },
  {
    path:"detailEvenement/:id",
    component:DetailEvenementComponent,
  },
  { 
    path: 'commentaire',
    component: CommentaireComponent,
    children: [
      {path: 'add-commentaire/:id', component: AddCommentaireComponent },
      { path: 'all-commentaire', component: AllCommentaireComponent },
      {  path: 'update-commentaire/:id', component: UpdateCommentaireComponent },
      { path: 'delete-commentaire/:id', component: DeleteCommentaireComponent },
      { path: '', redirectTo: 'all-commentaire', pathMatch: 'full' } // Redirection par défaut vers 'all'
    ]
  },
  { 
    path: 'post',
    component: PostComponent,
    children: [
      {path: 'add-post', component: AddPostComponent },
      { path: 'all-post', component: AllPostComponent },
      { path: 'searchbytitle', component: SearchbytitleComponent },
      { path: 'stat', component: StatComponent },
      {  path: 'update-post/:id', component: UpdatePostComponent },
      { path: 'delete-post/:id', component: DeletePostComponent },
      { path: 'view-post/:id', component: ViewPostComponent },

      { path: '', redirectTo: 'all-post', pathMatch: 'full' } // Redirection par défaut vers 'all'
    ]
  },
  { 
    path: 'react',
    component: ReactComponent,
    children: [
      {path: 'add-react', component: AddReactComponent },
      { path: 'all-react', component: AllReactComponent },
      {  path: 'update-react/:id', component: UpdateReactComponent },
      { path: 'delete-react/:id', component: DeleteReactComponent },
      { path: '', redirectTo: 'all-react', pathMatch: 'full' } // Redirection par défaut vers 'all'
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
