import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '@env/environment';
import { MbaOptions } from '@models/mba-options.model';


@Injectable({
  providedIn: 'root'
})
export class LoadProfileService {

  private http = inject(HttpClient);
  api = 'EXP18/MBAOptions'

  constructor() { }

  getMba(){
    return this.http.get<MbaOptions[]>(`${environment.API_URL}${this.api}`);
  }
}
