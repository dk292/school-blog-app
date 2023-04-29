import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where, limit } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private fireStore: Firestore
  ) { }

  loadData(){
    const collectionInstance = collection(this.fireStore, 'posts')
    const q = query(collectionInstance, where('isFeatured', '==', true), limit(4))
    return  collectionData(q, {idField: 'id'})
  }

  loadDataPost(): Observable<any> {

    const collectionInstance = collection(this.fireStore, 'posts')

    return  collectionData(collectionInstance, {idField: 'id'})
  }
}
