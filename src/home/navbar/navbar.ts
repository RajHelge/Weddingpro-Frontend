import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Login } from '../../account/login/login';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule,CommonModule, RouterLink,MatDialogModule],
  
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
 private breakpointObserver = inject(BreakpointObserver);
  readonly dialog = inject(MatDialog);
    // private dialogRef = inject(MatDialogRef<Login>);
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
  ngOnDestroy(): void {
    // this.dialogRef.close();
    this.dialog.closeAll();
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
  openLoginDialog(){
   var dialogref= this.dialog.open(Login).afterClosed().subscribe(res=>{
    console.log(res);
   })
  }
}
