/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AggregatedConsumptionDto } from '../models/aggregated-consumption-dto';
import { exp15AggregateGet } from '../fn/consumption/exp-15-aggregate-get';
import { Exp15AggregateGet$Params } from '../fn/consumption/exp-15-aggregate-get';
import { exp15ConsumptionGet } from '../fn/consumption/exp-15-consumption-get';
import { Exp15ConsumptionGet$Params } from '../fn/consumption/exp-15-consumption-get';
import { exp15MbaOptionsGet } from '../fn/consumption/exp-15-mba-options-get';
import { Exp15MbaOptionsGet$Params } from '../fn/consumption/exp-15-mba-options-get';
import { MbaOptionsDto } from '../models/mba-options-dto';

@Injectable({ providedIn: 'root' })
export class ConsumptionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp15AggregateGet()` */
  static readonly Exp15AggregateGetPath = '/EXP15/Aggregate';

  /**
   * Get Aggregated Consumption per Measurement Type.
   *
   * Return Consumption per Measurement Type aggregated in CET/CEST, different time aggregations available: hour, day, week, month, year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp15AggregateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp15AggregateGet$Response(params: Exp15AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AggregatedConsumptionDto>>> {
    return exp15AggregateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Aggregated Consumption per Measurement Type.
   *
   * Return Consumption per Measurement Type aggregated in CET/CEST, different time aggregations available: hour, day, week, month, year
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp15AggregateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp15AggregateGet(params: Exp15AggregateGet$Params, context?: HttpContext): Observable<Array<AggregatedConsumptionDto>> {
    return this.exp15AggregateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AggregatedConsumptionDto>>): Array<AggregatedConsumptionDto> => r.body)
    );
  }

  /** Path part for operation `exp15ConsumptionGet()` */
  static readonly Exp15ConsumptionGetPath = '/EXP15/Consumption';

  /**
   * Get Aggregated Consumption per Measurement Type.
   *
   * Returns Aggregated Consumption per Measurement Type in CET/CEST.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp15ConsumptionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp15ConsumptionGet$Response(params: Exp15ConsumptionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AggregatedConsumptionDto>>> {
    return exp15ConsumptionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Aggregated Consumption per Measurement Type.
   *
   * Returns Aggregated Consumption per Measurement Type in CET/CEST.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp15ConsumptionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp15ConsumptionGet(params: Exp15ConsumptionGet$Params, context?: HttpContext): Observable<Array<AggregatedConsumptionDto>> {
    return this.exp15ConsumptionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AggregatedConsumptionDto>>): Array<AggregatedConsumptionDto> => r.body)
    );
  }

  /** Path part for operation `exp15MbaOptionsGet()` */
  static readonly Exp15MbaOptionsGetPath = '/EXP15/MBAOptions';

  /**
   * Get Available MBAs for Aggregated Consumption Volumes.
   *
   * Returns available MBAs that can be used to query Aggregated Consumption Volumes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp15MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp15MbaOptionsGet$Response(params?: Exp15MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp15MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Aggregated Consumption Volumes.
   *
   * Returns available MBAs that can be used to query Aggregated Consumption Volumes
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp15MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp15MbaOptionsGet(params?: Exp15MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp15MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

}
