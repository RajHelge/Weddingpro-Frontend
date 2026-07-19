import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Util {
   private http = inject(HttpClient);
  getdata(url:string) {
    return this.http.get(url);
  }
  postdata(url:string,data:any){
    return this.http.post(url,data);
  }
  }

