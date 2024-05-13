import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private dataSearchSubject: ReplaySubject<string> = new ReplaySubject<string>(
    1
  );
  private filteredDataSubject: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  setSearchData(data: string): void {
    this.dataSearchSubject.next(data);
  }

  getSearchData$(): Observable<string> {
    return this.dataSearchSubject.asObservable();
  }

  setFilteredData(filteredData: any[]): void {
    this.filteredDataSubject.next(filteredData);
  }

  getFilteredData$(): Observable<any[]> {
    return this.filteredDataSubject.asObservable();
  }
}
