import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './back/evenement/evenement.component';
import { PostEvenementComponent } from './back/post-evenement/post-evenement.component';
import { UpdateEvenementComponent } from './back/update-evenement/update-evenement.component';
import { DetailEvenementComponent } from './back/detail-evenement/detail-evenement.component';
import { EvenementFrontComponent } from './front/evenement-front/evenement-front.component';
import { FooterComponent } from './back/footer/footer.component';
import { FooterFrontComponent } from './front/footer-front/footer-front.component';
import { SuccessComponentComponent } from './back/gestionformation/success-component/success-component.component';
import { DownloadComponent } from './back/gestionformation/download/download.component';
import { CertificatComponent } from './back/gestionformation/certificat/certificat.component';
import { AddCertificatComponent } from './back/gestionformation/certificat/add-certificat/add-certificat.component';
import { AllCertificatComponent } from './back/gestionformation/certificat/all-certificat/all-certificat.component';
import { PiechartComponent } from './back/gestionformation/certificat/piechart/piechart.component';
import { UpdateCertificatComponent } from './back/gestionformation/certificat/update-certificat/update-certificat.component';
import { DeleteCertificatComponent } from './back/gestionformation/certificat/delete-certificat/delete-certificat.component';
import { ModuleformationComponent } from './back/gestionformation/moduleformation/moduleformation.component';
import { AddModuleformationComponent } from './back/gestionformation/moduleformation/add-moduleformation/add-moduleformation.component';
import { AllModuleformationComponent } from './back/gestionformation/moduleformation/all-moduleformation/all-moduleformation.component';
import { UpdateModuleformationComponent } from './back/gestionformation/moduleformation/update-moduleformation/update-moduleformation.component';
import { DeleteModuleformationComponent } from './back/gestionformation/moduleformation/delete-moduleformation/delete-moduleformation.component';
import { FormationComponent } from './back/gestionformation/formation/formation.component';
import { AddComponent } from './back/gestionformation/formation/add/add.component';
import { AllComponent } from './back/gestionformation/formation/all/all.component';
import { ParticipateComponent } from './back/gestionformation/formation/participate/participate.component';
import { UpdateComponent } from './back/gestionformation/formation/update/update.component';
import { DeleteComponent } from './back/gestionformation/formation/delete/delete.component';






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
  { path: 'success-component', component: SuccessComponentComponent },

  { path: 'download/:filename', component: DownloadComponent },

    { 
      path: 'certificat',
      component: CertificatComponent,
      children: [
        {path: 'add-certificat', component: AddCertificatComponent },
        { path: 'all-certificat', component: AllCertificatComponent },
        { path: 'piechart', component:PiechartComponent  },
        { path: 'download', component:DownloadComponent  },
        {  path: 'update-certificat/:id', component: UpdateCertificatComponent },
        { path: 'delete-certificat/:id', component: DeleteCertificatComponent },
        { path: '', redirectTo: 'all-certificat', pathMatch: 'full' } // Redirection par défaut vers 'all'
      ]
    },
    
  
      { 
        path: 'moduleformation',
        component: ModuleformationComponent,
        children: [
          {path: 'add-moduleformation', component: AddModuleformationComponent },
          {path: 'all-moduleformation', component: AllModuleformationComponent },
          {path: 'update-moduleformation/:id', component: UpdateModuleformationComponent },
          { path: 'delete-moduleformation/:id', component: DeleteModuleformationComponent },
          { path: '', redirectTo: 'add-moduleformation', pathMatch: 'full' } // Redirection par défaut vers 'all'
        ]
      },
      { 
        path: 'formation',
        component: FormationComponent,
        children: [
          { path: 'add', component: AddComponent },
          { path: 'all', component: AllComponent },
          { path: 'participate', component: ParticipateComponent },
          { path: 'update/:id', component: UpdateComponent },
          { path: 'delete/:id', component: DeleteComponent },
          { path: '', redirectTo: 'all', pathMatch: 'full' } // Redirection par défaut vers 'all'
        ]
      },
      { path: '', redirectTo: '/formation', pathMatch: 'full' } 
    ];
    



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
