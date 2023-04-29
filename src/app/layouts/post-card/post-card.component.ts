import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() postData!: any
  post!: any
  constructor(
    private postSerice: PostsService
  ){
    
  }

  ngOnInit(): void {
    this.postSerice.loadDataPost().subscribe(val => {
      console.log(val)
    })
  }

  

}
