import { Component, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';
@Component({
  selector:"app-property-card",
  //template :'<h1>i am card </h1>',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{
@Input() Property:IPropertyBase
@Input() hideIcon:boolean

}
