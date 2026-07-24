import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-myservices',
  imports: [MatCardModule,MatInputModule,MatSelectModule,MatButtonModule,MatIconModule,FormsModule,MatFormFieldModule,ReactiveFormsModule,CommonModule],
  templateUrl: './myservices.html',
  styleUrl: './myservices.scss',
})
export class Myservices {

}
