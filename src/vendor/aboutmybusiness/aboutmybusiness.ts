import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from "@angular/material/select";

@Component({
  selector: 'app-aboutmybusiness',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, CommonModule, MatInputModule, MatSelect, MatOption],
  templateUrl: './aboutmybusiness.html',
  styleUrl: './aboutmybusiness.scss',
})
export class Aboutmybusiness {

}
