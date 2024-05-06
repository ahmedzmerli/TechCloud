import { Certificat } from './certificat';
import { Formation } from './formation';
export class ModuleFormation {
    id: number;
    titre: string;
    description: string;
    formation: Formation; 
    //formation: any;
    certificats: Certificat[]; 
  
    constructor(id: number, titre: string, description: string, formation: any, certificats: Certificat[]) {
      this.id = id;
      this.titre = titre;
      this.description = description;
      this.formation = formation;
      this.certificats = certificats;
    }
  }
  