import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  imports: [CommonModule]
})
export class PostDetailComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute, 
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPosts().find(p => p.id === id)!;
  }
}
