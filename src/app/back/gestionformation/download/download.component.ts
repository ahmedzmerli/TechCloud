import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const filename = params['filename'];
      this.downloadFile(filename);
    });
  }

  downloadFile(filename: string) {
    const url = `http://localhost:8090/pdfs/${filename}`; // Mettez l'URL de votre backend ici
    window.open(url, '_blank');
  }
}