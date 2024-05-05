import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../service/evenement.service';
import { Observable } from 'rxjs'; 
import { MatDialog } from '@angular/material/dialog';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

  comments: any[] = []; 
  fuse!: Fuse<any>;
  updateEvenementForm!: FormGroup;
  postEvenementForm!: FormGroup;
submitted = false;
evenementss: any=[];
searchTerm: string = ''; // Initialize searchTerm
nom!:String;
  lieu!:String;
  date_deb!:Date;
  nbrPlace!:number;



  
  id!:number ;

  
constructor(private formBuilder: FormBuilder,private evenementService:EvenementService , private activatedRoute:ActivatedRoute,private router:Router){

}

onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.updateEvenementForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted){
    this.updateEvenement();
  
  }

 
}
onSubmitAjout() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.postEvenementForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted){
    this.postEvenement();
  
  }

 
}



ngOnInit(){
this.getALLEvenements();
this.updateEvenementForm = this.formBuilder.group({
  nom:["", [Validators.required]],
  nbrPlace:["",[Validators.required]],
  date_deb:["",[Validators.required]],
  lieu:["",[Validators.required]],
  });

  this.postEvenementForm=this.formBuilder.group({
    nom:["", [Validators.required]],
    nbrPlace:["",[Validators.required]],
    date_deb:["",[Validators.required]],
    date_fin:["",[Validators.required]],
    lieu:["",[Validators.required]],

  })
  this.getEvenementById();

  this.evenementService.getAllEvenement().subscribe((res) => {
    this.evenementss = res;
    this.fuse = new Fuse(res, {keys: ['nom','evenementss.nom']});
  });
}


getEvenementById(){
  this.evenementService.getEvenementById(this.id).subscribe((res)=>{
    console.log(res);
    this.updateEvenementForm.patchValue(res);
  })
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
updateEvenement(){
  this.evenementService.updateEvenement(this.id ,this.updateEvenementForm.value).subscribe((res)=>{
    console.log(res);
    window.location.reload();
  })
}
openDialog(evenement:any): void {
  this.submitted = true;
  this.nom = evenement.nom;
  this.nbrPlace = evenement.nbrPlace;
  this.date_deb=evenement.date_deb
  this.lieu = evenement.lieu;
  this.id=evenement.id
}
postEvenement(){
  console.log(this.postEvenementForm.value);
  this.evenementService.postEvenement(this.postEvenementForm.value).subscribe((res:any)=>{
    console.log("success")

  },error=>{
    console.log(error)
  })
  window.location.reload();
}

searchEvent() {
  console.log('Search Event called');
  if (this.fuse) {
    // Check if the search term is empty
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, display all data objects or handle it as needed
      this.getALLEvenements();
    } else {
      // Use the Fuse search method to perform fuzzy search
      const results = this.fuse.search(this.searchTerm);
      this.evenementss = results.map((result) => result.item);
    }
  }
}


getComments(id: number) {
  this.evenementService.getCommentaires(id).subscribe((res) => {
    this.comments = res;
  });
}




}
