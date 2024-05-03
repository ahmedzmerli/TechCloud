import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent {
  commentaires: any[] = []; // Array to store retrieved comments
  evenementService: any;
  @Input() evenement: any;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the evenement ID from the route parameters
    const evenementId = this.route.snapshot.paramMap.get('id');

    // Call your service to get comments for this evenement (if needed)
    // You can use a service method similar to getCommentaires in evenement.component.ts
    if (evenementId) {
      this.evenementService.getCommentaires(parseInt(evenementId))
        .subscribe((commentaires: any[]) => {
          this.commentaires = commentaires;
        });
    }
  }
}
