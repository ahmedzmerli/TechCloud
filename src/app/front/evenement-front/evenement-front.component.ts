import { Component } from '@angular/core';
import { EvenementService } from 'src/app/back/service/evenement.service';

@Component({
  selector: 'app-evenement-front',
  templateUrl: './evenement-front.component.html',
  styleUrls: ['./evenement-front.component.css']
})
export class EvenementFrontComponent {
  evenementss: any[] = [];
  constructor(private evenementService: EvenementService) {}

  ngOnInit() {
    this.getAllevenements();
  }

  getAllevenements() {
    this.evenementService.getAllEvenement().subscribe((res) => {
      console.log(res);
      this.evenementss = res;
    });
  }

}
