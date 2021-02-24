import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {

  @Input() nome: string = "";
  @Input() cognome: string = "";
  @Input() telefono: string = "";

  @Output() add = new EventEmitter<string>();
  @Output() cont = new EventEmitter<string>();
  @Output() ric = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  aggiungi() {
    this.add.emit(this.nome);
    this.add.emit(this.cognome);
    this.add.emit(this.telefono);
  }

  conta() {
    this.cont.emit("");
  }

  ricerca() {
    this.ric.emit("");
  }
}
