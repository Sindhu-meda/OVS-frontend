import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NominatedCandidateService } from '../nominated-candidate.service';

@Component({
  selector: 'app-nominated-candidate-list',
  templateUrl: './nominated-candidate-list.component.html',
  styleUrls: ['./nominated-candidate-list.component.css']
})
export class NominatedCandidateListComponent implements OnInit {
  NominatedCandidate:any;
  candidateId:number=0;
    constructor(private nominatedCandidateService:NominatedCandidateService,private router:Router) { }
  
    ngOnInit(): void {
      this.nominatedCandidateService.getNominatedCandidateList().subscribe(data => this.NominatedCandidate = data);
    }
  
  deleteNominatedCandidate(candidateId:number)
  {
    this.nominatedCandidateService.deleteNominatedCandidate(candidateId).subscribe(data => {console.log(data); this.goToNominatedCandidateList();},
    error => console.log(error));
  }
  goToNominatedCandidateList(){
    this.router.navigate(['/getNominatedCandidateList']);
  }
  }
  
  

