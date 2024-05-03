import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EvenementService } from '../service/evenement.service';
import { Observable } from 'rxjs'; 
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {
  evenementss: any=[];
  
constructor(private evenementService:EvenementService){

}
ngOnInit(){
this.getALLEvenements();
}
getALLEvenements(){
  this.evenementService.getAllEvenement().subscribe((res)=>{
    console.log(res);
    this.evenementss=res;
  })
}
deleteEvenement(id:number){
  this.evenementService.deleteEvenement(id).subscribe((res)=>{
    console.log(res);
    this.getALLEvenements();
  })

}
detailEvenement(id:number){
  this.evenementService.getCommentaires(id).subscribe((res)=>{
    console.log(res);
  })
}
}
