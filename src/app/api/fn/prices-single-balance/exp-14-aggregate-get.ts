/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SinglebalancePriceDto } from '../../models/singlebalance-price-dto';

export interface Exp14AggregateGet$Params {

/**
 * End date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  end: string;

/**
 * MBA EIC CODE, multiple MBAs supported by providing multiple mba query parameters
 */
  mba: Array<string>;

/**
 * Aggregate resolution, 'year', 'month', 'week', 'day', 'hour'. Defaults to hour
 */
  resolution?: string;

/**
 * Start date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  start: string;
}

export function exp14AggregateGet(http: HttpClient, rootUrl: string, params: Exp14AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SinglebalancePriceDto>>> {
  const rb = new RequestBuilder(rootUrl, exp14AggregateGet.PATH, 'get');
  if (params) {
    rb.query('end', params.end, {});
    rb.query('mba', params.mba, {});
    rb.query('resolution', params.resolution, {});
    rb.query('start', params.start, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SinglebalancePriceDto>>;
    })
  );
}

exp14AggregateGet.PATH = '/EXP14/Aggregate';
