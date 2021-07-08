import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ElectionofficerComponent } from './electionofficer/electionofficer.component';
import { AdminComponent } from './admin/admin.component';
import { ElectionOfficerListComponent } from './election-officer-list/election-officer-list.component';
import { CreateElectionOfficerComponent } from './create-election-officer/create-election-officer.component';
import { UpdateElectionOfficerComponent } from './update-election-officer/update-election-officer.component';
import { GetElectionOfficerByIdComponent } from './get-election-officer-by-id/get-election-officer-by-id.component';
import { CreateNominatedCandidateComponent } from './create-nominated-candidate/create-nominated-candidate.component';
import { UpdateNominatedCandidateComponent } from './update-nominated-candidate/update-nominated-candidate.component';
import { NominatedCandidateListComponent } from './nominated-candidate-list/nominated-candidate-list.component';
import { GetNominatedCandidatebyidComponent } from './get-nominated-candidatebyid/get-nominated-candidatebyid.component';
import { VotedlistComponent } from './votedlist/votedlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'electionofficer-page', component: ElectionofficerComponent },
  { path: 'createElectionOfficer', component: CreateElectionOfficerComponent },
  { path: 'updateElectionOfficer/:id', component: UpdateElectionOfficerComponent },
  { path: 'getElectionOfficerById/:id', component: GetElectionOfficerByIdComponent },
  { path: 'admin-page', component: AdminComponent },
  { path: 'voter-page', component: VotedlistComponent },
  {path:'getElectionOfficerList',component:ElectionOfficerListComponent},
  { path: 'createNominatedCandidate', component: CreateNominatedCandidateComponent },
  { path: 'updateNominatedCandidate/:id', component: UpdateNominatedCandidateComponent },
  { path: 'getNominatedCandidateById/:id', component: GetNominatedCandidatebyidComponent },
  {path:'getNominatedCandidateList',component:NominatedCandidateListComponent},
  
  { path: 'votedlist', component: VotedlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}