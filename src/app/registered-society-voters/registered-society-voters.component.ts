import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CooperativeSociety } from '../cooperative-society';
import { CooperativesocietyService } from '../cooperativesociety.service';
import { NominatedCandidate } from '../nominated-candidate';
import { NominatedCandidateService } from '../nominated-candidate.service';
import { Registeredsocietyvoters } from '../registeredsocietyvoters';
import { RegisteredsocietyvotersService } from '../registeredsocietyvoters.service';

@Component({
  selector: 'app-registered-society-voters',
  templateUrl: './registered-society-voters.component.html',
  styleUrls: ['./registered-society-voters.component.css']
})
export class RegisteredSocietyVotersComponent implements OnInit {
  registeredsocietyvoters: Registeredsocietyvoters =
    new Registeredsocietyvoters();

  nominatedCandidate: NominatedCandidate = new NominatedCandidate();

  cooperativesociety: CooperativeSociety = new CooperativeSociety();

  constructor(
    private _registeredSocietyVotersService: RegisteredsocietyvotersService,
    private _nominatedcandidateservice: NominatedCandidateService,
    private _cooperativesocietyservice: CooperativesocietyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(value: any) {
    console.log(value);
    this.saveRegisteredSocietyVoters();
    this.saveCooperativeSociety();
    this.saveNominatedCandidate();
  }
  saveRegisteredSocietyVoters() {
    this._registeredSocietyVotersService
      .createRegisteredSocietyVoters(this.registeredsocietyvoters)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    //this.saveCooperativeSociety();
  }

  saveCooperativeSociety() {
    this._cooperativesocietyservice
      .createCooperativeSociety(this.cooperativesociety)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    // this.saveNominatedCandidate();
  }

  saveNominatedCandidate() {
    this._nominatedcandidateservice
      .createNominatedCandidate(this.nominatedCandidate)
      .subscribe(
        (data) => {
          console.log(data);
          alert("You have succesfully voted!")
        },
        (error) => console.log(error)
      );
      this.navigateToHome();
  }


navigateToHome() {
    this.router.navigate(['/main-page']);
  }
}



