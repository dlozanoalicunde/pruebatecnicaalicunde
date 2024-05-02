import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Retailer } from '../model/Retailer';
import { DbDataApiService } from '../services/db-data-api/db-data-api.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { DataDetailsComponent } from '../data-details/data-details.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { FilterService } from '../services/filter-service/filter.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    DataDetailsComponent,
    SearchFilterComponent,
  ],
})
export class DataListComponent implements OnInit, AfterViewInit {
  private unsubscribe = new Subject<void>();

  retailers: Retailer[] = [];
  filteredRetailers: Retailer[] = [];
  selectedRetailer: any;
  columns: string[] = ['code', 'name', 'country', 'scheme'];
  dataSource = new MatTableDataSource<Retailer>();
  filters: any = {
    code: { checked: false, value: '' },
    name: { checked: false, value: '' },
    country: { checked: false, value: '' },
    scheme: { checked: false, value: '' },
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dbDataApiService: DbDataApiService,
    private _liveAnnouncer: LiveAnnouncer,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.fetchData();

    this.filterService
      .getSearchData$()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.dataSource.filter = data;
      });
    this.filterService
      .getFilteredData$()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((filteredData) => {
        this.dataSource.data = filteredData;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  fetchData(): void {
    this.dbDataApiService.getRetailers().subscribe((data) => {
      data.forEach((row) => {
        this.retailers.push(
          new Retailer(row.reName, row.country, row.codingScheme, row.reCode)
        );
      });
      this.dataSource.data = this.retailers;
    });
  }

  // From Angular-material doc
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onRowClicked(row: any) {
    this.selectedRetailer = row;
  }
}
