import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-homelayout',
  standalone:true,
  imports: [RouterOutlet,MatToolbarModule,MatButtonModule,MatIconModule,MatCardModule,MatSidenavModule,Footer],
  templateUrl: './homelayout.html',
  styleUrls: ['./homelayout.scss']
})
export class Homelayout {

}
