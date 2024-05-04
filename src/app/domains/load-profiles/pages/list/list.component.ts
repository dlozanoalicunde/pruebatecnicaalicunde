import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LoadProfileService } from '@shared/services/load-profile.service';
import {MatSelectModule} from '@angular/material/select';
import { MbaOptions } from '@models/mba-options.model';
import { Mba } from '@models/mba.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent {

  respMbaOption = signal<MbaOptions[]>([]);
  respMbaList = signal<Mba[]>([]);
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
        this.respMbaOption.set(mbaOptions);
        if(mbaOptions[0].mbas.length > 0){
          this.respMbaList.set(mbaOptions[0].mbas);
        }

      },
      error: () => {

      }
    })
  }
}
