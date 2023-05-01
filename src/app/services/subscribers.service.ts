import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, limit, where, getDocs, collectionData, } from '@angular/fire/firestore';
import { Sub } from '../models/sub';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private fireStore: Firestore) { }

  addSub(subData: any){
    const data = collection( this.fireStore, 'subscribers')
    addDoc(data, subData).then(() => {
      console.log("Subscriber Saved Successfully")
    })
  }

  checkSub( subEmail: string ){
    const data = collection(this.fireStore, 'subscribers')
    const q = query(data ,where('email', '==', subEmail))
    return getDocs(q)
  }
}
