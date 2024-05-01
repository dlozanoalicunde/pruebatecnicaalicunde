import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@shared/shared.module';
import { MarketPartiesRoutingModule } from './market-parties-routing.module';

// Pages
import { BalanceResponsiblePartiesComponent } from './pages/balance-responsible-parties/balance-responsible-parties.component';

@NgModule({
  declarations: [
    BalanceResponsiblePartiesComponent
  ],
  imports: [
    SharedModule, 
    MarketPartiesRoutingModule,
  ]
})
export class MarketPartiesModule { }
