import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where, limit, orderBy, doc , docData } from '@angular/fire/firestore';
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

  loadLatest(){
    const collectionInstance = collection(this.fireStore, 'posts')
    const q = query(collectionInstance, orderBy('createdAt'))
    return  collectionData(q, {idField: 'id'})
  }

  loadCategoryPost(categoryId: string){
    const collectionInstance = collection(this.fireStore, 'posts')
    const q = query(collectionInstance, where('category.categoryId', '==', categoryId), limit(4))
    return  collectionData(q, {idField: 'id'})
  }

  loadOnePost(postId: string){
    const docInstance = doc(this.fireStore, "posts", postId)
    return docData(docInstance)
  }

  loadSimilar(cardId: string){
    const collectionInstance = collection(this.fireStore, 'posts')
    const q = query(collectionInstance, where('category.categoryId', '==', cardId), limit(4))
    return  collectionData(q, {idField: 'id'})
  }
}
