import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VotedlistService } from '../votedlist.service';
@Component({
  selector: 'app-votedlist',
  templateUrl: './votedlist.component.html',
  styleUrls: ['./votedlist.component.css']
})
export class VotedlistComponent implements OnInit {
  
  constructor(private votedlistservice: VotedlistService,

    private router: Router) { }

  ngOnInit(): void {
  }

}
