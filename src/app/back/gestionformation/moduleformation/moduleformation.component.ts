import { Component, OnInit } from '@angular/core';
import { ModuleformationService } from '../../service/moduleformation.service';


@Component({
  selector: 'app-moduleformation',
  templateUrl: './moduleformation.component.html',
  styleUrls: ['./moduleformation.component.css']
})
export class ModuleformationComponent  implements OnInit {
  moduleformations: any[] = []; // Initialisez formations avec un tableau vide par défaut
  constructor(private moduleformationService: ModuleformationService) { }

  ngOnInit(): void {
    this.loadModuleFormations(); // Appelez la méthode pour charger les formations au moment de l'initialisation du composant
  }

  loadModuleFormations(): void {
    // Utilisez le service pour récupérer les données des formations et affectez-les à la propriété formations
    this.moduleformationService.getAll().subscribe(moduleformations => this.moduleformations = moduleformations);
  }
}
