import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from 'src/app/back/service/evenement.service';

@Component({
  selector: 'app-details-evenement-front',
  templateUrl: './details-evenement-front.component.html',
  styleUrls: ['./details-evenement-front.component.css']
})
export class DetailsEvenementFrontComponent {
  // commentaires: any[] = []; // Array to store retrieved comments
  // @Input() evenement: any;
  
  // constructor(private route: ActivatedRoute, private evenementService:EvenementService) {}

  // ngOnInit(): void {
  //   // Get the evenement ID from the route parameters
  //   const evenementId = this.route.snapshot.paramMap.get('id');

  //   // Call your service to get comments for this evenement (if needed)
  //   // You can use a service method similar to getCommentaires in evenement.component.ts
  //   if (evenementId) {
  //     this.evenementService.getCommentaires(parseInt(evenementId))
  //       .subscribe((commentaires: any[]) => {
  //         this.commentaires = commentaires;
  //       });
  //   }
  // }
}
