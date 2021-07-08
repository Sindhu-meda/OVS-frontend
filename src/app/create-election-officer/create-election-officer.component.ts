import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionOfficerService } from '../election-officer.service';
import { ElectionOfficers } from '../election-officers';

@Component({
  selector: 'app-create-election-officer',
  templateUrl: './create-election-officer.component.html',
  styleUrls: ['./create-election-officer.component.css']
})
export class CreateElectionOfficerComponent implements OnInit {

  electionofficers:ElectionOfficers=new ElectionOfficers();

  constructor(private _electionofficerService:ElectionOfficerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    
    this.electionofficers.firstName = value.firstName;
    this.electionofficers.lastName = value.lastName;
    this.electionofficers.emailId = value.emailId;
    this.electionofficers.address1 = value.address1;
    this.electionofficers.district = value.district;
    this.electionofficers.pincode = value.pincode;
    this.electionofficers.gender = value.gender;
    console.log(this.electionofficers);
    
    this.saveElectionOfficers();
  }
  saveElectionOfficers() {
    
    this._electionofficerService .createElectionOfficer(this.electionofficers).subscribe(data=>{console.log(data)},error => console.log(error));
    this.navigateToElectionOfficer();

  
  }
  navigateToElectionOfficer() {
    this.router.navigate(['/getElectionOfficerList']);
  }


}
