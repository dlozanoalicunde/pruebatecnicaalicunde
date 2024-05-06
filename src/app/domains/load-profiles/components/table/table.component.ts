import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { LoadProfile } from '@models/load-profile.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSort],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @ViewChild('PaginatorAggregate') paginatorAggregate!: MatPaginator;
  @ViewChild('sortAggregate') sortAggregate!: MatSort;

  @Input() aggregateList!: LoadProfile[];
  public displayedColumns: string[] = ['timestamp', 'timestampUTC', 'mgaCode', 'mgaName', 'mba', 'quantity'];
  public dataSource: MatTableDataSource<LoadProfile> = new MatTableDataSource<LoadProfile>();

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.aggregateList);
    this.dataSource.paginator = this.paginatorAggregate;
    this.dataSource.sort = this.sortAggregate;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginatorAggregate;
    this.dataSource.sort = this.sortAggregate;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.firstPage();
  }

  public firstPage(): void {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
