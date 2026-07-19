import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-howitworks',
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './howitworks.html',
  styleUrl: './howitworks.scss',
})
export class Howitworks {
  steps=signal<any[]>([
    {icon:'person_search',text:'Search',subtext:'Explore top vendors'},
    {icon:'handshake',text:'Connect',subtext:'Compare & connect easily'},
    {icon:'wine_bar',text:'Celebrate',subtext:'Make memories forever'},
  ]);
}
