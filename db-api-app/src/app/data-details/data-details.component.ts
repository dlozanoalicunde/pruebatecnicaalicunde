import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-data-details',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './data-details.component.html',
  styleUrl: './data-details.component.scss',
})
export class DataDetailsComponent {
  @Input() selectedData: any;
}
