
import { User } from './user'; 
import { ModuleFormation } from './moduleformation'; 
export class Certificat {
    id: number;
    user: User; 
    moduleFormation: ModuleFormation;
    dateDelivrance: Date;
    description: string;
    statut: string;
  
    constructor(id: number, user: User, moduleFormation:  ModuleFormation, dateDelivrance: Date, description: string, statut: string) {
      this.id = id;
      this.user = user;
      this.moduleFormation = moduleFormation;
      this.dateDelivrance = dateDelivrance;
      this.description = description;
      this.statut = statut;
    }
  }