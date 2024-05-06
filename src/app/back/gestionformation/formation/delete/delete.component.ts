import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/back/models/formation';
import { FormationService } from 'src/app/back/service/formation.service';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  implements OnInit {
  formation: Formation | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationService: FormationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.formationService.getFormationById(id.toString()).subscribe(
      (formation: Formation) => {
        this.formation = formation;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving Formation ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

 
  
  confirmDelete(): void {
    if (this.formation) {
      this.formationService.deleteFormation(this.formation.id.toString()).subscribe(
        () => {
          console.log('formation deleted successfully!');
          this.router.navigate(['/formation/all']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('formation deleted successfully!');
            this.router.navigate(['/formation/all']);
          } else {
            console.error('Error deleting formation ', error);
          }
        }
      );
    }
  }

  cancelDelete(): void {
    this.router.navigate(['/formation/all']);
  }
}