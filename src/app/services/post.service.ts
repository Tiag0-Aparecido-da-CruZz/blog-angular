import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    { id: 1, title: 'Primeiro Post', content: 'Conteúdo do post 1', author: 'Autor 1', createdAt: new Date() },
    { id: 2, title: 'Segundo Post', content: 'Conteúdo do post 2', author: 'Autor 2', createdAt: new Date() }
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
