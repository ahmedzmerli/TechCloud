
import { Commentaire } from "./commentaire";
import { React } from "./react";
import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role; // Assurez-vous d'importer ou de définir correctement le type Role

    commentaires: Commentaire[]; // Assurez-vous d'importer ou de définir correctement le type Formation
    reacts:  React[]; // Assurez-vous d'importer ou de définir correctement le type Certificat

    constructor(id: number, firstName: string, lastName: string, email: string, password: string, role: Role, commentaires: Commentaire[],  reacts:  React[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.commentaires = commentaires;
        this. reacts =  reacts;
    }
}
