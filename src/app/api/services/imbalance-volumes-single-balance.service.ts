/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp13AggregateGet } from '../fn/imbalance-volumes-single-balance/exp-13-aggregate-get';
import { Exp13AggregateGet$Params } from '../fn/imbalance-volumes-single-balance/exp-13-aggregate-get';
import { exp13ImbalancePowerVolumeGet } from '../fn/imbalance-volumes-single-balance/exp-13-imbalance-power-volume-get';
import { Exp13ImbalancePowerVolumeGet$Params } from '../fn/imbalance-volumes-single-balance/exp-13-imbalance-power-volume-get';
import { exp13MbaOptionsGet } from '../fn/imbalance-volumes-single-balance/exp-13-mba-options-get';
import { Exp13MbaOptionsGet$Params } from '../fn/imbalance-volumes-single-balance/exp-13-mba-options-get';
import { ImbalanceVolumeDto } from '../models/imbalance-volume-dto';
import { MbaOptionsDto } from '../models/mba-options-dto';

@Injectable({ providedIn: 'root' })
export class ImbalanceVolumesSingleBalanceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp13AggregateGet()` */
  static readonly Exp13AggregateGetPath = '/EXP13/Aggregate';

  /**
   * Get Imbalance Volumes per MBA.
   *
   * Returns Imbalance Volumes per MBA in CET/CEST, with selected time aggregations: hour, day, week, month, year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp13AggregateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp13AggregateGet$Response(params: Exp13AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return exp13AggregateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Imbalance Volumes per MBA.
   *
   * Returns Imbalance Volumes per MBA in CET/CEST, with selected time aggregations: hour, day, week, month, year
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp13AggregateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp13AggregateGet(params: Exp13AggregateGet$Params, context?: HttpContext): Observable<void> {
    return this.exp13AggregateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `exp13ImbalancePowerVolumeGet()` */
  static readonly Exp13ImbalancePowerVolumeGetPath = '/EXP13/ImbalancePowerVolume';

  /**
   * Get Imbalance Volumes per MBA.
   *
   * Returns Imbalance Volumes per MBA in CET/CEST.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp13ImbalancePowerVolumeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp13ImbalancePowerVolumeGet$Response(params: Exp13ImbalancePowerVolumeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ImbalanceVolumeDto>>> {
    return exp13ImbalancePowerVolumeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Imbalance Volumes per MBA.
   *
   * Returns Imbalance Volumes per MBA in CET/CEST.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp13ImbalancePowerVolumeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp13ImbalancePowerVolumeGet(params: Exp13ImbalancePowerVolumeGet$Params, context?: HttpContext): Observable<Array<ImbalanceVolumeDto>> {
    return this.exp13ImbalancePowerVolumeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ImbalanceVolumeDto>>): Array<ImbalanceVolumeDto> => r.body)
    );
  }

  /** Path part for operation `exp13MbaOptionsGet()` */
  static readonly Exp13MbaOptionsGetPath = '/EXP13/MBAOptions';

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp13MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp13MbaOptionsGet$Response(params?: Exp13MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp13MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp13MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp13MbaOptionsGet(params?: Exp13MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp13MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

}
