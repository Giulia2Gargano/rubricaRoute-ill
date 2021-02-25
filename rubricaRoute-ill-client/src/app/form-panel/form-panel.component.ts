import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(public med: MediatorService, private router: Router) { }
  ngOnInit(): void {

  }

  aggiungi() {
    this.med.persone.push(this.persona);
    this.persona = new Persona();
  }

  conta() {
    this.router.navigateByUrl("/count-page");
  }

  ricerca() {
    this.router.navigateByUrl("/search-page");
  }

 
}