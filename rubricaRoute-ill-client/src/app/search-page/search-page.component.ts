import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(public med: MediatorService) { }

  ngOnInit(): void {
  }

}
