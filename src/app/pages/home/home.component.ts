import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPost!: Array<object>

  constructor(
    private postService: PostsService
  ){
    this.postService.loadData().subscribe(val => {
      if(val){
        this.featuredPost = val
      }
    })

  }
}
