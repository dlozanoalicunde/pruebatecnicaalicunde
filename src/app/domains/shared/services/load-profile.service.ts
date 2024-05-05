import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';

import { environment } from '@env/environment';
import { LoadProfile } from '@models/load-profile.model';
import { MbaOptions } from '@models/mba-options.model';


@Injectable({
  providedIn: 'root'
})
export class LoadProfileService {

  private http = inject(HttpClient);
  api = 'EXP18/'

  constructor() { }

  getMba(){
    return this.http.get<MbaOptions[]>(`${environment.API_URL}${this.api}MBAOptions`);
  }

  getAggregate(end: string, mba: string, mga: string, resolution: string, start: string) {
    const url = `${environment.API_URL}${this.api}Aggregate`;
    const params = `?end=${end}&mba=${mba}&mga=${mga}&resolution=${resolution}&start=${start}`;

    return this.http.get<LoadProfile[]>(url + params);
  }
}
