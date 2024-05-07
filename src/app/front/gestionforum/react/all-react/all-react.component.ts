import { Component, OnInit } from '@angular/core';
import { ReactService } from 'src/app/back/service/react.service';


@Component({
  selector: 'app-all-react',
  templateUrl: './all-react.component.html',
  styleUrls: ['./all-react.component.css']
})
export class AllReactComponent implements OnInit {
  Reacts: any[] = []; 
  constructor(private reactService: ReactService) { }

  ngOnInit(): void {
    this.loadReacts();   }

  loadReacts(): void {

    this.reactService.getAll().subscribe(Reacts => this.Reacts = Reacts);
  }
}

