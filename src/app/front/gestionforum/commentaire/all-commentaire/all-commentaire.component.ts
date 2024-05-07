import { Component, OnInit } from '@angular/core';
import { CommentaireService } from 'src/app/back/service/commentaire.service';

@Component({
  selector: 'app-all-commentaire',
  templateUrl: './all-commentaire.component.html',
  styleUrls: ['./all-commentaire.component.css']
})
export class AllCommentaireComponent implements OnInit {
  Commentaires: any[] = []; 
  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.loadCommentaires();   }

  loadCommentaires(): void {

    this.commentaireService.getAll().subscribe(Commentaires => this.Commentaires = Commentaires);
  }
}
