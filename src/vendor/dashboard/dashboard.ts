import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from "@angular/material/tooltip";
import { Util } from '../../utilities/util';
import { UrlModel } from '../../utilities/utilities';
import { forkJoin, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,CommonModule, MatIconModule, MatButtonModule, MatTooltip,MatTooltipModule,],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  util=inject(Util);
  vendorprofile=signal(null);
  dashboardcontent=signal<any>({});
  // businessInsight=signal([]);
  businessinsight=signal<any>([]);
              constructor(){
                forkJoin({
                  vendorprofile:this.util.getdata(UrlModel.vendor.vendorprofile),
                  businessinsight:this.util.getdata(UrlModel.vendor.getBusinessInsight+'7'),
                  dashboardcontent:this.util.getdata(UrlModel.vendor.dashboard)
                }).pipe(take(1)).subscribe({
                  next:((res:any)=>{
                    
                    this.vendorprofile.set(res),
                     this.businessinsight.set(res.data),
                     this.dashboardcontent.set(res.data)
                  })
                })
              }
              getVendorProfile(){
                this.util.getdata(UrlModel.vendor.vendorprofile)
                         .pipe(take(1)).subscribe((res:any)=>{
                          this.vendorprofile.set(res);
                         })
              }
              getBusinessInsight(){
                this.util.getdata(UrlModel.vendor.getBusinessInsight+'7')
                         .pipe(take(1)).subscribe((res:any)=>{
                          this.businessinsight.set(res);
                         })
              }
              getDashboardContent(){
                this.util.getdata(UrlModel.vendor.dashboard)
                         .pipe(take(1)).subscribe((res:any)=>{
                            this.dashboardcontent.set(res);
                         })
              }
}
