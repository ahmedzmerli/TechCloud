import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from 'src/app/models/commentaire';

import { CustomValidators } from './custom-validators';
import { formatDate } from '@angular/common';
import { CommentaireService } from 'src/app/back/service/commentaire.service';

@Component({
  selector: 'app-update-commentaire',
  templateUrl: './update-commentaire.component.html',
  styleUrls: ['./update-commentaire.component.css']
})
export class UpdateCommentaireComponent implements OnInit {
  commentaireForm: FormGroup;
  errorMessage: string = '';
  Id: number = 0;
  updatedCommentaire: Commentaire | undefined;
  //post: any[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commentaireService: CommentaireService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.commentaireForm = this.formBuilder.group({
      contenu: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      datePublication:['', [Validators.required, CustomValidators.pastOrPresent]],
      post: [[]],
      user: [[]],
      reacts: [[]],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.Id = +id;
      if (!isNaN(this.Id) && this.Id > 0) {
        this.fetchCommentaireDetails(this.Id);
      } else {
        console.error('Invalid commentaire ID:', id);
        // Gérer l'ID de formation invalide ici, comme rediriger l'utilisateur ou afficher un message d'erreur
        this.errorMessage = 'Invalid commentaire ID';
      }
    });
  }

  fetchCommentaireDetails(commentaireId: number): void {
    this.commentaireService.getCommentaireById(commentaireId).subscribe(
      (commentaire: Commentaire) => {
        this.updatedCommentaire = commentaire;
        // Formater les dates avant de les afficher dans le formulaire
        this.populateFormWithCommentaireDetails(commentaire);
      },
      (error) => {
        console.error('Error retrieving commentaire ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }
  populateFormWithCommentaireDetails(commentaire: Commentaire): void {
    this.commentaireForm.patchValue({
      id: commentaire.id,
      contenu: commentaire.contenu,
      datePublication: formatDate(commentaire.datePublication, 'yyyy-MM-dd', 'en-US'),
      post: commentaire.post,
      user: commentaire.user
      
    });
  }

  updateCommentaire(): void {
    if (this.commentaireForm.valid) {
      const updatedCommentaireData = this.commentaireForm.value;
      this.commentaireService.updateCommentaire(this.Id, updatedCommentaireData).subscribe(
        () => {
          console.log('commentaire updated successfully!');
          this.router.navigate(['/commentaire/all-commentaire']);
        },
        (error) => {
          console.error('Error updating commentaire ', error);
          // Gérer l'erreur de mise à jour de la formation ici
          this.errorMessage = 'Error updating commentaire';
        }
      );
    } else {
      console.log('Form is invalid. Cannot update commentaire.');
      this.errorMessage = 'Form is invalid. Cannot update commentaire.';
    }
  }
  isFieldInvalid(field: string) {
    const control = this.commentaireForm.get(field);
    return control && control.touched && control.invalid;
  }
}
