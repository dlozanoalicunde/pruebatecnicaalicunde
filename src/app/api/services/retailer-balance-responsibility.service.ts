/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp04MbaOptionsGet } from '../fn/retailer-balance-responsibility/exp-04-mba-options-get';
import { Exp04MbaOptionsGet$Params } from '../fn/retailer-balance-responsibility/exp-04-mba-options-get';
import { exp04RetailerBalanceResponsibilityGet } from '../fn/retailer-balance-responsibility/exp-04-retailer-balance-responsibility-get';
import { Exp04RetailerBalanceResponsibilityGet$Params } from '../fn/retailer-balance-responsibility/exp-04-retailer-balance-responsibility-get';
import { MbaOptionsDto } from '../models/mba-options-dto';
import { RetailerBalanceResponsibilityDto } from '../models/retailer-balance-responsibility-dto';

@Injectable({ providedIn: 'root' })
export class RetailerBalanceResponsibilityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp04MbaOptionsGet()` */
  static readonly Exp04MbaOptionsGetPath = '/EXP04/MBAOptions';

  /**
   * Get Available MBAs for Retailer Balance Responsibility.
   *
   * Returns available MBAs that can be used to query Retailer Balance Responsibilities
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp04MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp04MbaOptionsGet$Response(params?: Exp04MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp04MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Retailer Balance Responsibility.
   *
   * Returns available MBAs that can be used to query Retailer Balance Responsibilities
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp04MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp04MbaOptionsGet(params?: Exp04MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp04MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

  /** Path part for operation `exp04RetailerBalanceResponsibilityGet()` */
  static readonly Exp04RetailerBalanceResponsibilityGetPath = '/EXP04/RetailerBalanceResponsibility';

  /**
   * Get Retailer Balance Responsibilities.
   *
   * Returns Retailer Balance Responsibilities, the results are limited to 10000 rows
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp04RetailerBalanceResponsibilityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp04RetailerBalanceResponsibilityGet$Response(params: Exp04RetailerBalanceResponsibilityGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RetailerBalanceResponsibilityDto>>> {
    return exp04RetailerBalanceResponsibilityGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Retailer Balance Responsibilities.
   *
   * Returns Retailer Balance Responsibilities, the results are limited to 10000 rows
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp04RetailerBalanceResponsibilityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp04RetailerBalanceResponsibilityGet(params: Exp04RetailerBalanceResponsibilityGet$Params, context?: HttpContext): Observable<Array<RetailerBalanceResponsibilityDto>> {
    return this.exp04RetailerBalanceResponsibilityGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RetailerBalanceResponsibilityDto>>): Array<RetailerBalanceResponsibilityDto> => r.body)
    );
  }

}
