import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-whyweddingpro',
  imports: [MatCardModule,MatIconModule,MatButtonModule],
  templateUrl: './whyweddingpro.html',
  styleUrl: './whyweddingpro.scss',
})
export class Whyweddingpro {
    whyFeatures=signal<any[]>([
      {text:'Verified Vendors',icon:'verified_user',subtext:'All vendor are veriried and trusted'},
      {text:'Instant Quote',icon:'currency_rupee_circle',subtext:'Get quick quote and compare'},
      {text:'Wedding Checklist',icon:'grading',subtext:'Step by step planning guide'},
      {text:'Budget Planner',icon:'checkbook',subtext:'Track expenses & stay on budget'},
      {text:'RSVP Management',icon:'rsvp',subtext:'Degital invite & guest tracking'},
      {text:'Vendor Comparison',icon:'balance',subtext:'Compare review,planning and more '},
      
    ]);
}
