import { Subject } from 'rxjs';
import { Post } from '../models/post.model'
export class PostService {
  posts : Post[] = [{
      title :  'les aléas du net',
      content : 'Lorem Ipsum Dolor sit Amet\nLorem Ipsum Dolor sit Amet',
      loveIts : -1,
      created_at : new Date('1994-11-15'),
      id : 0
    },{
      title :  'les jeux vidéos du futur',
      content : 'Lorem Ipsum Dolor sit Amet\nLorem Ipsum Dolor sit Amet',
      loveIts : 0,
      created_at : new Date('1994-11-15'),
      id : 1,
    },{
      title :  'la programation pour les nuls',
      content : 'Lorem Ipsum Dolor sit Amet\nLorem Ipsum Dolor sit Amet',
      loveIts : 1,
      created_at : new Date('1994-11-15'),
      id : 2
    }];

  postSubject = new Subject<Post[]>();

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

  createPost(post){
    this.posts.push(post);
    this.emitPostSubject();
  }

  getPost(id){
    let thePost = this.posts.findIndex(
      (p)=>{
        return p.id === id;
      }
    )
    return thePost
  }

  deletePost(id){
    let ind = this.posts.findIndex((p)=>p.id===id);
    this.posts.splice(ind,1);
    this.emitPostSubject();
  }

}
