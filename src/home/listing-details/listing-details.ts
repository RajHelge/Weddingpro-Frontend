import { Component, input } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listing-details',
  imports: [Navbar,MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './listing-details.html',
  styleUrl: './listing-details.scss',
})
export class ListingDetails {
  businessname=input<string>();

}
