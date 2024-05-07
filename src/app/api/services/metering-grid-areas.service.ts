/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp03MbaOptionsGet } from '../fn/metering-grid-areas/exp-03-mba-options-get';
import { Exp03MbaOptionsGet$Params } from '../fn/metering-grid-areas/exp-03-mba-options-get';
import { exp03MeteringGridAreasGet } from '../fn/metering-grid-areas/exp-03-metering-grid-areas-get';
import { Exp03MeteringGridAreasGet$Params } from '../fn/metering-grid-areas/exp-03-metering-grid-areas-get';
import { MbaOptionsDto } from '../models/mba-options-dto';
import { MeteringGridAreaDto } from '../models/metering-grid-area-dto';

@Injectable({ providedIn: 'root' })
export class MeteringGridAreasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp03MbaOptionsGet()` */
  static readonly Exp03MbaOptionsGetPath = '/EXP03/MBAOptions';

  /**
   * Get Available MBAs for Metering Grid Areas.
   *
   * Returns available MBAs that can be used to query Metering Grid Areas
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp03MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp03MbaOptionsGet$Response(params?: Exp03MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp03MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Metering Grid Areas.
   *
   * Returns available MBAs that can be used to query Metering Grid Areas
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp03MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp03MbaOptionsGet(params?: Exp03MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp03MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

  /** Path part for operation `exp03MeteringGridAreasGet()` */
  static readonly Exp03MeteringGridAreasGetPath = '/EXP03/MeteringGridAreas';

  /**
   * Get Metering Grid Areas.
   *
   * Returns list of MGAs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp03MeteringGridAreasGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp03MeteringGridAreasGet$Response(params?: Exp03MeteringGridAreasGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MeteringGridAreaDto>>> {
    return exp03MeteringGridAreasGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Metering Grid Areas.
   *
   * Returns list of MGAs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp03MeteringGridAreasGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp03MeteringGridAreasGet(params?: Exp03MeteringGridAreasGet$Params, context?: HttpContext): Observable<Array<MeteringGridAreaDto>> {
    return this.exp03MeteringGridAreasGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MeteringGridAreaDto>>): Array<MeteringGridAreaDto> => r.body)
    );
  }

}
