import { EvenementService } from 'src/app/back/service/evenement.service';
import { Component, ViewChild,Renderer2, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Commentaire } from 'src/app/back/Models/commentaire';




@Component({
  selector: 'app-evenement-front',
  templateUrl: './evenement-front.component.html',
  styleUrls: ['./evenement-front.component.css']
})
export class EvenementFrontComponent {
  contenuCommentaire: string = '';
  submitted = false;
  id!: number;
  
  idEvenement!:number;
  evenementss: any[] = [];
  comments: any[] = []; 
  constructor(private evenementService: EvenementService, public dialog: MatDialog, private elementRef: ElementRef,private renderer: Renderer2) {}
  @ViewChild('commentModal') commentModal!: ElementRef;

 
  ngOnInit() {
    this.getAllevenements();
  }

  getAllevenements() {
    this.evenementService.getAllEvenement().subscribe((res) => {
      console.log(res);
      this.evenementss = res;
    });
  }

  getComments(id: number) {
    this.id=id;
    this.evenementService.getCommentaires(id).subscribe((res) => {
      this.comments = res;
    });
  }

  openDialogComment(){
    this.submitted=true;
  }
ajouterCommentaire( contenuCommentaire: string){
  this.evenementService.ajouterCommentaire(this.id, contenuCommentaire)
    .subscribe(
      () => {
        console.log('Commentaire ajouté avec succès.');
       
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    );
    window.location.reload();
}

sendMessage():void {
  this.evenementService.SendSMS().subscribe(
    response => {
     
      console.log('Message sent', response);
    },
    error=>{
      console.error('Error sending',error);
    }
  );
}


 

 
  
  
  
 
}



