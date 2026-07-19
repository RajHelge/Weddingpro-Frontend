import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [MatToolbarModule, MatAnchor, MatIconModule, MatMenuModule, AsyncPipe, CommonModule, RouterLink, MatIconButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
 private breakpointObserver = inject(BreakpointObserver);
  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(map(result => result.matches));
  navbarItems=signal<any>([
        {id:1,title:'Vendors',url:'/',icon:'storefront'},
        {id:2,title:'Venues',url:'vendors',icon:'location_on'},
        {id:3,title:'Ideas',url:'/',icon:'lightbulb'},
        {id:4,title:'Blogs',url:'/',icon:'dynamic_feed'},
        // {id:5,title:'Login/Signup',url:'/'},
        // {id:6,title:'List Your Business',url:'/'},
        
  ])
  isMenuOpen=false;
}
