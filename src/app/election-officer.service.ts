import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectionOfficers } from './election-officers';


@Injectable({
  providedIn: 'root'
})
export class ElectionOfficerService {

  private baseUrl = "http://localhost:8082/ElectionOfficer/getAll"
  constructor(private httpClient: HttpClient) { }

  getElectionOfficerList(): Observable<ElectionOfficers[]> {

    return this.httpClient.get<ElectionOfficers[]>(`${this.baseUrl}`);

  }

  createElectionOfficer(electionofficers: ElectionOfficers): Observable<Object> {

    return this.httpClient.post("http://localhost:8082/ElectionOfficer/save", electionofficers);

  }
  updateElectionOfficer(electionofficers: ElectionOfficers): Observable<Object> {

    return this.httpClient.put("http://localhost:8082/ElectionOfficer/update",electionofficers);

  }
  getElectionOfficerById(id: number): Observable<ElectionOfficers> {
    //console.log(`${this.baseURL}​​​` + `getById/${id}​​​`);
    return this.httpClient.get<ElectionOfficers>("http://localhost:8082/ElectionOfficer/getById/"+`${id}`​​​);
    
  }
deleteElectionOfficer(id:number):Observable<ElectionOfficers>{
  return this.httpClient.delete<ElectionOfficers>("http://localhost:8082/ElectionOfficer/delete/"+`${id}`);
}
  
}
