import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aggiungi(s: string) {
    console.log("Aggiunto campo");
  }

  conta(s: string) {
    console.log("Ricevuto evento conta");
  }

  ricerca(s: string) {
    console.log("Ricevuto evento ricerca");
  }
}
