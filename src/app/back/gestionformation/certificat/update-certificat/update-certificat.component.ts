import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomValidators } from './custom-validators';

import { formatDate } from '@angular/common';
import { Certificat } from 'src/app/back/models/certificat';
import { CertificatService } from 'src/app/back/service/certificat.service';


@Component({
  selector: 'app-update-certificat',
  templateUrl: './update-certificat.component.html',
  styleUrls: ['./update-certificat.component.css']
})
export class UpdateCertificatComponent implements OnInit {
  certificatForm: FormGroup;
  errorMessage: string = '';
  Id: number = 0;
  updatedCertificat: Certificat | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private certificatService: CertificatService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.certificatForm = this.formBuilder.group({
      statut: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      dateDelivrance:['', [Validators.required, CustomValidators.pastOrPresent]],
      moduleFormation: [[]], // Assuming this is an array
      user: [[]] // Assuming this is an array
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.Id = +id;
      if (!isNaN(this.Id) && this.Id > 0) {
        this.fetchCertificatDetails(this.Id);
      } else {
        console.error('Invalid Certificat ID:', id);
        // Gérer l'ID de formation invalide ici, comme rediriger l'utilisateur ou afficher un message d'erreur
        this.errorMessage = 'Invalid Certificat ID';
      }
    });
  }

  fetchCertificatDetails(certificatId: number): void {
    this.certificatService.getCertificatById(certificatId).subscribe(
      (certificat: Certificat) => {
        this.updatedCertificat = certificat;
        // Formater les dates avant de les afficher dans le formulaire
        this.populateFormWithCertificatDetails(certificat);
      },
      (error) => {
        console.error('Error retrieving Certificat ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }
  populateFormWithCertificatDetails(certificat: Certificat): void {
    this.certificatForm.patchValue({
      id: certificat.id,
      statut: certificat.statut,
      description: certificat.description,
      dateDelivrance: formatDate(certificat.dateDelivrance, 'yyyy-MM-dd', 'en-US'),
      moduleFormation: certificat.moduleFormation,
      user: certificat.user
      
    });
  }

  updateFormation(): void {
    if (this.certificatForm.valid) {
      const updatedCertificatData = this.certificatForm.value;
      this.certificatService.updateCertificat(this.Id, updatedCertificatData).subscribe(
        () => {
          console.log('Certificat updated successfully!');
          this.router.navigate(['/certificat/all-certificat']);
        },
        (error) => {
          console.error('Error updating Certificat ', error);
          // Gérer l'erreur de mise à jour de la formation ici
          this.errorMessage = 'Error updating Certificat';
        }
      );
    } else {
      console.log('Form is invalid. Cannot update Certificat.');
      this.errorMessage = 'Form is invalid. Cannot update Certificat.';
    }
  }
  isFieldInvalid(field: string) {
    const control = this.certificatForm.get(field);
    return control && control.touched && control.invalid;
  }

}
