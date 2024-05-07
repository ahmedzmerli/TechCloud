import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationComponent } from './back/reclamation/reclamation.component';
import { PostReclamationComponent } from './back/post-reclamation/post-reclamation.component';
import { UpdateReclamationComponent } from './back/update-reclamation/update-reclamation.component';
import { ReclamationuserComponent } from './front/reclamationuser/reclamationuser.component'; 
import { AllTemplateBackComponent } from './back/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './front/all-template-front/all-template-front.component';

const routes: Routes = [
  {
    path: "",
    component: AllTemplateBackComponent,
    children: [
      { path: "listreclamation", component: ReclamationComponent },
     
     
    ]
  },
  {
    path: "front",
    component: AllTemplateFrontComponent,
    children: [
      { path: "reclamationuser", component: ReclamationuserComponent },
      { path: "add", component: PostReclamationComponent },
      { path: "update", component: UpdateReclamationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
