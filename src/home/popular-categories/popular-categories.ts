import { Component, OnInit, signal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import * as urls from '../../utilities/utilities';
import { Util } from '../../utilities/util';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-popular-categories',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIcon],
  providers:[Util],
  templateUrl: './popular-categories.html',
  styleUrl: './popular-categories.scss',
})
export class PopularCategories implements OnInit {
  popularcategory=signal<any[]>([]);
  allCategories=signal<any[]>([]);
  showall=signal<Boolean>(false);
  constructor(private utilservice:Util){}
  ngOnInit(): void {
    this.getPopularCategories();
  }
  getPopularCategories(){
    this.utilservice.getdata(urls.UrlModel.home.popularCategories).pipe(take(1))
    .subscribe((res:any)=>this.popularcategory.set(res));
  }
  getAllCategories(){
    if(this.allCategories().length==0){
    this.utilservice.getdata(urls.UrlModel.home.allcategories+'false').pipe(take(1)).subscribe((res:any)=>
      this.allCategories.set(res))
        }
        this.showall.set(!this.showall());
  }
}
