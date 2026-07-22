import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatCardModule } from '@angular/material/card';
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';
import { take } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-listing',
  standalone:true,
  imports: [Navbar,MatCardModule,MatIconModule,MatTooltipModule,MatProgressBarModule],
  templateUrl: './listing.html',
  styleUrl: './listing.scss',
})
export class Listing implements OnInit {
  searchResult=signal<any>([]);
  category = input<string>();
  loading=signal(false);
   imgBaseUrl=UrlModel.serverImgUrl;
  //  private activatedroute = inject(ActivatedRoute);
   private util=inject(Util);
   private router=inject(Router);
  constructor(){
    effect(()=>{
      this.searchVendors();
    })
  }
  ngOnInit(): void {
    this.searchVendors();
  }
  searchVendors(){
    this.loading.set(true);
    this.util.postdata(UrlModel.home.GetVendorListing,
                       {CategoryName:this.category(),ServiceName:'',Price:0,Rating:0,Location:''}).pipe(take(1)).subscribe((res:any)=>{
                        this.searchResult.set(res.data);
                        this.loading.set(false);
                       })
  }
  gotoListingDetails(v:any){
    
    this.router.navigate(['/lisgint-details',v.businessName,v.vendorId]);
  }
}
