import { Component, OnInit } from '@angular/core';
import { Retailer } from '../model/Retailer';
import { DbDataApiService } from '../services/db-data-api/db-data-api.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  standalone: true,
})
export class DataListComponent implements OnInit {
  retailers: Retailer[] = [];

  constructor(private dbDataApiService: DbDataApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dbDataApiService.getRetailers().subscribe((data) => {
      data.forEach((row) => {
        this.retailers.push(
          new Retailer(row.reName, row.country, row.codingScheme, row.reCode)
        );
      });
    });
  }
}
