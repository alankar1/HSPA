import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperty(id).pipe(
      map(propertiesArray => {
        //throw new Error('some error');
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getAllProperty(sellrent?:number): Observable<Property[]>{
   return this.http.get('data/properties.json').pipe(
     map(data=>{
       const propertisArray:Array<Property>=[];
       const localproprties=JSON.parse(localStorage.getItem('newProp'));
       if (localproprties) {
        for(const id in localproprties)
        {
          if (sellrent) {

          if (localproprties.hasOwnProperty(id) && localproprties[id].Sellrent===sellrent) {
            propertisArray.push(localproprties[id]);
          }
        }
        else {
          propertisArray.push(localproprties[id]);
        }

        }
       }

       for(const id in data)
       {
         if (sellrent) {
         if (data.hasOwnProperty(id) && data[id].Sellrent===sellrent) {
           propertisArray.push(data[id]);
         }
         else {
          propertisArray.push(data[id]);
      }
        }

       }
       return propertisArray;
     })
   );
   return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property:Property){
    let newProp = [property];
      // Add new property in array if newProp alreay exists in local storage
      if (localStorage.getItem('newProp')) {
        newProp = [property,
                    ...JSON.parse(localStorage.getItem('newProp'))];
      }

      localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
