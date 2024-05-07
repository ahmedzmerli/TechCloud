import { Commentaire } from "./commentaire";
import { React } from "./react";
import { User } from "./user";

export class Post {
    id!: number;
    titre!: string;
    contenu!: string;
    date!: Date;
    user!: User; // Utilisateur sera toujours défini
    commentaire!: Commentaire[] // Post sera toujours défini
    reacts!: React[]
    imageUrl?: string;
    likeCount?: number;
  }
  