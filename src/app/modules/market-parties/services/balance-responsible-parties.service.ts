import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { ResponsiblePartiesInterface } from '../interfaces/ResponsibleParties.interface';

@Injectable({
  providedIn: 'root'
})
export class BalanceResponsiblePartiesService {

  ENDPOINT = 'EXP01/BalanceResponsibleParties';
  constructor(private http: HttpClient) { }

  getResponsibleParties(): Observable<ResponsiblePartiesInterface[]>{
    return this.http.get<ResponsiblePartiesInterface[]>(`${environment.API_URL}${this.ENDPOINT}`);
  }
}
