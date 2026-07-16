import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-vendor-search-component',
  standalone:true,
  imports: [MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './vendor-search-component.html',
  styleUrl: './vendor-search-component.scss',
})
export class VendorSearchComponent {

}
