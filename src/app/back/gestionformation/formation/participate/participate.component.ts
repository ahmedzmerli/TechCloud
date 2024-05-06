import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/back/service/formation.service';




@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {
  formations: any[] = []; // Initialisez formations avec un tableau vide par défaut
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.loadFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
  }

  loadFormations(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    this.formationService.getAll().subscribe(formations => this.formations = formations);
  }

}
