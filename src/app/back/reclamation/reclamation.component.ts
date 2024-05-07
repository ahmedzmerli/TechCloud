import { Component } from '@angular/core';
import { ReclamationService } from '../../service/reclamation.service';
import { ReponseService } from 'src/app/service/reponse.service';
import { Reclamation } from 'src/app/model/reclamation/reclamation.model';
import { Reponse } from 'src/app/model/reponse/reponse.model';
declare var $: any;
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  reclamationss: any=[];
  reclamations: Reclamation[] = [];
    replyDescription: string = '';
    replyDate: string = '';
    datereponse: Date | undefined; 
    description!: string;
    selectedReclamation: Reclamation = {} as Reclamation;
constructor(private reclamationService:ReclamationService, private reponseService:ReponseService){

}
ngOnInit(){
this.getALLreclamation();
}
getALLreclamation(){
  this.reclamationService.getAllreclamation().subscribe((res)=>{
    console.log(res);
    this.reclamationss=res;
  })
}
// Fonction pour ouvrir le formulaire modal de réponse
openReplyModal(reclamationId: number): void {
  this.replyDescription = ''; // Assurez-vous que replyDescription est initialisé à une chaîne vide
  this.replyDate = new Date().toISOString().split('T')[0]; // Préremplissage de la date avec la date actuelle

  // Assurez-vous que la propriété datereponse est initialisée à une valeur valide
  this.datereponse = new Date();

  // Utilisez un nom de variable différent pour éviter les conflits de noms
  const idReclamation = reclamationId;

  $('#replyModal').modal('show');
}
selectReclamation(reclamation: Reclamation): void {
  this.selectedReclamation = reclamation;
}

// Fonction pour soumettre le formulaire de réponse
submitReply(): void {
  // Logique pour récupérer l'ID de la réclamation associée
  const reclamationId = this.selectedReclamation.idrec; // Supposons que vous ayez une propriété selectedReclamation contenant la réclamation sélectionnée

  // Création de la nouvelle réponse à envoyer au service
  const newReply: Reponse = {
    description: this.replyDescription,
    datereponse: new Date(this.replyDate)
  };

  // Appel du service pour ajouter la réponse
  this.reponseService.postReponse(newReply, reclamationId).subscribe(() => {
    $('#replyModal').modal('hide');
    // Redirection vers la liste des réclamations après avoir ajouté la réponse
    // Vous pouvez utiliser la navigation programmée ici
  });
}

}
