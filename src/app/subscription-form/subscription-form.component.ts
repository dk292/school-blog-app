import { Component } from '@angular/core';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  constructor(){}

  onSubmit(formVal: any){
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }
  }
}
