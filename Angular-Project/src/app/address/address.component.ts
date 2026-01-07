import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
    user : any;
    constructor() {
      this.user ={
        name : 'Varun',
        address : '4620 W Pioneer Dr',
        phone : ['913-206-0240','682-492-8864']
      }
    }
}
