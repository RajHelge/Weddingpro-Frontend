import { Component, input, OnInit } from '@angular/core';
import { UrlModel } from '../../../utilities/utilities';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-aboutbusiness',
  imports: [MatCardModule,MatIconModule],
  templateUrl: './aboutbusiness.html',
  styleUrl: './aboutbusiness.scss',
})
export class Aboutbusiness implements  OnInit {

  aboutbusiness=input<any>();
  imagepath=UrlModel.serverImgUrl;
  ngOnInit(): void {
    console.log(this.aboutbusiness());
  }

}
