import { Component, OnInit } from '@angular/core';
import { CooperativeSociety } from '../cooperative-society';
@Component({
  selector: 'app-cooperativesociety',
  templateUrl: './cooperativesociety.component.html',
  styleUrls: ['./cooperativesociety.component.css']
})
export class CooperativesocietyComponent implements OnInit {
  cooperativesociety: CooperativeSociety = new CooperativeSociety();
  constructor() { }

  ngOnInit(): void {
  }

}
