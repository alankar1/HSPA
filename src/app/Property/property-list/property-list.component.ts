import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Sellrent=1;
  properties:IPropertyBase[];
  Todays=new Date();
  City='';
  SearchCity='';
  SortbyParam='';
  SortDirection='asc';

  Property: Array<IPropertyBase>;

  constructor(private route:ActivatedRoute,private housingService:HousingService) { }

  ngOnInit(): void {
if(this.route.snapshot.url.toString())
{
this.Sellrent=2;//means we are not rent-property URL else x we are not base URL {1=SellHouse 2=Renthouse}
}
    this.housingService.getAllProperty(this.Sellrent).subscribe(
      data=>{
           this.Property=data;
           console.log(data);

         },error=>{
          console.log('httperror:');
           console.log(error);
         }

    );
    // this.http.get('data/properties.json').subscribe(
    // data=>{
    //   this.Property=data;
    // }
    // );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
