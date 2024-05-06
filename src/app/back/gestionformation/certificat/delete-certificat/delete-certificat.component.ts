import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificat } from 'src/app/back/models/certificat';
import { CertificatService } from 'src/app/back/service/certificat.service';



@Component({
  selector: 'app-delete-certificat',
  templateUrl: './delete-certificat.component.html',
  styleUrls: ['./delete-certificat.component.css']
})
export class DeleteCertificatComponent implements OnInit {
  certificat: Certificat | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private certificatService: CertificatService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.certificatService.getCertificatById(id.toString()).subscribe(
      (certificat: Certificat) => {
        this.certificat = certificat;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving certificat ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  confirmDelete(): void {
    if (this.certificat) {
      this.certificatService.deleteCertificat(this.certificat.id.toString()).subscribe(
        () => {
          console.log('Certificat deleted successfully!');
          this.router.navigate(['/certificat/all-certificat']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('Certificat deleted successfully!');
            this.router.navigate(['/certificat/all-certificat']);
          } else {
            console.error('Error deleting certificat ', error);
          }
        }
      );
    }
  }
  

  cancelDelete(): void {
    this.router.navigate(['/certificat/all-certificat']);
  }
}
