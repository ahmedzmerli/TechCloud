import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../../service/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent {
  /*
  updateReclamationForm!:FormGroup;
  id:number = this.activatedRoute.snapshot.params["id"]
constructor(private activatedRoute:ActivatedRoute,
  private service:ReclamationService,
  private fb:FormBuilder,
  private router:Router){ }

ngOnInit(){

this.updateReclamationForm=this.fb.group({
  Description:["", [Validators.required]],
  Date:["",[Validators.required]],
  Status:["",[Validators.required]],
})
this.getReclamationById();
}
getReclamationById(){
this.service.getReclamationById(this.id).subscribe((res)=>{
  console.log(res);
  this.updateReclamationForm.patchValue(res);
})
} 
updateReclamation(){
  this.service.updateReclamation(this.id ,this.updateReclamationForm.value).subscribe((res)=>{
    console.log(res);
    if(res.id!=null){
      this.router.navigateByUrl("");
    }
  })
}
*/
}
