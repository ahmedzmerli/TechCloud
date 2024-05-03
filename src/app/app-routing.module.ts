import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './back/evenement/evenement.component';
import { PostEvenementComponent } from './back/post-evenement/post-evenement.component';
import { UpdateEvenementComponent } from './back/update-evenement/update-evenement.component';
import { DetailEvenementComponent } from './back/detail-evenement/detail-evenement.component';





const routes: Routes = [
  {
    path:"",
    component: EvenementComponent,
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
  }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
