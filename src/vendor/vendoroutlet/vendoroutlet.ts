import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MatToolbar, MatToolbarRow } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CdkAutofill } from "@angular/cdk/text-field";

@Component({
  selector: 'app-vendoroutlet',
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, MatToolbar, MatToolbarRow, MatListModule, RouterLinkWithHref, CdkAutofill],
  templateUrl: './vendoroutlet.html',
  styleUrl: './vendoroutlet.scss',
})
export class Vendoroutlet {
showFiller=signal(false);
navlinks=[
            {id:1,title:'Dashboard',icon:'home',link:'/vendor',position:'left'},
            {id:2,title:'Business Info',icon:'info',link:'/vendor/my-business-info',position:'left'},
            {id:3,title:'business Services',icon:'support_agent',link:'/vendor/my-business-services',position:'left'},
            {id:4,title:'Leads',icon:'perm_phone_msg',link:'/vendor/my-leads',position:'left'},
            {id:5,title:'Book Promotion',icon:'collections_bookmark',link:'/vendor/book-promotion',position:'left'},
            {id:6,title:'Promotions',icon:'loyalty',link:'/vendor/my-promotions',position:'left'},
            {id:7,title:'Albums',icon:'photo_album',link:'/vendor/',position:'left'},
            {id:8,title:'Feed Back',icon:'rate_review',link:'/vendor/my-feedback',position:'left'},
            {id:9,title:'Analytics',icon:'bar_chart',link:'/vendor/analytics',position:'left'},
            {id:10,title:'Account',icon:'account_circle',link:'/vendor/my-account',position:'right'},
            {id:11,title:'Invoices',icon:'receipt_long',link:'/vendor/',position:'right'},
            {id:11,title:'Log Out',icon:'logout',link:'/vendor/',position:'right'},
          ]
leftNav=this.navlinks.filter(x=>x.position=='left');
rightNav=this.navlinks.filter(x=>x.position=='right');          
}
