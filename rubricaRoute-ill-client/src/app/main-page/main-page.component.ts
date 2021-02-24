import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  aggiungi(s: string) {
    console.log('Aggiunto campo', s);
  }

  conta(s: string) {
    console.log('Ricevuto evento', s);
    this.router.navigateByUrl("/count-page");
  }

  ricerca(s: string) {
    console.log('Ricevuto evento', s);
    this.router.navigateByUrl("/search-page");
  }
}
