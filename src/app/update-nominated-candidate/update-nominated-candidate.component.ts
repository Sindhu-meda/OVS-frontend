import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NominatedCandidate } from '../nominated-candidate';
import { NominatedCandidateService } from '../nominated-candidate.service';

@Component({
  selector: 'app-update-nominated-candidate',
  templateUrl: './update-nominated-candidate.component.html',
  styleUrls: ['./update-nominated-candidate.component.css']
})
export class UpdateNominatedCandidateComponent implements OnInit {
  id: number=0;
  @Input() publicparentData: any;
  nominatedCandidate:NominatedCandidate=new NominatedCandidate();
  
  constructor(private nominatedCandidateService: NominatedCandidateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.nominatedCandidateService.getNominatedCandidateById(this.id).subscribe(data=>
      {this.nominatedCandidate=data;
      },error=>console.log(error));
    }
    updateNominatedCandidate() {
      this.nominatedCandidateService.updateNominatedCandidate(this.nominatedCandidate).subscribe(data => { this.navigateToNominatedCandidate(); console.log(this.nominatedCandidate); console.log(data) },
        error => console.log(error));
    }
    navigateToNominatedCandidate() {
      this.router.navigate(['/getNominatedCandidateList']);
    }
  
    onSubmit(){
    this.updateNominatedCandidate();
    }
  

}
