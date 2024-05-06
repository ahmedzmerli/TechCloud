import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomValidators } from './custom-validators';
import { FormationService } from 'src/app/back/service/formation.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formationForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  modules: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formationService: FormationService
    
  ) {
    this.formationForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      dateDebut:['', [Validators.required, CustomValidators.pastOrPresent]],
      dateFin: ['', [Validators.required, CustomValidators.futureOrPresent]],
      modules: [[]],
      participants: [[]],
      formateurs: [[]]
    });
  }

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.formationService.getAllModules().subscribe(
      (modules) => {
        this.modules = modules;
      },
      (error) => {
        console.error('Error loading modules: ', error);
      }
    );
  }

  isFieldInvalid(field: string) {
    const control = this.formationForm.get(field);
    return control && control.touched && control.invalid;
  }
  onSubmit() {
    if (this.formationForm.valid) {
      const newFormation = this.formationForm.value;
      console.log(newFormation);
      this.formationService.addFormation(newFormation).subscribe(
        () => {
          console.log('Formation added successfully!');
          this.router.navigate(['/formation/all']);
        },
        (error) => {
          console.error('Error adding Formation ', error);
          this.errorMessage = 'Error adding Formation';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add Formation.');
      this.errorMessage = 'Form is invalid. Cannot add Formation.';
    }
  }

 /* onSubmit() {
    if (this.formationForm.valid) {
      const newFormation = this.formationForm.value;
      this.formationService.addFormation(newFormation).subscribe(
        () => {
          console.log('Formation added successfully!');
          this.router.navigate(['/formation/all']);
        },
        (error) => {
          console.error('Error adding Formation ', error);
          if (error.error && error.error.errors) {
            // Afficher les erreurs de validation renvoyées par le backend
            this.errorMessage = error.error.message;
            this.formErrors = error.error.errors;
          } else {
            this.errorMessage = 'Error adding Formation';
          }
        }
      );
    } else {
      console.log('Form is invalid. Cannot add Formation.');
      this.errorMessage = 'Form is invalid. Cannot add Formation.';
    }
  }*/
}
