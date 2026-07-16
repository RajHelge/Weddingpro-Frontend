import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-bannercomponent',
  standalone:true,
  imports: [MatButtonModule,Navbar],
  templateUrl: './bannercomponent.html',
  styleUrl: './bannercomponent.scss',
})
export class Bannercomponent {

}
