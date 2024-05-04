import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadProfileService } from '@shared/services/load-profile.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent {

  private loadProfileService = inject(LoadProfileService);

  ngOnInit(): void {
    this.getMbaOptions();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  private getMbaOptions(){
    this.loadProfileService.getMba().subscribe({
      next: (mbaOptions) => {
        console.log(mbaOptions);
      },
      error: () => {

      }
    })
  }
}
