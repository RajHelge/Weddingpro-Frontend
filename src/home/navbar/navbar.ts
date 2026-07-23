import { Component, inject, OnInit, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, single, take } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';
import { sign } from 'crypto';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule,CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
 private breakpointObserver = inject(BreakpointObserver);
  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(map(result => result.matches));
  navbarItems=signal<any>([
        {id:1,title:'Vendors',url:'/',icon:'storefront'},
        {id:2,title:'Venues',url:'/venues',icon:'location_on'},
        {id:3,title:'Ideas',url:'/',icon:'lightbulb'},
        {id:4,title:'Blogs',url:'/',icon:'dynamic_feed'},
        // {id:5,title:'Login/Signup',url:'/'},
        // {id:6,title:'List Your Business',url:'/'},
        
  ])
  isMenuOpen=false;
  allcategories=signal<any>([]);
  showsubmenu=signal<boolean>(false);
  constructor(private util:Util,private router:Router){

  }
  ngOnInit(): void {
    if(this.allcategories().length==0){
  this.getCategories();  
    }
  }
  getCategories(){
   this.util.getdata(UrlModel.home.allcategories+false).pipe(take(1)).subscribe(res=>{
    this.allcategories.set(res);
  });
  }
  gotoListing(category:any){
    this.showsubmenu.set(false);
    this.router.navigate(['/listing',category.seofriendlyName]);
  }
}
