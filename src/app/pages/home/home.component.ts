import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredPost!: Array<object>
  latestPost!: Array<object>

  constructor(
    private postService: PostsService
  ){

  }

  ngOnInit(): void {
    this.postService.loadData().subscribe(val => {
      if(val){
        this.featuredPost = val
      }
    })

    this.postService.loadLatest().subscribe(val => {
      this.latestPost = val
    })
  }
}
