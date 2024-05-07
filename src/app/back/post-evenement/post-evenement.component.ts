import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenementService } from '../service/evenement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-evenement',
  templateUrl: './post-evenement.component.html',
  styleUrls: ['./post-evenement.component.css']
})
export class PostEvenementComponent {
  postEvenementForm!: FormGroup;
  constructor(private evenementService:EvenementService,private fb:FormBuilder
   , private router:Router
  ){}
  ngOnInit(){
    this.postEvenementForm=this.fb.group({
      nom:["", [Validators.required]],
      nbrPlace:["",[Validators.required]],
      date_deb:["",[Validators.required]],
      date_fin:["",[Validators.required]],
      lieu:["",[Validators.required]],

    })
  }
 

}
