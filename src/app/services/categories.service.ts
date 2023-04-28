import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private fireStore: Firestore
  ) { }

  loadData(): Observable<any>{
    const collectionInstance = collection(this.fireStore, 'categories')

    return  collectionData(collectionInstance, {idField: 'id'})
  }
}
