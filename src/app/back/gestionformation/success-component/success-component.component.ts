import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-component',
  templateUrl: './success-component.component.html',
  styleUrls: ['./success-component.component.css']
})
export class SuccessComponentComponent implements OnInit {
  pdfUrl: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'URL du PDF à partir des paramètres de l'URL
    this.route.queryParams.subscribe(params => {
      this.pdfUrl = params['pdfUrl'];
    });
  }
}
