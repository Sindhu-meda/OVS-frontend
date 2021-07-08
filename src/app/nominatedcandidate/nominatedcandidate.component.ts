import { Component, OnInit } from '@angular/core';
import { NominatedCandidate } from '../nominated-candidate';

@Component({
  selector: 'app-nominatedcandidate',
  templateUrl: './nominatedcandidate.component.html',
  styleUrls: ['./nominatedcandidate.component.css']
})
export class NominatedcandidateComponent implements OnInit {
  nominatedcandidate: NominatedCandidate=new NominatedCandidate();
  constructor() { }

  ngOnInit(): void {
  }

}
