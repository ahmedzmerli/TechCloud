import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/reclamation/reclamation.model';
import { ReclamationService } from 'src/app/service/reclamation.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-reclamationuser',
  templateUrl: './reclamationuser.component.html',
  styleUrls: ['./reclamationuser.component.css']
})
export class ReclamationuserComponent implements OnInit {
  reclamations: Reclamation[] = [];
  reclamation: Reclamation = {} as Reclamation;
  selectedReclamationId!: number;
  selectedReclamation: Reclamation | undefined;
  userReclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) { }
  openEditReclamationModal(reclamationId: number): void {
    this.selectedReclamationId = reclamationId;
    this.selectedReclamation = this.reclamations.find(reclamation => reclamation.idrec === reclamationId);
    $('#editReclamationModal').modal('show');
}
editReclamation() {
  const updatedReclamation = this.reclamations.find(reclamation => reclamation.idrec === this.selectedReclamationId);
  if (updatedReclamation) {
    this.reclamationService.updateReclamation(this.selectedReclamationId, updatedReclamation)
      .subscribe(
        (updatedEvent: Reclamation) => {
          $('#editReclamationModal').modal('hide');
        },
        (error: any) => console.error(error)
      );
  } else {
    console.error('Reclamation not found for the selected ID');
  }
}

  ngOnInit(): void {
    this.getReclamationsUtilisateur(1); // Remplacez 1 par l'ID de l'utilisateur dont vous souhaitez afficher les réclamations
  }

  getReclamationsUtilisateur(idUtilisateur: number): void {
    this.reclamationService.getReclamationsUtilisateur(idUtilisateur)
      .subscribe(reclamations => {
        this.reclamations = reclamations;
        console.log("c bon")
      });
  }

  deleteReclamation(idrec: number): void {
    // Affichage de la boîte de dialogue de confirmation
    Swal.fire({
      title: 'Are you sure ?',
      text: 'You want to delete this reclamation ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it.',
      cancelButtonText: 'No, cancel.'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reclamationService.deleteReclamation(idrec)
          .subscribe(
            () => {
              this.reclamations = this.reclamations.filter(reclamation => reclamation.idrec !== idrec);
              Swal.fire('Deleted!', 'Your reclamation has been deleted.', 'success');
            },
            (error: any) => {
              console.error('Error deleting reclamation:', error);
              Swal.fire('Error!', 'Failed to delete.', 'error');
            }
          );
      }
    });
  }
}
