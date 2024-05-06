import { Component, OnInit } from '@angular/core';
import { CertificatService } from '../../service/certificat.service';


@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent  implements OnInit {
  certificats: any[] = []; // Initialisez formations avec un tableau vide par défaut
  constructor(private certificatService: CertificatService) { }

  ngOnInit(): void {
    this.loadCertificats(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
  }

  loadCertificats(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    this.certificatService.getAll().subscribe(certificats => this.certificats = certificats);
  }

}
