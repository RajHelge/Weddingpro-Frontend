import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-vendorregistration',
  imports: [MatCard, MatButtonModule, MatCardContent],
  templateUrl: './vendorregistration.html',
  styleUrl: './vendorregistration.scss',
})
export class Vendorregistration {

}
