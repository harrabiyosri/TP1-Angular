import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nom: any
  prenom: any

  constructor() { }

  ngOnInit(): void {
    this.nom = "yosri"
    this.prenom = "harrabi"
  }

}
