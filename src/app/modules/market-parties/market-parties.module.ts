import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@shared/shared.module';
import { MarketPartiesRoutingModule } from './market-parties-routing.module';

// Pages
import { BalanceResponsiblePartiesComponent } from './pages/balance-responsible-parties/balance-responsible-parties.component';

// Services
import { BalanceResponsiblePartiesService } from './services/balance-responsible-parties.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BalanceResponsiblePartiesComponent
  ],
  providers: [
    BalanceResponsiblePartiesService,
    HttpClient,
  ],
  imports: [
    CommonModule,
    SharedModule, 
    MarketPartiesRoutingModule,
    HttpClientModule
  ]
})
export class MarketPartiesModule { }
