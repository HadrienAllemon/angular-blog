import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [{
    title :  'les aléas du net',
    content : 'Lorem Ipsum Dolor sit Amet\nLorem Ipsum Dolor sit Amet',
    loveIts : -1,
    created_at : new Date('1994-11-15')
  },{
    title :  'les jeux vidéos du futur',
    content : 'Lorem Ipsum Dolor sit Amet\nLorem Ipsum Dolor sit Amet',
    loveIts : 0,
    created_at : new Date('1994-11-15')
  },{
    title :  'la programation pour les nuls',
    content : 'Lorem Ipsum Dolor sit Amet\nLorem Ipsum Dolor sit Amet',
    loveIts : 1,
    created_at : new Date('1994-11-15')
  }]
}
