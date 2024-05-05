import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core';
import { Mba } from '@models/mba.model';
import { LoadProfile } from '@models/load-profile.model';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterOptionsPipe } from '@shared/pipes/filter-options.pipe';
import { Resolution } from '@models/resolution.model';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-load-profile',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, FilterOptionsPipe],
  templateUrl: './load-profile.component.html',
  styleUrl: './load-profile.component.scss'
})
export class LoadProfileComponent {

  @Input() mbaOptions: Mba[] = [];
  @Input() loadProfiles: LoadProfile[] = [];
  @Input({required: true}) selectResolution!: string;

  selectedOption: string | undefined;
  searchQuery: string = '';
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  resolutions = [
    {value: 'year', viewValue: 'Year'},
    {value: 'month', viewValue: 'Month'},
    {value: 'week', viewValue: 'Week'},
    {value: 'hour', viewValue: 'Hour'},
  ];

  selectionChange(e: any) {
    const newResolution = e.value.toString();
    // selectResolution.set(newResolution);
    // this.resolutionSignal.set(newResolution);
    // this.getAggregate();
  }

}
