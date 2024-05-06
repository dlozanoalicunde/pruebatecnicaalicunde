import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { environment } from '@env/environment';
import { LoadProfile } from '@models/load-profile.model';
import { MbaOptions } from '@models/mba-options.model';


@Injectable({
  providedIn: 'root'
})
export class LoadProfileService {

  private http = inject(HttpClient);
  api = 'EXP18/'

  getMba(): Observable<MbaOptions[]>{
    return this.http.get<MbaOptions[]>(`${environment.API_URL}${this.api}MBAOptions`)
    .pipe(catchError(this.handleError<MbaOptions[]>('MbaOptios', [])));
  }

  getAggregate(end: string, mba: string, mga: string, resolution: string, start: string): Observable<LoadProfile[]>  {
    const url = `${environment.API_URL}${this.api}Aggregate`;
    const params = `?end=${end}&mba=${mba}&mga=${mga}&resolution=${resolution}&start=${start}`;

    return this.http.get<LoadProfile[]>(url + params)
    .pipe(catchError(this.handleError<LoadProfile[]>('LoadProfile', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
