import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from 'src/app/models/commentaire';
import { Post } from 'src/app/models/post';
import { CustomValidators } from './custom-validators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { PostService } from 'src/app/back/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  imageUrl: string = '';
  //post: any[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService,
    private fireStorage:AngularFireStorage
  ) {
    this.postForm = this.formBuilder.group({
      contenu: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      date:['', [Validators.required, CustomValidators.pastOrPresent]],
      titre: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      commentaire: [[]],
      user: [[]],
      reacts: [[]],
      imageUrl: [''] 
    });
  }

  ngOnInit(): void {
   // this.loadModules();
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
/*onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `postImages/${new Date().getTime()}_${file.name}`;
      const fileRef = this.fireStorage.ref(filePath);
      const uploadTask = this.fireStorage.upload(filePath, file);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imageUrl = url;
          });
        })
      ).subscribe();
    }
  }*/
 // hedha eli ken y5de m upload image
  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `yt/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const imageUrl = await uploadTask.ref.getDownloadURL()
      console.log(imageUrl)
      // Stocker l'URL de l'image dans le poste actuel
      this.postForm.patchValue({ imageUrl: imageUrl });

      
    }
  }
  /*
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `yt/${file.name}`;
      // Envoyer le fichier à votre backend pour le stockage
      this.postService.uploadImage(file).subscribe(
        (imageUrl: string) => {
          // Stocker l'URL de l'image dans le formulaire
          this.postForm.patchValue({ imageUrl: imageUrl });
        },
        (error) => {
          console.error('Error uploading image ', error);
          // Gérer l'erreur de téléchargement de l'image
        }
      );
    }
  }*/

  isFieldInvalid(field: string) {
    const control = this.postForm.get(field);
    return control && control.touched && control.invalid;
  }
 
  onSubmit() {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      console.log(newPost.modules);
      this.postService.addPost(newPost).subscribe(
        () => {
          console.log('Post added successfully!');
          this.router.navigate(['/post/all-post']);
        },
        (error) => {
          console.error('Error adding post ', error);
          this.errorMessage = 'Error adding post';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add post.');
      this.errorMessage = 'Form is invalid. Cannot add post.';
    }
  }
  /*  onSubmit() {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      const imageUrlControl = this.postForm.get('imageUrl');
      
      // Vérifier si le contrôle de l'URL de l'image existe et s'il est valide
      if (imageUrlControl && imageUrlControl.valid) {
        const imageUrl = imageUrlControl.value;
        // Assigner l'URL de l'image au nouveau poste
        newPost.imageUrl = imageUrl;
      } else {
        console.error('Image URL is invalid');
        return;
      }
      
      // Ajouter le nouveau poste
    this.postService.addPost(newPost).subscribe(
        () => {
          console.log('Post added successfully!');
          this.router.navigate(['/post/all-post']);
        },
        (error) => {
          console.error('Error adding post ', error);
          this.errorMessage = 'Error adding post';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add post.');
      this.errorMessage = 'Form is invalid. Cannot add post.';
    }
  }*/



}

