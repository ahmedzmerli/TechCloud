import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from '../../service/reclamation.service';
import { Reclamation } from 'src/app/model/reclamation/reclamation.model';
import Swal from 'sweetalert2';
import { BadWordService } from 'src/app/service/bad-word-service.service';

@Component({
  selector: 'app-post-reclamation',
  templateUrl: './post-reclamation.component.html',
  styleUrls: ['./post-reclamation.component.css']
})
export class PostReclamationComponent {
  reclamation: Reclamation = {} as Reclamation;

  constructor(private reclamationService: ReclamationService, private router:Router ,private badWordService : BadWordService) { 
    this.reclamation.datesoumission = new Date();
  }

  addReclamation(): void {
    const idUser = 1; // ID de l'utilisateur statique
    this.reclamation.description
    this.badWordService.checkForBadWord(this.reclamation.description).subscribe(
      (response) => {
        if (!response['is-bad']) {
          this.reclamationService.postReclamation(this.reclamation, idUser)
      .subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Reclamation sent !',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/front/reclamationuser']);
       
        
      });
          // Message is clean, proceed to send it
        
        } else {
          // Message contains bad words, handle it appropriately
          console.error("Message contains bad words");
          Swal.fire({
            icon: "error",
            title: "Be Polite",
            text: "Message contains bad words",
            footer: "Number of bad words :"+(response['bad-words-total'])
          });
          // For example, display an error message to the user
        }
      },
      (error) => {
        console.error("Error checking for bad words", error);
      }
    );
    
  }


}
