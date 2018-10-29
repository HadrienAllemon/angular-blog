import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service'
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at : Date;
  @Input() id : number;


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  love(plus){
    this.loveIts+=plus
    let index = this.postService.getPost(this.id);
    this.postService.posts[index].loveIts+=plus;
    this.postService.emitPostSubject();
  }

  onDelete(){
    this.postService.deletePost(this.id);
  }

}
