import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  love(plus){
    this.loveIts+=plus
  }

}
