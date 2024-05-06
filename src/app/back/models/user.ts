import { Certificat } from "./certificat";
import { Formation } from "./formation";
import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role; // Assurez-vous d'importer ou de définir correctement le type Role

    formations: Formation[]; // Assurez-vous d'importer ou de définir correctement le type Formation
    certificats: Certificat[]; // Assurez-vous d'importer ou de définir correctement le type Certificat

    constructor(id: number, firstName: string, lastName: string, email: string, password: string, role: Role, formations: Formation[], certificats: Certificat[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.formations = formations;
        this.certificats = certificats;
    }
}
