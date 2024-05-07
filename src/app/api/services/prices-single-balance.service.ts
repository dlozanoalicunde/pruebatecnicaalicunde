/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp14AggregateGet } from '../fn/prices-single-balance/exp-14-aggregate-get';
import { Exp14AggregateGet$Params } from '../fn/prices-single-balance/exp-14-aggregate-get';
import { exp14MbaOptionsGet } from '../fn/prices-single-balance/exp-14-mba-options-get';
import { Exp14MbaOptionsGet$Params } from '../fn/prices-single-balance/exp-14-mba-options-get';
import { exp14PricesGet } from '../fn/prices-single-balance/exp-14-prices-get';
import { Exp14PricesGet$Params } from '../fn/prices-single-balance/exp-14-prices-get';
import { MbaOptionsDto } from '../models/mba-options-dto';
import { SinglebalancePriceDto } from '../models/singlebalance-price-dto';

@Injectable({ providedIn: 'root' })
export class PricesSingleBalanceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp14AggregateGet()` */
  static readonly Exp14AggregateGetPath = '/EXP14/Aggregate';

  /**
   * Get Single Balance Prices per MBA.
   *
   * Returns Single Balance Prices per MBA in CET/CEST.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp14AggregateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp14AggregateGet$Response(params: Exp14AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SinglebalancePriceDto>>> {
    return exp14AggregateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Single Balance Prices per MBA.
   *
   * Returns Single Balance Prices per MBA in CET/CEST.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp14AggregateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp14AggregateGet(params: Exp14AggregateGet$Params, context?: HttpContext): Observable<Array<SinglebalancePriceDto>> {
    return this.exp14AggregateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SinglebalancePriceDto>>): Array<SinglebalancePriceDto> => r.body)
    );
  }

  /** Path part for operation `exp14MbaOptionsGet()` */
  static readonly Exp14MbaOptionsGetPath = '/EXP14/MBAOptions';

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp14MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp14MbaOptionsGet$Response(params?: Exp14MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp14MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp14MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp14MbaOptionsGet(params?: Exp14MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp14MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

  /** Path part for operation `exp14PricesGet()` */
  static readonly Exp14PricesGetPath = '/EXP14/Prices';

  /**
   * Get Single Balance Prices per MBA.
   *
   * Returns Single Balance Prices per MBA in CET/CEST.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp14PricesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp14PricesGet$Response(params: Exp14PricesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SinglebalancePriceDto>>> {
    return exp14PricesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Single Balance Prices per MBA.
   *
   * Returns Single Balance Prices per MBA in CET/CEST.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp14PricesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp14PricesGet(params: Exp14PricesGet$Params, context?: HttpContext): Observable<Array<SinglebalancePriceDto>> {
    return this.exp14PricesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SinglebalancePriceDto>>): Array<SinglebalancePriceDto> => r.body)
    );
  }

}
