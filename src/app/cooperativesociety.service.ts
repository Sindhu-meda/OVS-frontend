import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CooperativeSociety } from './cooperative-society';

@Injectable({
  providedIn: 'root'
})
export class CooperativesocietyService {
  private baseURL = 'http://localhost:8082/CooperativeSociety/';

  constructor(private httpClient: HttpClient) { }

  createCooperativeSociety(cooperativesociety: CooperativeSociety): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + `save`, cooperativesociety);
  }
  
}
