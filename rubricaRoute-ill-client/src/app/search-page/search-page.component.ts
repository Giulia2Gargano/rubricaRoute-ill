import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  criterioRic: string;
  personeFiltrate: Persona[] = [];
  showRubCompl=true;
  showRubFiltr=false;
  constructor(public med: MediatorService,private router:Router) { }

  ngOnInit(): void {
  }

  mainPage(){
    this.router.navigateByUrl("/main-page");
  }

  cerca(){
    this.showRubCompl=false;
    this.showRubFiltr=true;
    this.personeFiltrate=this.med.persone;
    this.personeFiltrate=this.personeFiltrate.filter(r=>r.nome.startsWith(this.criterioRic) || r.cognome.startsWith(this.criterioRic) || r.telefono.startsWith(this.criterioRic));
  }

  elimina(i: number) {
    this.med.persone.splice(i, 1)
  }


}
