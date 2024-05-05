import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent {
  updateEvenementForm!:FormGroup;
  id:number = this.activatedRoute.snapshot.params["id"]
constructor(private activatedRoute:ActivatedRoute,
  private service:EvenementService,
  private fb:FormBuilder,
  private router:Router){ }

ngOnInit(){

this.updateEvenementForm=this.fb.group({
  nom:["", [Validators.required]],
  nbrPlace:["",[Validators.required]],
  date_deb:["",[Validators.required]],
  date_fin:["",[Validators.required]],
  lieu:["",[Validators.required]],
})
this.getEvenementById();
}
getEvenementById(){
this.service.getEvenementById(this.id).subscribe((res)=>{
  console.log(res);
  this.updateEvenementForm.patchValue(res);
})
} 
updateEvenement(){
  this.service.updateEvenement(this.id ,this.updateEvenementForm.value).subscribe((res)=>{
    console.log(res);
    if(res.id!=null){
      this.router.navigateByUrl("/back/evenements");
    }
  })
}

}
