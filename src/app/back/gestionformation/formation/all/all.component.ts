import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/back/service/formation.service';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  formations: any[] = []; // Initialisez formations avec un tableau vide par défaut

  titre: string = ""; // Déclarer la propriété titre
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.loadFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
  }

  loadFormations(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    this.formationService.getAll().subscribe(formations => this.formations = formations);
  }
  searchFormations(titre: string): void {
    this.formationService.searchFormationsByTitle(titre).subscribe(formations => this.formations = formations);
  }
  
}
