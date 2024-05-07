//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from 'src/app/back/service/commentaire.service';
import { PostService } from 'src/app/back/service/post.service';
import { React } from 'src/app/models/react';
import { User } from 'src/app/models/user';



const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
 // postId: string;
 Posts: any[] = []; 
 postId= this.activatedRoute.snapshot.params['id'];
  postData: any;
  commentaires: any[] = []; 
  //commentaireForm: FormGroup;
  commentaireForm: FormGroup = new FormGroup({}); // Initialisation de commentaireForm
  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar,
              private fb: FormBuilder,
              private router: Router, 
              private commentaireService: CommentaireService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));}

  ngOnInit(): void {
    this.loadPosts();
    this.postId = this.activatedRoute.snapshot.params['id'];
    this.getPostById(this.postId);
    this.commentaireForm = this.fb.group({
      utilisateur: [null, Validators.required],
      contenu: [null, Validators.required]
    });
  }


  loadPosts(): void {

    //this.postService.getAll().subscribe(Posts => this.Posts = Posts);
    this.postService.getAll().subscribe(Posts => {
  this.Posts = Posts;
  this.Posts.forEach(post => {
    // Assigner l'URL de l'image récupérée à la propriété imageUrl de chaque post
    post.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-755bd.appspot.com/o/yt%2FMSI%201.jpg?alt=media&token=ffb3c6e1-a135-4377-8a62-cfecd132b47e';
  });
});
  }
 /* getPostById(): void {
    this.postService.getPostById(this.postId).subscribe(
      res => {
        this.postData = res;
      },
      error => {
        this.matSnackBar.open('Something went wrong while fetching post data!', 'Ok');
      }
    );
  }

  likePost(): void {
    this.postService.likePost(this.postId).subscribe(
      () => {
        this.matSnackBar.open('Post liked successfully!', 'Ok');
        this.getPostById();
      },
      () => {
        this.matSnackBar.open('Something went wrong while liking the post!', 'Ok');
      }
    );
  }*/
  likePost(postId: number) {
    this.postService.likePost(postId).subscribe(
      () => {
        this.matSnackBar.open("Post Liked Successfully", "ok");
        this.getPostById(postId); // Mettre à jour uniquement le post spécifique
      },
      (error) => {
        this.matSnackBar.open("Something went wrong!!!!", "Ok");
      }
    );
  }
  
  
  getPostById(postId: number) {
    this.postService.getPostById(postId).subscribe(
      res => {
        this.postData = res;
        this.postData.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-755bd.appspot.com/o/yt%2FMSI%201.jpg?alt=media&token=ffb3c6e1-a135-4377-8a62-cfecd132b47e';
        console.log(res);
      },
      error => {
        this.matSnackBar.open("Something Went Wrong!!!!", "ok");
      }
    );
  }

  publishComment(): void {
    const utilisateur = this.commentaireForm.get('utilisateur')?.value;
    const contenu = this.commentaireForm.get('contenu')?.value;

    this.commentaireService.addCommentaire(this.postId).subscribe(
      () => {
        this.matSnackBar.open('Comment published successfully!', 'Ok');
        // Recharge les commentaires après envoi
        this.getPostById(this.postId);
        // Efface le formulaire après soumission
        this.commentaireForm.reset();
      },
      () => {
        this.matSnackBar.open('Something went wrong while publishing the comment!', 'Ok');
      }
    );
  }
  goToCommentPage(): void {
    this.router.navigate(['/commentaire/add-commentaire', this.postData.id]);
  }
  getCommentairesForPost() {
    this.commentaireService. getCommentairesForPost(this.postId).subscribe(
      (res) => {
        this.commentaires = res;
      },
      (error) => {
        this.matSnackBar.open("Something Went Wrong !!!! ", "Ok");
      }
    );
  }
  getCommentairesbyPost() {
    this.commentaireService. getallCommentairesbyPost(this.postId).subscribe(
      (res) => {
        this.commentaires = res;
      },
      (error) => {
        this.matSnackBar.open("Something Went Wrong !!!! ", "Ok");
      }
    );
  }
  /*addReaction(): void {
    const reaction = {
      id: 1, // Laissez-le null car il sera généré automatiquement par le serveur
      date: new Date(), // Vous pouvez définir la date comme vous le souhaitez
      user: User, // Utilisez l'objet User défini ci-dessus
      commentaire: 'hhh', // Remplacez null par le commentaire associé si vous avez cette information
      post: { id: this.postId }, // Utilisez l'ID du post actuel pour associer la réaction à ce post
      typeReact: 'like'
  };


    this.postService.addReactionToPost(this.postId, reaction).subscribe(
      (addedReaction) => {
        this.matSnackBar.open('Reaction added successfully!', 'Ok');
        // Mettre à jour les données du post après l'ajout de la réaction
        this.getPostById(this.postId);
      },
      (error) => {
        this.matSnackBar.open('Something went wrong while adding reaction!', 'Ok');
      }
    );*/
   
}


