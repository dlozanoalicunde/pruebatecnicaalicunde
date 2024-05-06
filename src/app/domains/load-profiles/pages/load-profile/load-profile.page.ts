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
  @ViewChild(FormComponent) formComponent!: FormComponent; // Obtener una referencia al componente FormComponent

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

  ngAfterViewInit(): void {
    this.resolutionSignal.set(this.resolutions[1].value);
    // subscribe formChange then formComponent is init
    this.formComponent.formChange.subscribe((formData: any) => {
      // new data handle
      this.handleFormChange(formData);
    });
  }

  ngOnInit(): void {
    this.resolutionSignal.set(this.resolutions[1].value);
    this.getMbaOptions();
  }

  private getMbaOptions() {
    this.loadProfileService.getMba().subscribe({
      next: (mbaOptions) => {
        this.respMbaOption.set(mbaOptions);
        if (mbaOptions[0].mbas.length > 0) {
          this.respMbaList.set(mbaOptions[0].mbas)
        }
      },
      error: (error) => {
        console.error('Error fetching MBA options:', error);
      }
    });
  }

  // handledformchange form data (output)
  handleFormChange(formData: any) {
    const { mba, start, end, resolution } = formData;
    
    if (start && end) {
      this.loadProfileService.getAggregate(end, mba, 'ALS', resolution, end).subscribe({
        next: (aggregate) => {
          this.respLoadProfile.set(aggregate);
        },
        error: (error) => {
          console.error('Error fetching Aggregate options:', error);
        }
      });

    } 
  }

}
