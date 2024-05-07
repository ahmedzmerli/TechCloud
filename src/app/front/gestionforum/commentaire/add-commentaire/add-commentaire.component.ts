import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from './custom-validators';
import {  ActivatedRoute } from '@angular/router';
import { Commentaire } from 'src/app/models/commentaire';
import { CommentaireService } from 'src/app/back/service/commentaire.service';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {
  commentaireForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  //post: any[] = [];
  postId: string | undefined;
  commentaires: Commentaire[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commentaireService: CommentaireService,
    private route: ActivatedRoute,
  ) {
    this.commentaireForm = this.formBuilder.group({
      contenu: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      datePublication:['', [Validators.required, CustomValidators.pastOrPresent]],
      post: [[]],
      user: [[]],
      reacts: [[]],
    });
  }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id') ?? undefined;
    });
  }

  /*loadModules(): void {
    this.commentaireService.getAllpost().subscribe(
      (post: any[]) => {
        this.post = post;
      },
      (error) => {
        console.error('Error loading modules: ', error);
      }
    );
  }*/

  isFieldInvalid(field: string) {
    const control = this.commentaireForm.get(field);
    return control && control.touched && control.invalid;
  }
 /* onSubmit() {
    if (this.commentaireForm.valid) {
      const newCommentaire = this.commentaireForm.value;
      console.log(newCommentaire.modules);
      this.commentaireService.addCommentaire(newCommentaire).subscribe(
        () => {
          console.log('commentaire added successfully!');
          this.router.navigate(['/commentaire/all-commentaire']);
        },
        (error) => {
          console.error('Error adding commentaire ', error);
          this.errorMessage = 'Error adding commentaire';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add commentaire.');
      this.errorMessage = 'Form is invalid. Cannot add commentaire.';
    }
  }*/
  getCommentairesForPost(postId: number) {
    this.commentaireService.getCommentairesForPost(postId).subscribe(
      (commentaires: Commentaire[]) => {
        this.commentaires = commentaires;
      },
      (error) => {
        console.error('Error loading comments: ', error);
        // Gérer les erreurs de chargement des commentaires
      }
    );
  }
  onSubmit() {
    if (this.commentaireForm.valid && this.postId !== undefined && !isNaN(Number(this.postId))) {
      const postIdNumber = Number(this.postId); // Convertir postId en nombre
      const newCommentaire = this.commentaireForm.value;
      this.commentaireService.addCommentaireToPost(postIdNumber, newCommentaire).subscribe(
        () => {
          console.log('commentaire added successfully!');
           this.router.navigate(['/post/view-post', this.postId]);

          // Recharger les commentaires après l'ajout
          this.getCommentairesForPost(postIdNumber);
          // Effacer le formulaire après soumission
          this.commentaireForm.reset();
          
        },
        (error) => {
          console.error('Error adding commentaire ', error);
          this.errorMessage = 'Error adding commentaire';
        }
      );
    } else {
      console.log('Form is invalid or postId is not defined or not a number. Cannot add commentaire.');
      this.errorMessage = 'Form is invalid or postId is not defined or not a number. Cannot add commentaire.';
    }
  }
  

  
}