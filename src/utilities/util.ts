import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Util {
   private http = inject(HttpClient);
   private platformId = inject(PLATFORM_ID);
   
   private getHeaders(): HttpHeaders {
    let token = '';

    if (isPlatformBrowser(this.platformId)) {
      const user = sessionStorage.getItem('currentUser');

      if (user) {
        token = JSON.parse(user).jwt;
      }
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getdata(url:string) {
    return this.http.get(url,{headers:this.getHeaders()});
  }
  postdata(url:string,data:any){
    return this.http.post(url,data,{headers:this.getHeaders()});
  }
  }

