import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  subEmail!: string

  constructor(private subService: SubscribersService){}

  onSubmit(formVal: any){
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }

    
    this.subService.checkSub(subData.email).then((val) => {
      if(val.empty){
        this.subService.addSub(subData)
      }else{
        console.log("Email is already used in Subscription...!")
      }
    })

  }
}
