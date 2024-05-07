/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp05FeesGet } from '../fn/fees/exp-05-fees-get';
import { Exp05FeesGet$Params } from '../fn/fees/exp-05-fees-get';
import { FeesDto } from '../models/fees-dto';

@Injectable({ providedIn: 'root' })
export class FeesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp05FeesGet()` */
  static readonly Exp05FeesGetPath = '/EXP05/Fees';

  /**
   * Get all fees.
   *
   * returns all fees
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp05FeesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp05FeesGet$Response(params?: Exp05FeesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FeesDto>>> {
    return exp05FeesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all fees.
   *
   * returns all fees
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp05FeesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp05FeesGet(params?: Exp05FeesGet$Params, context?: HttpContext): Observable<Array<FeesDto>> {
    return this.exp05FeesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FeesDto>>): Array<FeesDto> => r.body)
    );
  }

}
