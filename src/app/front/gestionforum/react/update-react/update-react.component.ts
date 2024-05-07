import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomValidators } from './custom-validators';
import { TypeReact } from 'src/app/models/typeReact';
import { HttpClient } from '@angular/common/http';
import { React } from 'src/app/models/react';
import { formatDate } from '@angular/common';
import { ReactService } from 'src/app/back/service/react.service';

@Component({
  selector: 'app-update-react',
  templateUrl: './update-react.component.html',
  styleUrls: ['./update-react.component.css']
})
export class UpdateReactComponent implements OnInit {
  reactForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  Id: number = 0;
  updatedReact: React | undefined;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private reactService: ReactService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.reactForm = this.formBuilder.group({
      date:['', [Validators.required, CustomValidators.pastOrPresent]],
      post: [[]],
      user: [[]],
      commentaire: [[]],
      typeReact: [[]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.Id = +id;
      if (!isNaN(this.Id) && this.Id > 0) {
        this.fetchReactDetails(this.Id);
      } else {
        console.error('Invalid react ID:', id);
        // Gérer l'ID de formation invalide ici, comme rediriger l'utilisateur ou afficher un message d'erreur
        this.errorMessage = 'Invalid react ID';
      }
    });
  }

  fetchReactDetails(reactId: number): void {
    this.reactService.getReactById(reactId).subscribe(
      (react: React) => {
        this.updatedReact = react;
        // Formater les dates avant de les afficher dans le formulaire
        this.populateFormWithReactDetails(react);
      },
      (error) => {
        console.error('Error retrieving react ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }
  populateFormWithReactDetails(react: React): void {
    this.reactForm.patchValue({
      id: react.id,
      date: formatDate(react.date, 'yyyy-MM-dd', 'en-US'),
      commentaire: react.commentaire,
      user: react.user,
      typeReact: react.typeReact,
      post: react.post,
      
    });
  }

  updateReact(): void {
    if (this.reactForm.valid) {
      const updatedReactData = this.reactForm.value;
      this.reactService.updateReact(this.Id, updatedReactData).subscribe(
        () => {
          console.log('react updated successfully!');
          this.router.navigate(['/react/all-react']);
        },
        (error) => {
          console.error('Error updating react ', error);
          // Gérer l'erreur de mise à jour de la formation ici
          this.errorMessage = 'Error updating react';
        }
      );
    } else {
      console.log('Form is invalid. Cannot update react.');
      this.errorMessage = 'Form is invalid. Cannot update react.';
    }
  }


  isFieldInvalid(field: string) {
    const control = this.reactForm.get(field);
    return control && control.touched && control.invalid;
  }
  /*onSubmit() {
    if (this.reactForm.valid) {
      const newReact = this.reactForm.value;
      console.log(newReact.modules);
      this.reactService.addReact(newReact).subscribe(
        () => {
          console.log('React added successfully!');
          this.router.navigate(['/react/all-react']);
        },
        (error) => {
          console.error('Error adding react ', error);
          this.errorMessage = 'Error adding react';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add react.');
      this.errorMessage = 'Form is invalid. Cannot add react.';
    }
  }*/
 // Dans votre composant TypeScript


onSubmit() {
  if (this.reactForm.valid) {
    const newReact = this.reactForm.value;
     console.log('Date:', newReact.date);
    // Convertir le typeReact en TypeReact
    newReact.typeReact = this.convertToTypeReact(newReact.typeReact);
  
    this.reactService.addReact(newReact).subscribe(
      () => {
        console.log('React added successfully!');
        this.router.navigate(['/react/all-react']);
      },
      (error) => {
        console.error('Error adding react ', error);
        this.errorMessage = 'Error adding react';
      }
    );
  } else {
    console.log('Form is invalid. Cannot add react.');
    this.errorMessage = 'Form is invalid. Cannot add react.';
  }
}
convertToTypeReact(typeReactString: string): TypeReact {
  switch (typeReactString) {
    case 'LIKE':
      return TypeReact.LIKE;
    case 'LOVE':
      return TypeReact.LOVE;
    case 'ANGRY':
      return TypeReact.ANGRY;
    case 'SAD':
      return TypeReact.SAD;
    default:
      throw new Error('Invalid TypeReact value');
  }
}

}

