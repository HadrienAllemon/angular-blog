import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    });
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const created_at = new Date()
    const newPost = new Post();
    const id = this.postService.posts[this.postService.posts.length-1].id + 1
    newPost.title = title;
    newPost.content = content;
    newPost.loveIts= 0;
    newPost.created_at = created_at;
    newPost.id = id;
    this.postService.createPost(newPost);
    console.log(newPost.id);
    this.router.navigate(['/posts']);
  }
}
