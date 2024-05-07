import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketPartiesService } from './api/services';
import { BalanceResponsiblePartyDto } from './api/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-alicunde';
}
