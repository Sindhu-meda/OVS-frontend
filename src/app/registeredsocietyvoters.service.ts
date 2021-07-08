import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registeredsocietyvoters } from './registeredsocietyvoters';

@Injectable({
  providedIn: 'root'
})
export class RegisteredsocietyvotersService {
  private baseURL = 'http://localhost:8082/RegisteredSocietyVoter/'

  constructor(private httpClient: HttpClient) { }

  createRegisteredSocietyVoters(registeredsocietyvoters: Registeredsocietyvoters): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + `save`, registeredsocietyvoters);
  }
  
}
