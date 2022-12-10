import { Component } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premapp';
  tab: number[] = [2, 3, 5, 8]
  direBonjour(): string {
    return "bonjour angular"
  }
  personne: Array<Personne> = [
    new Personne(100, "ali"),
    new Personne(101, "Nour"),
    new Personne(102, "Mariem"),
    new Personne(103, "Firas")
  ];
}
