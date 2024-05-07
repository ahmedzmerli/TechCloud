import { Component, OnInit } from '@angular/core';
import { CommentaireService } from 'src/app/back/service/commentaire.service';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  commentaires: any[] = []; // Initialisez formations avec un tableau vide par défaut
  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.loadCommentaires();   }

  loadCommentaires(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    this.commentaireService.getAll().subscribe(commentaires => this.commentaires = commentaires);
  }

}
