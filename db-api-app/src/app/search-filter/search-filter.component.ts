import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterService } from '../services/filter-service/filter.service';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() filters: any;

  filteredData: any[] = [];

  constructor(private filterService: FilterService) {}

  setSearchValue(event: KeyboardEvent): void {
    let valueToSearch = (event.target as HTMLInputElement).value;
    valueToSearch = valueToSearch.trim();
    valueToSearch = valueToSearch.toLowerCase();

    this.filterService.setSearchData(valueToSearch);
  }

  filterBy(event: any, filter: string): void {
    this.filters[filter].checked = !this.filters[filter].checked;
    this.filters[filter].value = !event.checked && '';
  }

  saveFilterValue(event: KeyboardEvent, filter: string) {
    let valueToSearch = (event.target as HTMLInputElement).value;
    valueToSearch = valueToSearch.trim();
    valueToSearch = valueToSearch.toLowerCase();

    if (valueToSearch !== '' && this.filters[filter].checked) {
      this.filters[filter].value = valueToSearch;
    }
  }

  setFilteredData(): void {
    this.filteredData = [...this.data];

    for (let key in this.filters) {
      if (this.filters[key].checked) {
        this.filteredData = this.filteredData.filter((dataRow) =>
          dataRow[key as keyof any]
            .toLowerCase()
            .includes(this.filters[key].value)
        );
      }
    }

    this.filterService.setFilteredData(this.filteredData);
  }
}
