/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { MarketPartiesService } from './services/market-parties.service';
import { MeteringGridAreasService } from './services/metering-grid-areas.service';
import { RetailerBalanceResponsibilityService } from './services/retailer-balance-responsibility.service';
import { FeesService } from './services/fees.service';
import { SettlementBanksService } from './services/settlement-banks.service';
import { HistoricalTwoBalancePricesService } from './services/historical-two-balance-prices.service';
import { HistoricalTwoBalanceVolumesService } from './services/historical-two-balance-volumes.service';
import { ImbalanceVolumesSingleBalanceService } from './services/imbalance-volumes-single-balance.service';
import { PricesSingleBalanceService } from './services/prices-single-balance.service';
import { ConsumptionService } from './services/consumption.service';
import { ProductionService } from './services/production.service';
import { ReconciliationPricesService } from './services/reconciliation-prices.service';
import { LoadProfileService } from './services/load-profile.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    MarketPartiesService,
    MeteringGridAreasService,
    RetailerBalanceResponsibilityService,
    FeesService,
    SettlementBanksService,
    HistoricalTwoBalancePricesService,
    HistoricalTwoBalanceVolumesService,
    ImbalanceVolumesSingleBalanceService,
    PricesSingleBalanceService,
    ConsumptionService,
    ProductionService,
    ReconciliationPricesService,
    LoadProfileService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
