import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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
}
