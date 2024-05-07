import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/back/service/post.service';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  post: Post | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.postService.getPostById(id.toString()).subscribe(
      (post: Post) => {
        this.post = post;
      },
      (error: HttpErrorResponse) => {
        console.error('Error retrieving post ', error);
        // Gérer l'erreur de récupération de la formation ici
      }
    );
  }

  confirmDelete(): void {
    if (this.post) {
      this.postService.deletePost(this.post.id.toString()).subscribe(
        () => {
          console.log('post deleted successfully!');
          this.router.navigate(['/post/all-post']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('post deleted successfully!');
            this.router.navigate(['/post/all-post']);
          } else {
            console.error('Error deleting post ', error);
          }
        }
      );
    }
  }
  

  cancelDelete(): void {
    this.router.navigate(['/post/all-post']);
  }
}
