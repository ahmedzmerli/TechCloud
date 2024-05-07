import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Post } from 'src/app/models/post';
import { React } from 'src/app/models/react';

//import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8090/post';
  private firebaseStorageUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-755bd.appspot.com/o/';
  constructor(private http: HttpClient, private fireStorage: AngularFireStorage) { }
  getApiUrl(): string {
    return this.apiUrl;
  }
/* getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieveAllPost`);
  }*/
  getFirebaseStorageUrl(): string {
    return this.firebaseStorageUrl;
  }

  uploadImage(imageFile: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', imageFile);

    return this.http.post<string>(`${this.apiUrl}/uploadImage`, formData);
  }

  addPostWithImageUrl(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addPost`, postData);
  }
  
  
  
  getImageUrl(imagePath: string): Observable<string> {
    // Construire le chemin complet de l'image dans Firebase Storage
    const storageRef = this.fireStorage.ref(imagePath);

    // Récupérer l'URL de l'image à partir de Firebase Storage
    return storageRef.getDownloadURL();
  }

  
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/retrieveAllPost`).pipe(
      map(posts => {
        // Pour chaque post, ajoutez l'URL de l'image depuis Firebase Storage
        return posts.map(post => {
          const imageUrl = `${this.firebaseStorageUrl}${encodeURIComponent('yt/' + post.id + '.jpg')}?alt=media`;
          return { ...post, imageUrl };
        });
      })
    );
  }
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/retrievePost/${id}`);
  }
  
  
  addPost(data: Post): Observable<any> {
    return this.http.post(`${this.apiUrl}/addPost`, data);
  }
 
  deletePost(idPost: string): Observable<void> {
    const url = `${this.apiUrl}/removePost/${idPost}`;
    return this.http.delete<void>(url);
  }

  updatePost(idPost: any, updatedPost: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updatePost/${idPost}`, updatedPost);
  }
  likePost(idPost: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${idPost}/like`, {});
  }

  retrievePost(idPost: string): Observable<Post> {
    const url = `${this.apiUrl}/retrievePost/${idPost}`;
    return this.http.get<Post>(url);
  }
  addReactionToPost(postId: number, reaction: React): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${postId}/reactions`, reaction);
  }
  searchPostBytitle(titre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchPostsByTitle/${titre}`);
  }
  getLikesCountPerPost(): Observable<Map<number, number>> {
    const url = `${this.apiUrl}/likesCountPerPost`;
    return this.http.get<Map<number, number>>(url);
  }
}

