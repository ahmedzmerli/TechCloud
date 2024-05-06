import { Component, OnInit } from '@angular/core';
import { ModuleformationService } from 'src/app/back/service/moduleformation.service';



@Component({
  selector: 'app-all-moduleformation',
  templateUrl: './all-moduleformation.component.html',
  styleUrls: ['./all-moduleformation.component.css']
})
export class AllModuleformationComponent  implements OnInit {
  moduleformations: any[] = []; // Initialisez formations avec un tableau vide par défaut
  titre: string = ""; // Déclarer la propriété titre
  constructor(private moduleformationService: ModuleformationService) { }

  ngOnInit(): void {
    this.loadFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
  }

  loadFormations(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    //this.moduleformationService.getAll().subscribe(moduleformations => this.moduleformations = moduleformations);
   // this.moduleformationService.getAllWithFormation().subscribe(moduleformations => this.moduleformations = moduleformations);
   this.moduleformationService.getAllWithFormation().subscribe(moduleformations => this.moduleformations = moduleformations);
  }
 /* searchModuleFormations(titre: string): void {
    this.moduleformationService.searchModuleFormationsByTitle(titre).subscribe(moduleformations => this.moduleformations = moduleformations);
  }*/
  searchModuleFormations(titre: string): void {
    this.moduleformationService.searchModuleFormationsByTitle(titre).subscribe(
      moduleformations => {
        console.log('Résultats de la recherche :', moduleformations);
        this.moduleformations = moduleformations;
      },
      error => console.error('Erreur lors de la recherche :', error)
    );
  }
  
}
