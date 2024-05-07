/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp16AggregateGet } from '../fn/production/exp-16-aggregate-get';
import { Exp16AggregateGet$Params } from '../fn/production/exp-16-aggregate-get';
import { exp16MbaOptionsGet } from '../fn/production/exp-16-mba-options-get';
import { Exp16MbaOptionsGet$Params } from '../fn/production/exp-16-mba-options-get';
import { exp16VolumesGet } from '../fn/production/exp-16-volumes-get';
import { Exp16VolumesGet$Params } from '../fn/production/exp-16-volumes-get';
import { MbaOptionsDto } from '../models/mba-options-dto';
import { ProductionVolumesDto } from '../models/production-volumes-dto';

@Injectable({ providedIn: 'root' })
export class ProductionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp16AggregateGet()` */
  static readonly Exp16AggregateGetPath = '/EXP16/Aggregate';

  /**
   * Get Aggregated Production per MBA and Production Unit type.
   *
   * Returns Aggregated Production per MBA and Production Unit type in CET/CEST, with selected time aggregations: hour, day, week, month, year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp16AggregateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp16AggregateGet$Response(params: Exp16AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductionVolumesDto>>> {
    return exp16AggregateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Aggregated Production per MBA and Production Unit type.
   *
   * Returns Aggregated Production per MBA and Production Unit type in CET/CEST, with selected time aggregations: hour, day, week, month, year
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp16AggregateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp16AggregateGet(params: Exp16AggregateGet$Params, context?: HttpContext): Observable<Array<ProductionVolumesDto>> {
    return this.exp16AggregateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductionVolumesDto>>): Array<ProductionVolumesDto> => r.body)
    );
  }

  /** Path part for operation `exp16MbaOptionsGet()` */
  static readonly Exp16MbaOptionsGetPath = '/EXP16/MBAOptions';

  /**
   * Get Available MBAs for Production Volumes.
   *
   * Returns available MBAs that can be used to query Production Volumes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp16MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp16MbaOptionsGet$Response(params?: Exp16MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp16MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Production Volumes.
   *
   * Returns available MBAs that can be used to query Production Volumes
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp16MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp16MbaOptionsGet(params?: Exp16MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp16MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

  /** Path part for operation `exp16VolumesGet()` */
  static readonly Exp16VolumesGetPath = '/EXP16/Volumes';

  /**
   * Get Aggregated Production per MBA and Production Unit type .
   *
   * Returns Aggregated Production per MBA and Production Unit type in CET/CEST.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp16VolumesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp16VolumesGet$Response(params: Exp16VolumesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductionVolumesDto>>> {
    return exp16VolumesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Aggregated Production per MBA and Production Unit type .
   *
   * Returns Aggregated Production per MBA and Production Unit type in CET/CEST.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp16VolumesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp16VolumesGet(params: Exp16VolumesGet$Params, context?: HttpContext): Observable<Array<ProductionVolumesDto>> {
    return this.exp16VolumesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductionVolumesDto>>): Array<ProductionVolumesDto> => r.body)
    );
  }

}
