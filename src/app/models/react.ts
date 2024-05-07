import { Commentaire } from "./commentaire";
import { Post } from "./post";
import { TypeReact } from "./typeReact";
import { User } from "./user";

export class React {
    id!: number;
    date!: Date;
    user!: User; // Utilisateur sera toujours défini
    commentaire!: Commentaire; // Post sera toujours défini
    post!: Post;
    typeReact!: TypeReact;
  }