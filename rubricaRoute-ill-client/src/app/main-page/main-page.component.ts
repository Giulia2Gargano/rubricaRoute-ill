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

  persona: Persona = new Persona();
  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  aggiungi() {
    // this.med.persone.push(this.persona);
    // this.persona = new Persona();
  }

  conta(s: string) {
  }

  ricerca(s: string) {
  }

  cancella(i: number) {
    this.med.persone.splice(i, 1);
  }
}
