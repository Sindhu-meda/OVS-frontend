import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NominatedCandidate } from '../nominated-candidate';
import { NominatedCandidateService } from '../nominated-candidate.service';

@Component({
  selector: 'app-get-nominated-candidatebyid',
  templateUrl: './get-nominated-candidatebyid.component.html',
  styleUrls: ['./get-nominated-candidatebyid.component.css']
})
export class GetNominatedCandidatebyidComponent implements OnInit {
  id:number=0;
  nominatedCandidate : NominatedCandidate= new NominatedCandidate ();
  @ViewChild('id') inputId :any;

  constructor(private nominatedCandidateService : NominatedCandidateService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.nominatedCandidateService.getNominatedCandidateById(this.id).subscribe(data => {
      this.nominatedCandidate= data; console.log(data);
    },
    error => console.log(error));

  }
}
