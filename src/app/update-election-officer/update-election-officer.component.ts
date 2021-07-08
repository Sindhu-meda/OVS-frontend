import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionOfficerService } from '../election-officer.service';
import { ElectionOfficers } from '../election-officers';

@Component({
  selector: 'app-update-election-officer',
  templateUrl: './update-election-officer.component.html',
  styleUrls: ['./update-election-officer.component.css']
})

export class UpdateElectionOfficerComponent implements OnInit {
  id: number=0;
  @Input() publicparentData: any;
  electionofficers:ElectionOfficers=new ElectionOfficers();
  
  constructor(private electionofficerService: ElectionOfficerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.electionofficerService.getElectionOfficerById(this.id).subscribe(data=>
      {this.electionofficers=data;
      },error=>console.log(error));
    }
    updateElectionOfficer() {
      this.electionofficerService.updateElectionOfficer(this.electionofficers).subscribe(data => { this.navigateToElectionOfficer(); console.log(this.electionofficers); console.log(data) },
        error => console.log(error));
    }
    navigateToElectionOfficer() {
      this.router.navigate(['/getElectionOfficerList']);
    }
  
    onSubmit(){
    this.updateElectionOfficer();
    }
}

