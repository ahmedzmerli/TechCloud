import { Component, OnInit } from '@angular/core';
import { CertificatService } from 'src/app/back/service/certificat.service';



@Component({
  selector: 'app-all-certificat',
  templateUrl: './all-certificat.component.html',
  styleUrls: ['./all-certificat.component.css']
})
export class AllCertificatComponent implements OnInit {
  certificats: any[] = []; 
  constructor(private certificatService: CertificatService) { }

  ngOnInit(): void {
    this.loadCertificats();   }

  loadCertificats(): void {

    //this.certificatService.getAllWithModuleFormation().subscribe(certificats => this.certificats = certificats);
    this.certificatService.getAllWithModuleFormationuser().subscribe(certificats => this.certificats = certificats);
  }
}
