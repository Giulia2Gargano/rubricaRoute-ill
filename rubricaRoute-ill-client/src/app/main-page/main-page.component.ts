import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 persona: Persona= new Persona();
  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  aggiungi(s: string) {
  this.med.persone.push(this.persona);
  this.persona= new Persona();
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
