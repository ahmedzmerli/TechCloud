import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { formatDate } from '@angular/common';
import { CustomValidators } from './custom-validators';
import { Formation } from 'src/app/back/models/formation';
import { FormationService } from 'src/app/back/service/formation.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formationForm: FormGroup;
  errorMessage: string = '';
  Id: number = 0;
  updatedFormation: Formation | undefined; // Votre entité Formation

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formationService: FormationService
  ) {
    this.formationForm = this.formBuilder.group({
      id: [''],
      titre: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      dateDebut:['', [Validators.required, CustomValidators.pastOrPresent]],
      dateFin: ['', [Validators.required, CustomValidators.futureOrPresent]],
      modules: [[]],
      participants: [[]],
      formateurs: [[]]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.Id = +id;
      if (!isNaN(this.Id) && this.Id > 0) {
        this.fetchFormationDetails(this.Id);
      } else {
        console.error('Invalid Formation ID:', id);
        // Gérer l'ID de formation invalide ici, comme rediriger l'utilisateur ou afficher un message d'erreur
        this.errorMessage = 'Invalid Formation ID';
      }
    });
  }

  fetchFormationDetails(formationId: number): void {
    this.formationService.getFormationById(formationId).subscribe(
      (formation: Formation) => {
        this.updatedFormation = formation;
        // Formater les dates avant de les afficher dans le formulaire
        this.populateFormWithFormationDetails(formation);
      },
      (error) => {
        console.error('Error retrieving Formation ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  populateFormWithFormationDetails(formation: Formation): void {
    this.formationForm.patchValue({
      id: formation.id,
      titre: formation.titre,
      description: formation.description,
      dateDebut: formatDate(formation.dateDebut, 'yyyy-MM-dd', 'en-US'),
      dateFin: formatDate(formation.dateFin, 'yyyy-MM-dd', 'en-US'),
      modules: formation.modules,
      participants: formation.participants,
      formateurs: formation.formateurs
    });
  }

  updateFormation(): void {
    if (this.formationForm.valid) {
      const updatedFormationData = this.formationForm.value;
      this.formationService.updateFormation(this.Id, updatedFormationData).subscribe(
        () => {
          console.log('Formation updated successfully!');
          this.router.navigate(['/formation/all']);
        },
        (error) => {
          console.error('Error updating Formation ', error);
          // Gérer l'erreur de mise à jour de la formation ici
          this.errorMessage = 'Error updating Formation';
        }
      );
    } else {
      console.log('Form is invalid. Cannot update Formation.');
      this.errorMessage = 'Form is invalid. Cannot update Formation.';
    }
  }

  isFieldInvalid(field: string) {
    const control = this.formationForm.get(field);
    return control && control.touched && control.invalid;
  }
}
