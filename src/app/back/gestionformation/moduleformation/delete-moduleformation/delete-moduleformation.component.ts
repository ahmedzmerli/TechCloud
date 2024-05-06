import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleFormation } from 'src/app/back/models/moduleformation';
import { ModuleformationService } from 'src/app/back/service/moduleformation.service';


@Component({
  selector: 'app-delete-moduleformation',
  templateUrl: './delete-moduleformation.component.html',
  styleUrls: ['./delete-moduleformation.component.css']
})
export class DeleteModuleformationComponent implements OnInit {
  moduleFormation: ModuleFormation | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moduleformationservice: ModuleformationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.moduleformationservice.getModuleFormationById(id.toString()).subscribe(
      (moduleFormation: ModuleFormation) => {
        this.moduleFormation = moduleFormation;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving moduleFormation ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  confirmDelete(): void {
    if (this.moduleFormation) {
      this.moduleformationservice.deleteModuleFormation(this.moduleFormation.id.toString()).subscribe(
        () => {
          console.log('moduleformation deleted successfully!');
          this.router.navigate(['/moduleformation/all-moduleformation']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('moduleformation deleted successfully!');
            this.router.navigate(['/moduleformation/all-moduleformation']);
          } else {
            console.error('Error deleting moduleformation ', error);
          }
        }
      );
    }
  }
  

  cancelDelete(): void {
    this.router.navigate(['/moduleformation/all-moduleformation']);
  }
}
