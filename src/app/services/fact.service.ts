import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fact } from '../models/fact.model';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private http: HttpClient) { }

  // head = {
  //   'X-Api-Key': 'CLVkeSLFEU5XfcID/9dlOA==LNSpyNErpECEjn79',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
  // }

  header = new HttpHeaders()
    .set('X-Api-Key', 'CLVkeSLFEU5XfcID/9dlOA==LNSpyNErpECEjn79')

  getFact(): Observable<Fact[]> {
    return this.http.get<Fact[]>('https://api.api-ninjas.com/v1/facts?limit=1', { headers: this.header });
  }
}