import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomValidators } from './custom-validators';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { formatDate } from '@angular/common';
import { PostService } from 'src/app/back/service/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent  implements OnInit {
  postForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  Id: number = 0;
  updatedPost: Post | undefined;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.postForm = this.formBuilder.group({
      contenu: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      date:['', [Validators.required, CustomValidators.pastOrPresent]],
      titre: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      commentaire: [[]],
      user: [[]],
      reacts: [[]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.Id = +id;
      if (!isNaN(this.Id) && this.Id > 0) {
        this.fetchPostDetails(this.Id);
      } else {
        console.error('Invalid Post ID:', id);
        // Gérer l'ID de formation invalide ici, comme rediriger l'utilisateur ou afficher un message d'erreur
        this.errorMessage = 'Invalid Post ID';
      }
    });
  }

  fetchPostDetails(postId: number): void {
    this.postService.getPostById(postId).subscribe(
      (post: Post) => {
        this.updatedPost = post;
        // Formater les dates avant de les afficher dans le formulaire
        this.populateFormWithPostDetails(post);
      },
      (error) => {
        console.error('Error retrieving Post ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }
  populateFormWithPostDetails(post: Post): void {
    this.postForm.patchValue({
      id: post.id,
      contenu: post.contenu,
      date: formatDate(post.date, 'yyyy-MM-dd', 'en-US'),
      titre: post.titre,
      commentaire: post.commentaire,
      user: post.user,
      reacts: post.reacts
      
    });
  }

  updatePost(): void {
    if (this.postForm.valid) {
      const updatedPostData = this.postForm.value;
      this.postService.updatePost(this.Id, updatedPostData).subscribe(
        () => {
          console.log('post updated successfully!');
          this.router.navigate(['/post/all-post']);
        },
        (error) => {
          console.error('Error updating post ', error);
          // Gérer l'erreur de mise à jour de la formation ici
          this.errorMessage = 'Error updating post';
        }
      );
    } else {
      console.log('Form is invalid. Cannot update Post.');
      this.errorMessage = 'Form is invalid. Cannot update Post.';
    }
  }

  isFieldInvalid(field: string) {
    const control = this.postForm.get(field);
    return control && control.touched && control.invalid;
  }
 


}

