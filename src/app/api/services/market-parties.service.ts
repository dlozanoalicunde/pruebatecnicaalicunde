/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BalanceResponsiblePartyDto } from '../models/balance-responsible-party-dto';
import { BalanceServiceProviderDto } from '../models/balance-service-provider-dto';
import { DistributionSystemOperatorDto } from '../models/distribution-system-operator-dto';
import { exp01BalanceResponsiblePartiesGet } from '../fn/market-parties/exp-01-balance-responsible-parties-get';
import { Exp01BalanceResponsiblePartiesGet$Params } from '../fn/market-parties/exp-01-balance-responsible-parties-get';
import { exp01BalanceServiceProvidersGet } from '../fn/market-parties/exp-01-balance-service-providers-get';
import { Exp01BalanceServiceProvidersGet$Params } from '../fn/market-parties/exp-01-balance-service-providers-get';
import { exp01DistributionSystemOperatorsGet } from '../fn/market-parties/exp-01-distribution-system-operators-get';
import { Exp01DistributionSystemOperatorsGet$Params } from '../fn/market-parties/exp-01-distribution-system-operators-get';
import { exp01RetailersGet } from '../fn/market-parties/exp-01-retailers-get';
import { Exp01RetailersGet$Params } from '../fn/market-parties/exp-01-retailers-get';
import { RetailerDto } from '../models/retailer-dto';

@Injectable({ providedIn: 'root' })
export class MarketPartiesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp01BalanceResponsiblePartiesGet()` */
  static readonly Exp01BalanceResponsiblePartiesGetPath = '/EXP01/BalanceResponsibleParties';

  /**
   * Get Balance Responsible Parties.
   *
   * Returns list of BRPs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp01BalanceResponsiblePartiesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01BalanceResponsiblePartiesGet$Response(params?: Exp01BalanceResponsiblePartiesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BalanceResponsiblePartyDto>>> {
    return exp01BalanceResponsiblePartiesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Balance Responsible Parties.
   *
   * Returns list of BRPs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp01BalanceResponsiblePartiesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01BalanceResponsiblePartiesGet(params?: Exp01BalanceResponsiblePartiesGet$Params, context?: HttpContext): Observable<Array<BalanceResponsiblePartyDto>> {
    return this.exp01BalanceResponsiblePartiesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<BalanceResponsiblePartyDto>>): Array<BalanceResponsiblePartyDto> => r.body)
    );
  }

  /** Path part for operation `exp01BalanceServiceProvidersGet()` */
  static readonly Exp01BalanceServiceProvidersGetPath = '/EXP01/BalanceServiceProviders';

  /**
   * Get Balancing Service Providers.
   *
   * Returns list of BSPs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp01BalanceServiceProvidersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01BalanceServiceProvidersGet$Response(params?: Exp01BalanceServiceProvidersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BalanceServiceProviderDto>>> {
    return exp01BalanceServiceProvidersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Balancing Service Providers.
   *
   * Returns list of BSPs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp01BalanceServiceProvidersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01BalanceServiceProvidersGet(params?: Exp01BalanceServiceProvidersGet$Params, context?: HttpContext): Observable<Array<BalanceServiceProviderDto>> {
    return this.exp01BalanceServiceProvidersGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<BalanceServiceProviderDto>>): Array<BalanceServiceProviderDto> => r.body)
    );
  }

  /** Path part for operation `exp01DistributionSystemOperatorsGet()` */
  static readonly Exp01DistributionSystemOperatorsGetPath = '/EXP01/DistributionSystemOperators';

  /**
   * Get Distribution System Operators.
   *
   * Returns list of DSOs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp01DistributionSystemOperatorsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01DistributionSystemOperatorsGet$Response(params?: Exp01DistributionSystemOperatorsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DistributionSystemOperatorDto>>> {
    return exp01DistributionSystemOperatorsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Distribution System Operators.
   *
   * Returns list of DSOs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp01DistributionSystemOperatorsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01DistributionSystemOperatorsGet(params?: Exp01DistributionSystemOperatorsGet$Params, context?: HttpContext): Observable<Array<DistributionSystemOperatorDto>> {
    return this.exp01DistributionSystemOperatorsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DistributionSystemOperatorDto>>): Array<DistributionSystemOperatorDto> => r.body)
    );
  }

  /** Path part for operation `exp01RetailersGet()` */
  static readonly Exp01RetailersGetPath = '/EXP01/Retailers';

  /**
   * Get Retailers.
   *
   * Returns list of Retailers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp01RetailersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01RetailersGet$Response(params?: Exp01RetailersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RetailerDto>>> {
    return exp01RetailersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Retailers.
   *
   * Returns list of Retailers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp01RetailersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp01RetailersGet(params?: Exp01RetailersGet$Params, context?: HttpContext): Observable<Array<RetailerDto>> {
    return this.exp01RetailersGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RetailerDto>>): Array<RetailerDto> => r.body)
    );
  }

}
