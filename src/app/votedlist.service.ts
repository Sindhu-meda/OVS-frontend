import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VotedList } from './voted-list';
@Injectable({
  providedIn: 'root'
})
export class VotedlistService {
  private baseURL = 'http://localhost:8082/VotedList/'
  constructor(private httpClient: HttpClient) {}
  getVotedList(): Observable<VotedList[]>{

    return this.httpClient.get<VotedList[]>(`${this.baseURL}` + 'getAll');

  }
  
}
