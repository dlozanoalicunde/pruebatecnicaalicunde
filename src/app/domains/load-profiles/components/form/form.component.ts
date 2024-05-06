import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mba } from '@models/mba.model';
import { LoadProfile } from '@models/load-profile.model';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormBuilder, FormControl, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterOptionsPipe } from '@shared/pipes/filter-options.pipe';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, FilterOptionsPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Input() mbaOptions: Mba[] = [];
  @Input() loadProfiles: LoadProfile[] = [];
  @Input({required: true}) selectResolution!: string;
  @Output() formChange: EventEmitter<any> = new EventEmitter(); 

  profileForm: FormGroup;
  selectedOption: string | undefined;
  searchQuery: string = '';
  selectedMba: string = '';
  resolutions = [
    {value: 'year', viewValue: 'Year'},
    {value: 'month', viewValue: 'Month'},
    {value: 'week', viewValue: 'Week'},
    {value: 'hour', viewValue: 'Hour'},
  ];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      mba: [this.mbaOptions.length > 0 ? this.mbaOptions[0].code : '', Validators.required],
      start: [new Date().toISOString(), Validators.required],
      end: [new Date().toISOString(), Validators.required],
      resolution: ['month', Validators.required],
      searchQuery: [''] 
    });

    // form listening
    this.profileForm.valueChanges.subscribe(value => {
      if (this.profileForm.valid) {
        this.emitFormValue();
      }
    });
  }

  ngAfterViewInit(): void {
    this.emitFormValue();
  }

  private emitFormValue() {
    const formData = {
      mba: this.profileForm.value.mba,
      start: this.profileForm.value.start,
      end: this.profileForm.value.end,
      resolution: this.profileForm.value.resolution
    };
    this.formChange.emit(formData);
  }

  // select mba firt position for defautl
  private selectFirstMbaOption() {
    if (this.mbaOptions.length > 0) {
      this.selectedMba = this.mbaOptions[0].code;
      this.profileForm.patchValue({ mba: this.selectedMba });
    }
  }

  selectionChange(event: any) {
    const newResolution = event.value.toString();
    this.profileForm.patchValue({ resolution: newResolution });
  }

}
