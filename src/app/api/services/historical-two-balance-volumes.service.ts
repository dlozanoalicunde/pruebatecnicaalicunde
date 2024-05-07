/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp09ImbalancePowerVolumeGet } from '../fn/historical-two-balance-volumes/exp-09-imbalance-power-volume-get';
import { Exp09ImbalancePowerVolumeGet$Params } from '../fn/historical-two-balance-volumes/exp-09-imbalance-power-volume-get';
import { exp09MbaOptionsGet } from '../fn/historical-two-balance-volumes/exp-09-mba-options-get';
import { Exp09MbaOptionsGet$Params } from '../fn/historical-two-balance-volumes/exp-09-mba-options-get';
import { ImbalanceVolumeTwobalanceDto } from '../models/imbalance-volume-twobalance-dto';
import { MbaOptionsDto } from '../models/mba-options-dto';

@Injectable({ providedIn: 'root' })
export class HistoricalTwoBalanceVolumesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp09ImbalancePowerVolumeGet()` */
  static readonly Exp09ImbalancePowerVolumeGetPath = '/EXP09/ImbalancePowerVolume';

  /**
   * Get Historical Imbalance Volumes per MBA (Two Balance).
   *
   * Returns Historical Imbalance Volumes per MBA (Two balance).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp09ImbalancePowerVolumeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp09ImbalancePowerVolumeGet$Response(params: Exp09ImbalancePowerVolumeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ImbalanceVolumeTwobalanceDto>>> {
    return exp09ImbalancePowerVolumeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Historical Imbalance Volumes per MBA (Two Balance).
   *
   * Returns Historical Imbalance Volumes per MBA (Two balance).
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp09ImbalancePowerVolumeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp09ImbalancePowerVolumeGet(params: Exp09ImbalancePowerVolumeGet$Params, context?: HttpContext): Observable<Array<ImbalanceVolumeTwobalanceDto>> {
    return this.exp09ImbalancePowerVolumeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ImbalanceVolumeTwobalanceDto>>): Array<ImbalanceVolumeTwobalanceDto> => r.body)
    );
  }

  /** Path part for operation `exp09MbaOptionsGet()` */
  static readonly Exp09MbaOptionsGetPath = '/EXP09/MBAOptions';

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp09MbaOptionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp09MbaOptionsGet$Response(params?: Exp09MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
    return exp09MbaOptionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Available MBAs for Single Balance Prices.
   *
   * Returns available MBAs that can be used to query Single Balance Prices
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp09MbaOptionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp09MbaOptionsGet(params?: Exp09MbaOptionsGet$Params, context?: HttpContext): Observable<Array<MbaOptionsDto>> {
    return this.exp09MbaOptionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MbaOptionsDto>>): Array<MbaOptionsDto> => r.body)
    );
  }

}
