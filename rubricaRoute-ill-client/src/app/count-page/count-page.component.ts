import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {
  constructor(public med:MediatorService) { }

  ngOnInit(): void {
  }

}
