import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionOfficerService } from '../election-officer.service';
import { ElectionOfficers } from '../election-officers';

@Component({
  selector: 'app-get-election-officer-by-id',
  templateUrl: './get-election-officer-by-id.component.html',
  styleUrls: ['./get-election-officer-by-id.component.css']
})
export class GetElectionOfficerByIdComponent implements OnInit {
  id:number=0;
  electionOfficers : ElectionOfficers= new ElectionOfficers();
  @ViewChild('id') inputId :any;

  constructor(private electionOfficerService : ElectionOfficerService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.electionOfficerService.getElectionOfficerById(this.id).subscribe(data => {
      this.electionOfficers= data; console.log(data);
    },
    error => console.log(error));

  }




}
