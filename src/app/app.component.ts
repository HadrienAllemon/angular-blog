import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts = []

  ngOnInit(){

  }
  linkClick(event){
    console.log(event.target);
  }
}
