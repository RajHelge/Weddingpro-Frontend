import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { matSnackBarAnimations } from '@angular/material/snack-bar';
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';
import { take } from 'rxjs';
@Component({
  selector: 'app-featured-vendors',
  imports: [MatCardModule,MatIconModule,MatButtonModule],
  templateUrl: './featured-vendors.html',
  styleUrl: './featured-vendors.scss',
})
export class FeaturedVendors implements OnInit {
  imgBaseUrl=UrlModel.serverImgUrl;
  featuredVendors=signal<any[]>([]);
  constructor(private utils:Util){}
  ngOnInit(): void {
    this.getFeaturedVendors()
  }
  getFeaturedVendors(){
    this.utils.getdata(UrlModel.home.GetFeaturedVendors,
      ).pipe(take(1)).subscribe((res:any)=>{
      this.featuredVendors.set(res.data)
    })
  }
}
