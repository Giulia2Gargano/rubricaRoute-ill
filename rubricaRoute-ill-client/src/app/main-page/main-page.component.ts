import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  conta(s: string) {
    this.router.navigateByUrl("/count-page");
    console.log(s);
  }

  cerca(s: string) {
    this.router.navigateByUrl("/search-page");
    console.log(s);
    
  }

  cancella(i: number) {
    this.med.persone.splice(i, 1);
  }
}
