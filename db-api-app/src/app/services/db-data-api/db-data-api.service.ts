import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from '../../model/Retailer';
import { RetailerDTO } from '../../model/RetailerDTO';

@Injectable({
  providedIn: 'root',
})
export class DbDataApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getRetailers(): Observable<RetailerDTO[]> {
    return this.http.get<RetailerDTO[]>(this.apiUrl);
  }
}
