import { Post } from "./post";
import { React } from "./react";
import { User } from "./user";

export class Commentaire {
  id!: number;
  contenu!: string;
  datePublication!: Date;
  user!: User; // Utilisateur sera toujours défini
  post!: Post; // Post sera toujours défini
  reacts!: React[]
  }
  