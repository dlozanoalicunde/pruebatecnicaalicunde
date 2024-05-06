import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { LoadProfileService } from '@shared/services/load-profile.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MbaOptions } from '@models/mba-options.model';
import { Mba } from '@models/mba.model';
import { LoadProfile } from '@models/load-profile.model';

import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Resolution } from '@models/resolution.model';
import { FilterOptionsPipe } from '@shared/pipes/filter-options.pipe';
import { FormComponent } from '../../components/form/form.component';
import {TableComponent} from '../../components/table/table.component';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, FormsModule,
    ReactiveFormsModule, FilterOptionsPipe, TableComponent, FormComponent] ,
  templateUrl: './load-profile.page.html',
  styleUrl: './load-profile.page.scss'
})
export default class LoadProfilePage {

  @ViewChild("changeEl") el!: ElementRef;

  private loadProfileService = inject(LoadProfileService);
  respMbaOption = signal<MbaOptions[]>([]);
  respMbaList = signal<Mba[]>([]);
  respLoadProfile = signal<LoadProfile[]>([]);
  resolutions: Resolution[] = [
    {value: 'year', viewValue: 'Year'},
    {value: 'month', viewValue: 'Month'},
    {value: 'week', viewValue: 'Week'},
    {value: 'hour', viewValue: 'Hour'},
  ];
  selectedOption: string | undefined;
  searchQuery: string = '';
  resolution: string = 'month';
  resolutionSignal = signal<string>('month');
  selectedMba:any;

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });


  ngAfterViewInit(): void {
    this.resolutionSignal.set(this.resolutions[1].value);

    setTimeout(() => {
      this.getAggregate();
    });
  }
  ngOnInit(): void {
    this.resolutionSignal.set(this.resolutions[1].value);

    this.getMbaOptions();
  }

  private getAggregate() {
    const start = this.campaignOne?.get('start')?.value;
    const end = this.campaignOne?.get('end')?.value;
    console.log('ingreso getAggregate end: ',end,);

    const mba = '10Y1001A1001A44P';
    const mga = 'ALS';

    if (start && end) {
      this.loadProfileService.getAggregate(end.toISOString(), 'string', 'ALS', this.resolutionSignal(), end.toISOString()).subscribe({
        next: (aggregate) => {
          console.log("aggregate ", aggregate);
          this.respLoadProfile.set(aggregate);
        },
        error: () => {

        }
      });

    } else {
      console.log('no ingreso');
    }
  }

  private getMbaOptions() {
    this.loadProfileService.getMba().subscribe({
      next: (mbaOptions) => {
        console.log(mbaOptions);
        this.respMbaOption.set(mbaOptions);
        if (mbaOptions[0].mbas.length > 0) {
          this.respMbaList.set(mbaOptions[0].mbas)
        }

      },
      error: () => {

      }
    });
  }

  selectionChange(e: any) {
    const newResolution = e.value.toString();
    this.resolutionSignal.set(newResolution);
    this.getAggregate();
  }

}
