import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionOfficerService } from '../election-officer.service';

@Component({
  selector: 'app-election-officer-list',
  templateUrl: './election-officer-list.component.html',
  styleUrls: ['./election-officer-list.component.css']
})
export class ElectionOfficerListComponent implements OnInit {
ElectionOfficers:any;
id:number=0;
  constructor(private electionOfficerService:ElectionOfficerService,private router:Router) { }

  ngOnInit(): void {
    this.electionOfficerService.getElectionOfficerList().subscribe(data => this.ElectionOfficers = data);
  }

deleteElectionOfficers(id:number)
{
  this.electionOfficerService.deleteElectionOfficer(id).subscribe(data => {console.log(data); this.goToElectionOfficerList();},
  error => console.log(error));
}
goToElectionOfficerList(){
  this.router.navigate(['/getElectionOfficerList']);
}
}
