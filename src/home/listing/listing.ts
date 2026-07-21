import { Component, input, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatCardModule } from '@angular/material/card';
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';
import { take } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-listing',
  standalone:true,
  imports: [Navbar,MatCardModule,MatIconModule,MatTooltipModule],
  templateUrl: './listing.html',
  styleUrl: './listing.scss',
})
export class Listing implements OnInit {
  searchResult=signal<any>([]);
  category = input<string>();
   imgBaseUrl=UrlModel.serverImgUrl;
  constructor(private util:Util){

  }
  ngOnInit(): void {
    // console.log(this.category());
    this.searchVendors();
  }
  searchVendors(){
    
    this.util.postdata(UrlModel.home.GetVendorListing,
                       {CategoryName:this.category(),ServiceName:'',Price:0,Rating:0,Location:''}).pipe(take(1)).subscribe((res:any)=>{
                        this.searchResult.set(res.data);
                       })
  }
}
