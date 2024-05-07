/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp18AggregateGet } from '../fn/load-profile/exp-18-aggregate-get';
import { Exp18AggregateGet$Params } from '../fn/load-profile/exp-18-aggregate-get';
import { exp18LoadProfileGet } from '../fn/load-profile/exp-18-load-profile-get';
import { Exp18LoadProfileGet$Params } from '../fn/load-profile/exp-18-load-profile-get';
import { exp18MbaOptionsGet } from '../fn/load-profile/exp-18-mba-options-get';
import { Exp18MbaOptionsGet$Params } from '../fn/load-profile/exp-18-mba-options-get';
import { LoadProfileDto } from '../models/load-profile-dto';
import { MbaOptionsDto } from '../models/mba-options-dto';

@Injectable({ providedIn: 'root' })
export class LoadProfileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp18AggregateGet()` */
  static readonly Exp18AggregateGetPath = '/EXP18/Aggregate';

  /**
   * Get Load profiles values per MGA aggregated.
   *
   * Return Load profiles per MGA aggregated in SNT timezone, different time aggregations available: hour, day, week, month, year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp18AggregateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp18AggregateGet$Response(params: Exp18AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return exp18AggregateGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Load profiles values per MGA aggregated.
   *
   * Return Load profiles per MGA aggregated in SNT timezone, different time aggregations available: hour, day, week, month, year
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp18AggregateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp18AggregateGet(params: Exp18AggregateGet$Params, context?: HttpContext): Observable<void> {
    return this.exp18AggregateGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `exp18LoadProfileGet()` */
  static readonly Exp18LoadProfileGetPath = '/EXP18/LoadProfile';

  /**
   * Get Load profiles values per MGA.
   *
   * Return Load profiles per MGA in SNT timezone
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp18LoadProfileGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp18LoadProfileGet$Response(params: Exp18LoadProfileGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LoadProfileDto>>> {
    return exp18LoadProfileGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Load profiles values per MGA.
   *
   * Return Load profiles per MGA in SNT timezone
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp18LoadProfileGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp18LoadProfileGet(params: Exp18LoadProfileGet$Params, context?: HttpContext): Observable<Array<LoadProfileDto>> {
    return this.exp18LoadProfileGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LoadProfileDto>>): Array<LoadProfileDto> => r.body)
    );
  }

  /** Path part for operation `exp18MbaOptionsGet()` */
  static readonly Exp18MbaOptionsGetPath = '/EXP18/MBAOptions';

  /**
   * Get Available MBAs for Load Profile.
   *
   * Returns available MBAs that can be used to query Load Profile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp18MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp18MbaOptionsGet$Response(params?: Exp18MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Array<MbaOptionsDto>>>> {
    return exp18MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Load Profile.
   *
   * Returns available MBAs that can be used to query Load Profile
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp18MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp18MbaOptionsGet(params?: Exp18MbaOptionsGet$Params, context?: HttpContext): Observable<Array<Array<MbaOptionsDto>>> {
    return this.exp18MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Array<MbaOptionsDto>>>): Array<Array<MbaOptionsDto>> => r.body)
    );
  }

}
