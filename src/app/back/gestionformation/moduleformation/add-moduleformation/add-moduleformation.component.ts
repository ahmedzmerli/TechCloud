import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/back/models/formation';
import { FormationService } from 'src/app/back/service/formation.service';
import { ModuleformationService } from 'src/app/back/service/moduleformation.service';




@Component({
  selector: 'app-add-moduleformation',
  templateUrl: './add-moduleformation.component.html',
  styleUrls: ['./add-moduleformation.component.css']
})
export class AddModuleformationComponent implements OnInit {
  moduleFormationForm: FormGroup;
  errorMessage: string = '';
  formErrors: any = {};
 // formation: any[] = [];
 formation: Formation[] = [];
 selectedFormations: Formation[] = []; // Propriété pour stocker les formations sélectionnées


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private moduleformationService: ModuleformationService,
    private formationService: FormationService
  ) {
    this.moduleFormationForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
      formations: [[]],
      certificats: [[]],
      
     
    });
  }

  /*ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.moduleformationService.getAllFormation().subscribe(
      (formation) => {
        this.formation = formation;
      },
      (error) => {
        console.error('Error loading modules: ', error);
      }
    );
  }*/
  ngOnInit(): void {
    this.loadFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
}

loadFormations(): void {
    this.formationService.getAll().subscribe(
        (formations) => {
            this.formation = formations;
        },
        (error) => {
            console.error('Error loading formations: ', error);
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
onFormationSelectionChange(event: any) {
  // Réinitialisez d'abord this.selectedFormations pour éviter les doublons
  this.selectedFormations = [];

  // Parcourez les options sélectionnées et ajoutez-les à this.selectedFormations
  for (let i = 0; i < event.target.selectedOptions.length; i++) {
    this.selectedFormations.push(event.target.selectedOptions[i].value);
  }
}


  isFieldInvalid(field: string) {
    const control = this.moduleFormationForm.get(field);
    return control && control.touched && control.invalid;
  }


 /* onSubmit() {
    if (this.moduleFormationForm.valid) {
      const newModuleFormation = this.moduleFormationForm.value;
      console.log(newModuleFormation.modules);
      this.moduleformationService.addModuleFormation(newModuleFormation).subscribe(
        () => {
          console.log('ModuleFormation added successfully!');
          this.router.navigate(['/moduleformation/all-moduleformation']);
        },
        (error) => {
          console.error('Error adding moduleformation ', error);
          this.errorMessage = 'Error adding moduleformation';
        }
      );
    } else {
      console.log('Form is invalid. Cannot add moduleformation.');
      this.errorMessage = 'Form is invalid. Cannot add moduleformation.';
    }
  }*/
 onSubmit() {
    if (this.moduleFormationForm.valid) {
        const newModuleFormation = this.moduleFormationForm.value;
        // Utilisez this.selectedFormations pour obtenir les formations sélectionnées
        newModuleFormation.formations = this.selectedFormations;
        this.moduleformationService.addModuleFormation(newModuleFormation).subscribe(
            () => {
                console.log('ModuleFormation added successfully!');
                this.router.navigate(['/moduleformation/all-moduleformation']);
            },
            (error) => {
                console.error('Error adding moduleformation ', error);
                this.errorMessage = 'Error adding moduleformation';
            }
        );
    } else {
        console.log('Form is invalid. Cannot add moduleformation.');
        this.errorMessage = 'Form is invalid. Cannot add moduleformation.';
    }
}
/*onSubmit() {
  if (this.moduleFormationForm.valid && this.selectedFormations.length > 0) {
    const newModuleFormation = this.moduleFormationForm.value;
    // Assurez-vous que la formation a été sélectionnée
    const selectedFormationId = this.selectedFormations[0].id;
    if (selectedFormationId) {
      newModuleFormation.formationId = selectedFormationId;
      this.moduleformationService.addModuleFormation(newModuleFormation).subscribe(
        () => {
          console.log('ModuleFormation added successfully!');
          this.router.navigate(['/moduleformation/all-moduleformation']);
        },
        (error) => {
          console.error('Error adding moduleformation ', error);
          this.errorMessage = 'Error adding moduleformation';
        }
      );
    } else {
      console.error('No formation selected.');
      this.errorMessage = 'No formation selected.';
    }
  } else {
    console.log('Form is invalid or no formation selected. Cannot add moduleformation.');
    this.errorMessage = 'Form is invalid or no formation selected. Cannot add moduleformation.';
  }
}*/




}

