import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './back/evenement/evenement.component';
import { PostEvenementComponent } from './back/post-evenement/post-evenement.component';
import { UpdateEvenementComponent } from './back/update-evenement/update-evenement.component';
import { DetailEvenementComponent } from './back/detail-evenement/detail-evenement.component';
import { EvenementFrontComponent } from './front/evenement-front/evenement-front.component';
import { FooterComponent } from './back/footer/footer.component';
import { FooterFrontComponent } from './front/footer-front/footer-front.component';
import { StatsComponent } from './back/stats/stats.component';
import { DetailsEvenementFrontComponent } from './front/details-evenement-front/details-evenement-front.component';





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
    path:"stats",
    component:StatsComponent,
  },
  {
    path:"Evenement/:id",
    component:DetailsEvenementFrontComponent,
  }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
