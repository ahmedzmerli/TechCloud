import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { environement } from '../../environement/environement';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { PostService } from 'src/app/back/service/post.service';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
  
})
export class AllPostComponent implements OnInit {
  Posts: any[] = []; 
  postId= this.activatedRoute.snapshot.params['id'];
  postData: any;
  firebaseStorageUrl = environement.firebaseConfig.storageBucket;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private matSnackBar: MatSnackBar, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
}

  ngOnInit(): void {
    this.loadPosts();   }

  loadPosts(): void {

    //this.postService.getAll().subscribe(Posts => this.Posts = Posts);
    this.postService.getAll().subscribe(Posts => {
  this.Posts = Posts;
  this.Posts.forEach(post => {
    // Assigner l'URL de l'image récupérée à la propriété imageUrl de chaque post
    post.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-755bd.appspot.com/o/yt%2FMSI%201.jpg?alt=media&token=ffb3c6e1-a135-4377-8a62-cfecd132b47e';
  });
});
  }
  
 /* loadPosts(): void {
    this.postService.getAll().subscribe(posts => {
        this.Posts = posts;
    });
}
*/
 /*
loadPosts(): void {
  this.postService.getAll().subscribe(posts => {
      this.Posts = posts.map(post => {
          const imageUrl = `${this.firebaseStorageUrl}${encodeURIComponent('yt/' + post.id + '.jpg')}?alt=media`;
          return { ...post, imageUrl };
      });
  });
}*/

/*likePost() {
  this.postService.likePost(this.postId).subscribe(
    () => {
      this.matSnackBar.open("Post Liked Successfully", "ok");
      this.getPostById();
    },
    (error) => {
      this.matSnackBar.open("Something went wrong!!!!", "Ok");
    }
  );
}

getPostById() {
  this.postService.getPostById(this.postId).subscribe(
    res => {
      this.postData = res;
      console.log(res);
    },
    error => {
      this.matSnackBar.open("Something Went Wrong!!!!", "ok");
    }
  );
}*/
/*likePost(postId: number) {
  this.postService.likePost(postId).subscribe(
    () => {
      this.matSnackBar.open("Post Liked Successfully", "ok");
      this.getPostById(postId);
    },
    (error) => {
      this.matSnackBar.open("Something went wrong!!!!", "Ok");
    }
  );
}*/
likePost(postId: number) {
  this.postService.likePost(postId).subscribe(
    () => {
      this.matSnackBar.open("Post Liked Successfully", "ok");
      this.getPostById(postId); // Mettre à jour uniquement le post spécifique
    },
    (error) => {
      this.matSnackBar.open("Something went wrong!!!!", "Ok");
    }
  );
}


getPostById(postId: number) {
  this.postService.getPostById(postId).subscribe(
    res => {
      this.postData = res;
      console.log(res);
    },
    error => {
      this.matSnackBar.open("Something Went Wrong!!!!", "ok");
    }
  );
}

}