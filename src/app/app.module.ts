import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';

import { PostService } from './services/post.service';
import { PostFormComponent } from './post-form/post-form.component';

const appRoutes : Routes = [
  { path: 'posts', component: BlogListComponent },
  { path: 'new', component: PostFormComponent },
  { path: '', redirectTo: 'posts',pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogListComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
