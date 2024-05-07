import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MarketPartiesService } from '../../app/api/services';
import { BalanceResponsiblePartyDto } from '../../app/api/models';

@Component({
  selector: 'app-market-parties',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './market-parties.component.html',
  styleUrl: './market-parties.component.css'
})
export class MarketPartiesComponent implements OnInit {

  displayedColumns: string[] = ['brpCode', 'brpName', 'country', 'businessId','codingScheme','validityStart','validityEnd'];
  data: any;
  dataSource!: MatTableDataSource<BalanceResponsiblePartyDto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private api: MarketPartiesService ) { }

  ngOnInit() {
    this.api.exp01BalanceResponsiblePartiesGet$Response().subscribe({
      next: (data) => { 
        this.data = data.body ; 
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
