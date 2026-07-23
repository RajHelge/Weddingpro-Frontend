import { Component } from '@angular/core';
import { Navbar } from '../../home/navbar/navbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-vendorsignup',
  imports: [Navbar,MatCardModule,FormsModule,ReactiveFormsModule,MatInputModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './vendorsignup.html',
  styleUrl: './vendorsignup.scss',
})
export class Vendorsignup {

}
