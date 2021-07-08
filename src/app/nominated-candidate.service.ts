import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NominatedCandidate } from './nominated-candidate';

@Injectable({
  providedIn: 'root'
})
export class NominatedCandidateService {
  private baseUrl = "http://localhost:8082/NominatedCandidate/getAll"
  constructor(private httpClient: HttpClient) { }
  
  getNominatedCandidateList(): Observable<NominatedCandidate[]> {

    return this.httpClient.get<NominatedCandidate[]>(`${this.baseUrl}`);

  }
  createNominatedCandidate(nominatedCandidate: NominatedCandidate): Observable<Object> {

    return this.httpClient.post("http://localhost:8082/NominatedCandidate/save", nominatedCandidate);
}
updateNominatedCandidate(nominatedCandidate: NominatedCandidate): Observable<Object> {

  return this.httpClient.put("http://localhost:8082/NominatedCandidate/update",nominatedCandidate);

}
getNominatedCandidateById(id: number): Observable<NominatedCandidate> {
  //console.log(`${this.baseURL}​​​` + `getById/${id}​​​`);
  return this.httpClient.get<NominatedCandidate>("http://localhost:8082/NominatedCandidate/getById/"+`${id}`​​​);
  
}
deleteNominatedCandidate(id:number):Observable<NominatedCandidate>{
return this.httpClient.delete<NominatedCandidate>("http://localhost:8082/NominatedCandidate/delete/"+`${id}`);
}

}
