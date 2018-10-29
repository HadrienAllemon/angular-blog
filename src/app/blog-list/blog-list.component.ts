import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {
  @Input() listPosts: any[];
  posts : Post[] = []
  postSubscription : Subscription;
  constructor(private postService : PostService,
              private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[])=>{
        this.listPosts = posts
      }
    );
    this.postService.emitPostSubject();
  }

  onNew(){
    this.router.navigate(['/new'])
  }
}
