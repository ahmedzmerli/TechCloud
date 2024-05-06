import { ModuleFormation } from './moduleformation';
import { User } from './user';
export class Formation {
    id: number;
    titre: string;
    description: string;
    dateDebut: Date;
    dateFin: Date;
    modules: ModuleFormation[];
    participants: User[]; 
    formateurs: User[]; 
  
    constructor(id: number, titre: string, description: string, dateDebut: Date, dateFin: Date, modules: ModuleFormation[], participants: any[], formateurs: any[]) {
      this.id = id;
      this.titre = titre;
      this.description = description;
      this.dateDebut = dateDebut;
      this.dateFin = dateFin;
      this.modules = modules;
      this.participants = participants;
      this.formateurs = formateurs;
    }
  }
  