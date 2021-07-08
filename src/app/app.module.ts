import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ElectionofficerComponent } from './electionofficer/electionofficer.component';

import { AdminComponent } from './admin/admin.component';
import { ElectionOfficerListComponent } from './election-officer-list/election-officer-list.component';
import { CreateElectionOfficerComponent } from './create-election-officer/create-election-officer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateElectionOfficerComponent } from './update-election-officer/update-election-officer.component';

import { GetElectionOfficerByIdComponent } from './get-election-officer-by-id/get-election-officer-by-id.component';
import { CreateNominatedCandidateComponent } from './create-nominated-candidate/create-nominated-candidate.component';
import { UpdateNominatedCandidateComponent } from './update-nominated-candidate/update-nominated-candidate.component';
import { NominatedCandidateListComponent } from './nominated-candidate-list/nominated-candidate-list.component';
import { GetNominatedCandidatebyidComponent } from './get-nominated-candidatebyid/get-nominated-candidatebyid.component';
import { VotedlistComponent } from './votedlist/votedlist.component';
import { RegisteredSocietyVotersComponent } from './registered-society-voters/registered-society-voters.component';
import { NominatedcandidateComponent } from './nominatedcandidate/nominatedcandidate.component';
import { CooperativesocietyComponent } from './cooperativesociety/cooperativesociety.component';
import { VoterComponent } from './voter/voter.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ElectionofficerComponent,

    AdminComponent,
    ElectionOfficerListComponent,
    CreateElectionOfficerComponent,
    UpdateElectionOfficerComponent,

    GetElectionOfficerByIdComponent,
     CreateNominatedCandidateComponent,
     UpdateNominatedCandidateComponent,
     NominatedCandidateListComponent,
     GetNominatedCandidatebyidComponent,
     VotedlistComponent,
     RegisteredSocietyVotersComponent,
     NominatedcandidateComponent,
     CooperativesocietyComponent,
     VoterComponent,
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
