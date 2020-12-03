import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
public propertyid:number;
property=new Property();
galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private route:ActivatedRoute,
              private router:Router,
              private housingservice:HousingService) { }

  ngOnInit() {
    // this.propertyid=Number(this.route.snapshot.params['id']);
    this.propertyid=+this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    );

    // this.route.params.subscribe(
    //      (params)=>{
    //        this.propertyid=+params['id'];
    //        this.housingservice.getProperty(this.propertyid).subscribe(
    //         (data: Property) => {
    //           this.property = data;
    //         },error=>this.router.navigate(['/'])
    //       );
    //      }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:true
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/Image/kitchen1.jpg',
        medium: 'assets/Image/kitchen1.jpg',
        big: 'assets/Image/kitchen1.jpg'
      },
      {
        small: 'assets/Image/kitechen2.jpg',
        medium: 'assets/Image/kitechen2.jpg',
        big: 'assets/Image/kitechen2.jpg'
      },
      {
        small: 'assets/Image/kitchen3.jpg',
        medium: 'assets/Image/kitchen3.jpg',
        big: 'assets/Image/kitchen3.jpg'
      }
    ];

  }
}
