import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { heroArrowDown, heroArrowUp, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { NgxPaginationModule } from 'ngx-pagination';

// Modules
import { SharedModule } from '@shared/shared.module';
import { MarketPartiesRoutingModule } from './market-parties-routing.module';

// Pages
import { BalanceResponsiblePartiesComponent } from './pages/balance-responsible-parties/balance-responsible-parties.component';

// Services
import { BalanceResponsiblePartiesService } from './services/balance-responsible-parties.service';

// Pipes
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BalanceResponsiblePartiesComponent,
    OrderByPipe
  ],
  providers: [
    BalanceResponsiblePartiesService,
    HttpClient,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, 
    MarketPartiesRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ 
      heroArrowDown, 
      heroArrowUp,
      heroMagnifyingGlass
    }),
    NgxPaginationModule,
  ]
})
export class MarketPartiesModule { }
