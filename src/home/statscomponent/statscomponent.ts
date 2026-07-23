import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-statscomponent',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './statscomponent.html',
  styleUrl: './statscomponent.scss',
})
export class Statscomponent {
  staticsData=signal<IStaticsData[]>([]);
  constructor(){
    this.staticsData.set(
                        [
                          {title:'Vendors',value:'35K +',icon:'groups'},
                          {title:'Clients',value:'100 +',icon:'person_pin_circle'},
                          {title:'Happy Couples',value:'50K +',icon:'supervisor_account'},
                          {title:'Wedding Categories',value:'20',icon:'category'},])
  }
}


interface IStaticsData{
  title:string,value:string,icon:string,
}