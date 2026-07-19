import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-vendor-search-component',
  standalone:true,
  imports: [MatCardModule,MatInputModule,MatButtonModule,MatSelectModule,MatIconModule,],
  templateUrl: './vendor-search-component.html',
  styleUrl: './vendor-search-component.scss',
})
export class VendorSearchComponent {
  selectedValue='';
}
