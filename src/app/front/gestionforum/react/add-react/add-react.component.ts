import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';
import { TypeReact } from 'src/app/models/typeReact';
import { ReactService } from 'src/app/back/service/react.service';

@Component({
  selector: 'app-add-react',
  templateUrl: './add-react.component.html',
  styleUrls: ['./add-react.component.css']
})
export class AddReactComponent implements OnInit {
  reactForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  //post: any[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private reactService: ReactService
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
       this.router.navigate(['/post/all-post']);

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
