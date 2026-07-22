import { Component, ElementRef, inject, input, OnInit, Signal, signal, ViewChild, viewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Aboutbusiness } from './aboutbusiness/aboutbusiness';
import { SearvicesAndPackages } from './searvices-and-packages/searvices-and-packages';
import { ListingdetailGallery } from './listingdetail-gallery/listingdetail-gallery';
import { ListingdetailReviews } from './listingdetail-reviews/listingdetail-reviews';
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatDateSelectionModel } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-listing-details',
  imports: [Navbar,MatCardModule,MatButtonModule,
    CommonModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatDatepickerModule,MatFormFieldModule,
    MatIconModule,Aboutbusiness,SearvicesAndPackages,ListingdetailGallery,ListingdetailReviews],
    providers: [provideNativeDateAdapter()],
  templateUrl: './listing-details.html',
  styleUrl: './listing-details.scss',
})
export class ListingDetails implements OnInit {
  businessname=input<string>();
  vid=input<string>();
  util=inject(Util);
  imagepath=UrlModel.serverImgUrl;
  vendorProfile=signal<any>({});
  aboutuse = viewChild<ElementRef<HTMLElement>>('aboutuse');
  servicepackages = viewChild<ElementRef<HTMLElement>>('servicepackages');
  reviews = viewChild<ElementRef<HTMLElement>>('reviews');
  gallery = viewChild<ElementRef<HTMLElement>>('gallery');
  ngOnInit(): void {
  this.getVendorDetails()  
  }
  getVendorDetails(){
    this.util.getdata(UrlModel.home.ListingDetails+this.vid()).pipe(take(1)).subscribe((res:any)=>{
      this.vendorProfile.set(res.data)
    })
  }
  scrollToFaq(tabindex:number) {
    switch(tabindex){
      case 0:
      this.aboutuse()?.nativeElement.scrollIntoView({behavior: 'smooth',block: 'start'});
      break;
      case 1:
      this.servicepackages()?.nativeElement.scrollIntoView({behavior: 'smooth',block: 'start'});
      break;
      case 2:
      this.reviews()?.nativeElement.scrollIntoView({behavior: 'smooth',block: 'start'});
      break;
      case 3:
      this.gallery()?.nativeElement.scrollIntoView({behavior: 'smooth',block: 'start'});
      break;
  }
}
}
