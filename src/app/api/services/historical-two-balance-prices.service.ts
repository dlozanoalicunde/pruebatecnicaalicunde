/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp08MbaOptionsGet } from '../fn/historical-two-balance-prices/exp-08-mba-options-get';
import { Exp08MbaOptionsGet$Params } from '../fn/historical-two-balance-prices/exp-08-mba-options-get';
import { exp08PricesGet } from '../fn/historical-two-balance-prices/exp-08-prices-get';
import { Exp08PricesGet$Params } from '../fn/historical-two-balance-prices/exp-08-prices-get';
import { MbaOptionsDto } from '../models/mba-options-dto';
import { TwobalancePriceDto } from '../models/twobalance-price-dto';

@Injectable({ providedIn: 'root' })
export class HistoricalTwoBalancePricesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp08MbaOptionsGet()` */
  static readonly Exp08MbaOptionsGetPath = '/EXP08/MBAOptions';

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp08MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp08MbaOptionsGet$Response(params?: Exp08MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp08MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp08MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp08MbaOptionsGet(params?: Exp08MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp08MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

  /** Path part for operation `exp08PricesGet()` */
  static readonly Exp08PricesGetPath = '/EXP08/Prices';

  /**
   * Get Historical Two Balance Prices per MBA.
   *
   * Returns Historical Two Balance Prices per MBA.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp08PricesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp08PricesGet$Response(params: Exp08PricesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TwobalancePriceDto>>> {
    return exp08PricesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Historical Two Balance Prices per MBA.
   *
   * Returns Historical Two Balance Prices per MBA.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp08PricesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp08PricesGet(params: Exp08PricesGet$Params, context?: HttpContext): Observable<Array<TwobalancePriceDto>> {
    return this.exp08PricesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TwobalancePriceDto>>): Array<TwobalancePriceDto> => r.body)
    );
  }

}
