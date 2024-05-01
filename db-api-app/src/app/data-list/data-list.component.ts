import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Retailer } from '../model/Retailer';
import { DbDataApiService } from '../services/db-data-api/db-data-api.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class DataListComponent implements OnInit, AfterViewInit {
  retailers: Retailer[] = [];
  columns: string[] = ['code', 'name', 'country', 'scheme'];
  dataSource = new MatTableDataSource<Retailer>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dbDataApiService: DbDataApiService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  applyFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
