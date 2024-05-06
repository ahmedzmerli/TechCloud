import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { CustomValidators } from './custom-validators';
import { ModuleFormation } from 'src/app/back/models/moduleformation';
import { User } from 'src/app/back/models/user';
import { CertificatService } from 'src/app/back/service/certificat.service';
import { ModuleformationService } from 'src/app/back/service/moduleformation.service';
import { UserService } from 'src/app/back/service/user.service';


@Component({
  selector: 'app-add-certificat',
  templateUrl: './add-certificat.component.html',
  styleUrls: ['./add-certificat.component.css']
})
export class AddCertificatComponent implements OnInit {
  certificatForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
  
  moduleformation: ModuleFormation[] = [];
  selectedModuleFormations: ModuleFormation[] = [];
  user: User[] = [];
  selectedUsers: User[] = [];
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private certificatService: CertificatService,
    private http: HttpClient,
   private  mformationService: ModuleformationService,
   private userService: UserService,
  ) {
    this.certificatForm = this.formBuilder.group({
      statut: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      dateDelivrance:['', [Validators.required, CustomValidators.pastOrPresent]],
      moduleFormation: [[]], // Assuming this is an array
      user: [[]] // Assuming this is an array
    });
  }

  ngOnInit():  void {
    this.loadMFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
   this.loadUsers();
}

loadMFormations(): void {
    this.mformationService.getAll().subscribe(
        (moduleformations) => {
            this.moduleformation = moduleformations;
        },
        (error) => {
            console.error('Error loading moduleformation: ', error);
        }
    );
}

loadUsers(): void {
    this.userService.getAll().subscribe(
        (users) => {
            this.user = users;
        },
        (error) => {
            console.error('Error loading user: ', error);
        }
    );
}
// Ajoutez cette méthode pour capturer la sélection de formation
/*onFormationSelectionChange(event: any) {
  const selectedFormations = event.target.value;
  this.moduleFormationForm.patchValue({
      formations: selectedFormations
  });
}*/
/*
onFormationSelectionChange(event: any) {
  console.log('Event:', event);
  console.log('Target value:', event.target.value);
  console.log('Selected formations:', this.selectedFormations);

  // Réinitialisez d'abord this.selectedFormations pour éviter les doublons
  this.selectedFormations = [];

  // Parcourez les options sélectionnées et ajoutez-les à this.selectedFormations
  for (let i = 0; i < event.target.selectedOptions.length; i++) {
    this.selectedFormations.push(event.target.selectedOptions[i].value);
  }

  console.log('Updated selected formations:', this.selectedFormations);
}*/
onModuleFormationSelectionChange(event: any) {
  // Réinitialisez d'abord this.selectedFormations pour éviter les doublons
  this.selectedModuleFormations = [];

  // Parcourez les options sélectionnées et ajoutez-les à this.selectedFormations
  for (let i = 0; i < event.target.selectedOptions.length; i++) {
    this.selectedModuleFormations.push(event.target.selectedOptions[i].value);
  }
}
onUserSelectionChange(event: any) {
  // Réinitialisez d'abord this.selectedFormations pour éviter les doublons
  this.selectedUsers = [];

  // Parcourez les options sélectionnées et ajoutez-les à this.selectedFormations
  for (let i = 0; i < event.target.selectedOptions.length; i++) {
    this.selectedUsers.push(event.target.selectedOptions[i].value);
  }
}

  isFieldInvalid(field: string) {
    const control = this.certificatForm.get(field);
    return control && control.touched && control.invalid;
  }

  /*onSubmit() {
    console.log('Form values:', this.certificatForm.value);
    console.log('Form validity:', this.certificatForm.valid);
    
    // Log the newCertificat variable
    const newCertificat = this.certificatForm.value;
    console.log('New Certificat:', newCertificat);
  
    // Proceed with the HTTP request
    if (this.certificatForm.valid) {
      this.certificatService.addCertificat(newCertificat).subscribe(
        () => {
          console.log('Certificat added successfully!');
          this.router.navigate(['/certificat/all-certificat']);
        },
        (error) => {
          console.error('Error adding Certificat', error);
          this.errorMessage = 'Error adding Certificat';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add Certificat.');
      this.errorMessage = 'Form is invalid. Cannot add Certificat.';
    }
  }*/
   // Méthode pour ajouter un certificat
  /* addCertificat() {
    if (this.certificatForm.valid) {
      const certificatData = this.certificatForm.value;
      this.certificatService.addCertificat(certificatData).subscribe(
        (response: any) => {
          console.log('Certificat ajouté avec succès', response);
          if (response.pdfUrl) {
            // Si l'URL du PDF est disponible dans la réponse, déclenchez le téléchargement
            this.downloadPDF(response.pdfUrl);
          }
          // Redirigez vers une autre page ou affichez un message de succès
          this.router.navigate(['/success-component'], { queryParams: { pdfUrl: response.pdfUrl } });

        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout du certificat', error);
          // Affichez un message d'erreur à l'utilisateur
        }
      );
    }
  }*/
  //hedhi methode s7iha bech nrjha le28/4/2024
  /*
  addCertificat() {
    if (this.certificatForm.valid) {
      const certificatData = this.certificatForm.value;
      // Ajoutez les modules de formation sélectionnés aux données du certificat
      certificatData.moduleFormation = this.selectedModuleFormations.map(module => module.id);
      this.certificatService.addCertificat(certificatData).subscribe(
        (response: any) => {
          console.log('Certificat ajouté avec succès', response);
          if (response.pdfUrl) {
            this.downloadPDF(response.pdfUrl);
          }
          this.router.navigate(['/success-component'], { queryParams: { pdfUrl: response.pdfUrl } });

        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout du certificat', error);
        }
      );
    }
}*/
addCertificat() {
  if (this.certificatForm.valid) {
    const certificatData = this.certificatForm.value;
    const moduleId = 1; // Remplacez 1 par l'ID du module requis
    const userId = 1;
    this.certificatService.addCertificat(certificatData, moduleId, userId).subscribe(
      (response: any) => {
        console.log('Certificat ajouté avec succès', response);
        if (response.pdfUrl) {
          this.downloadPDF(response.pdfUrl);
        }
        this.router.navigate(['/success-component'], { queryParams: { pdfUrl: response.pdfUrl } });

      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du certificat', error);
      }
    );
  }
}

/*
  // Méthode pour télécharger le PDF
  downloadPDF(pdfUrl: string) {
    // Créez un élément <a> pour le téléchargement
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'certificat.pdf';

    // Déclenchez le téléchargement en cliquant sur l'élément <a>
    link.click();
  }*/
  // Modifiez votre méthode downloadPDF comme ceci
downloadPDF(pdfUrl: string) {
  this.http.get(pdfUrl, { responseType: 'blob' }).subscribe(response => {
    // Crée un objet Blob avec le contenu du PDF et l'URL du type MIME
    const blob = new Blob([response], { type: 'application/pdf' });

    // Crée un objet URL à partir du Blob
    const url = window.URL.createObjectURL(blob);

    // Crée un lien HTML temporaire et le clique pour déclencher le téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificat.pdf';
    link.click();

    // Libère l'objet URL créé précédemment pour éviter les fuites de mémoire
    window.URL.revokeObjectURL(url);
  });
  
}
}