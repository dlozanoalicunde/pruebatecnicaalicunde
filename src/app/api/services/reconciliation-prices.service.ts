/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp17MbaOptionsGet } from '../fn/reconciliation-prices/exp-17-mba-options-get';
import { Exp17MbaOptionsGet$Params } from '../fn/reconciliation-prices/exp-17-mba-options-get';
import { exp17ReconciliationPricesGet } from '../fn/reconciliation-prices/exp-17-reconciliation-prices-get';
import { Exp17ReconciliationPricesGet$Params } from '../fn/reconciliation-prices/exp-17-reconciliation-prices-get';
import { MbaOptionsDto } from '../models/mba-options-dto';
import { ReconciliationPriceDto } from '../models/reconciliation-price-dto';

@Injectable({ providedIn: 'root' })
export class ReconciliationPricesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp17MbaOptionsGet()` */
  static readonly Exp17MbaOptionsGetPath = '/EXP17/MBAOptions';

  /**
   * Get Available MBAs for Reconciliation Prices.
   *
   * Returns available MBAs that can be used to query Reconciliation Prices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp17MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp17MbaOptionsGet$Response(params?: Exp17MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp17MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Reconciliation Prices.
   *
   * Returns available MBAs that can be used to query Reconciliation Prices
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp17MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp17MbaOptionsGet(params?: Exp17MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp17MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

  /** Path part for operation `exp17ReconciliationPricesGet()` */
  static readonly Exp17ReconciliationPricesGetPath = '/EXP17/ReconciliationPrices';

  /**
   * Get Reconciliation Prices per MBA.
   *
   * Returns Reconciliation Prices per MBA in SNT Time Zone.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp17ReconciliationPricesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp17ReconciliationPricesGet$Response(params: Exp17ReconciliationPricesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReconciliationPriceDto>>> {
    return exp17ReconciliationPricesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Reconciliation Prices per MBA.
   *
   * Returns Reconciliation Prices per MBA in SNT Time Zone.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp17ReconciliationPricesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp17ReconciliationPricesGet(params: Exp17ReconciliationPricesGet$Params, context?: HttpContext): Observable<Array<ReconciliationPriceDto>> {
    return this.exp17ReconciliationPricesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReconciliationPriceDto>>): Array<ReconciliationPriceDto> => r.body)
    );
  }

}
