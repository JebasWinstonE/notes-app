import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Fact } from '../models/fact.model';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private http: HttpClient) { }

  header = new HttpHeaders().set('X-Api-Key', 'CLVkeSLFEU5XfcID/9dlOA==LNSpyNErpECEjn79')
  getFact(): Observable<Fact[]> {
    // console.log(this.http.get<Fact[]>('https://api.api-ninjas.com/v1/facts?limit=1', { headers: this.header }));

    return this.http.get<Fact[]>('https://api.api-ninjas.com/v1/facts?limit=1', { headers: this.header });
  }
}

