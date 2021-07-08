import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NominatedCandidate } from '../nominated-candidate';
import { NominatedCandidateService } from '../nominated-candidate.service';

@Component({
  selector: 'app-create-nominated-candidate',
  templateUrl: './create-nominated-candidate.component.html',
  styleUrls: ['./create-nominated-candidate.component.css']
})
export class CreateNominatedCandidateComponent implements OnInit {
  id:number=0;
  nominatedCandidate:NominatedCandidate=new NominatedCandidate();

  constructor(private _nominatedCandidateService:NominatedCandidateService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    
    this. nominatedCandidate.id = value.id;
    this. nominatedCandidate.nominationFormNo = value.nominationFormNo;
    
    console.log(this.nominatedCandidate);
    
    this.saveNominatedCandidate();
  }
  saveNominatedCandidate() {
    
    this._nominatedCandidateService .createNominatedCandidate(this.nominatedCandidate).subscribe(data=>{console.log(data)},error => console.log(error));
    this.navigateToNominatedCandidate();

  
  }
  navigateToNominatedCandidate() {
    this.router.navigate(['/getNominatedCandidateList']);
  }


}


