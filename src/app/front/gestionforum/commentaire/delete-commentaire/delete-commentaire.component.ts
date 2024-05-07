import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from 'src/app/back/service/commentaire.service';
import { Commentaire } from 'src/app/models/commentaire';


@Component({
  selector: 'app-delete-commentaire',
  templateUrl: './delete-commentaire.component.html',
  styleUrls: ['./delete-commentaire.component.css']
})
export class DeleteCommentaireComponent implements OnInit {
  commentaire: Commentaire | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentaireService: CommentaireService
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.commentaireService.getCommentaireById(id.toString()).subscribe(
      (commentaire: Commentaire) => {
        this.commentaire = commentaire;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving certificat ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  confirmDelete(): void {
    if (this.commentaire) {
      this.commentaireService.deleteCommentaire(this.commentaire.id.toString()).subscribe(
        () => {
          console.log('Certificat deleted successfully!');
          this.router.navigate(['/commentaire/all-commentaire']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('Certificat deleted successfully!');
            this.router.navigate(['/commentaire/all-commentaire']);
          } else {
            console.error('Error deleting certificat ', error);
          }
        }
      );
    }
  }
  

  cancelDelete(): void {
    this.router.navigate(['/commentaire/all-commentaire']);
  }
}
