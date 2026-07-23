import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltip,MatTooltipModule,],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  businessinsight=signal<any>(
              [
                {heading:'Impression',count:40,tooltip:'Impress is the number of times your profile is viewed'},
                {heading:'Enquiries',count:40,tooltip:'Number of enquiries yor received'},
                {heading:'Bookmarks',count:40,tooltip:'Number of times your profile is saved '},
                {heading:'Reviews',count:40,tooltip:'Number of reviews received on your profile'},
              ]);
}
