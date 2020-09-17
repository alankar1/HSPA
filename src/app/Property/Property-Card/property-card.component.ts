import { Component } from '@angular/core';
@Component({
  selector:"app-property-card",
  //template :'<h1>i am card </h1>',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{

  Property:any={
      "Id":1,
      "Type":"House",
      "Name":"Birla House",
      "Price":12000
  }
}
