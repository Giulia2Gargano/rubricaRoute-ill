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

  @Input() nomeInput: string;
  @Input() cognomeInput: string;
  @Input() telefonoInput: string;

  @Output() contaOut = new EventEmitter<string>();
  @Output() cercaOut = new EventEmitter<string>();

  nome: string;
  cognome: string;
  telefono: string;
  persona = new Persona();
  constructor(public med: MediatorService, private router: Router) { }
  ngOnInit(): void {
    this.nome=this.nomeInput;
    this.cognome=this.cognomeInput;
    this.telefono=this.telefonoInput;
  }

  aggiungi() {
    this.med.persone.push(this.persona);
    this.persona = new Persona();
  }

  conta() {
    this.contaOut.emit("Evento conta")
  }

  cerca() {
    this.cercaOut.emit("Evento cerca")
  }


}