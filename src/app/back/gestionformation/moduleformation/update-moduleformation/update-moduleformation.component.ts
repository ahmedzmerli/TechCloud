import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleFormation } from 'src/app/back/models/moduleformation';
import { ModuleformationService } from 'src/app/back/service/moduleformation.service';



@Component({
  selector: 'app-update-moduleformation',
  templateUrl: './update-moduleformation.component.html',
  styleUrls: ['./update-moduleformation.component.css']
})
export class UpdateModuleformationComponent implements OnInit {
  moduleFormationForm: FormGroup;
  errorMessage: string = '';
  Id: number = 0;
  updatedmoduleFormation: ModuleFormation | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moduleformationService: ModuleformationService
  ) {
    this.moduleFormationForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*')]],
     // formation: [[]],
     // certificats: [[]],
     
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.Id = +id;
      if (!isNaN(this.Id) && this.Id > 0) {
        this.fetchModuleFormationDetails(this.Id);
      } else {
        console.error('Invalid Formation ID:', id);
        // Gérer l'ID de formation invalide ici, comme rediriger l'utilisateur ou afficher un message d'erreur
        this.errorMessage = 'Invalid Formation ID';
      }
    });
  }

  fetchModuleFormationDetails(moduleformationId: number): void {
    this.moduleformationService.getModuleFormationById(moduleformationId).subscribe(
      (moduleformation: ModuleFormation) => {
        this.updatedmoduleFormation = moduleformation;
        // Formater les dates avant de les afficher dans le formulaire
        this.populateFormWithFormationDetails(moduleformation);
      },
      (error) => {
        console.error('Error retrieving Formation ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  populateFormWithFormationDetails(moduleformation: ModuleFormation): void {
    this.moduleFormationForm.patchValue({
      id: moduleformation.id,
      titre: moduleformation.titre,
      description: moduleformation.description,
    //  formation: moduleformation.formation,
      //certificats: moduleformation.certificats
  
    });
  }

  updateModuleFormation(): void {
    if (this.moduleFormationForm.valid) {
      const updatedmoduleFormationData = this.moduleFormationForm.value;
      this.moduleformationService.updateModuleFormation(this.Id, updatedmoduleFormationData).subscribe(
        () => {
          console.log('Formation updated successfully!');
          this.router.navigate(['/moduleformation/all-moduleformation']);
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
    const control = this.moduleFormationForm.get(field);
    return control && control.touched && control.invalid;
  }

}
