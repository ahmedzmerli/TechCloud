import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactService } from 'src/app/back/service/react.service';
import { React } from 'src/app/models/react';


@Component({
  selector: 'app-delete-react',
  templateUrl: './delete-react.component.html',
  styleUrls: ['./delete-react.component.css']
})
export class DeleteReactComponent implements OnInit {
  react: React | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reactService: ReactService
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.reactService.getReactById(id.toString()).subscribe(
      (react: React) => {
        this.react = react;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving React ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  confirmDelete(): void {
    if (this.react) {
      this.reactService.deleteReact(this.react.id.toString()).subscribe(
        () => {
          console.log('react deleted successfully!');
          this.router.navigate(['/react/all-react']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('react deleted successfully!');
            this.router.navigate(['/react/all-react']);
          } else {
            console.error('Error deleting react ', error);
          }
        }
      );
    }
  }
  

  cancelDelete(): void {
    this.router.navigate(['/react/all-react']);
  }
}
