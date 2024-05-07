/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Exp13AggregateGet$Params {

/**
 * End date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  end: string;

/**
 * MBA EIC CODE, multiple MBAs supported by providing multiple MBA query parameters, example '10Y1001A1001A44P'
 */
  mba: Array<string>;

/**
 * Aggregation resolution, 'year', 'month', 'week', 'day', 'hour'
 */
  resolution?: string;

/**
 * Start date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  start: string;
}

export function exp13AggregateGet(http: HttpClient, rootUrl: string, params: Exp13AggregateGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, exp13AggregateGet.PATH, 'get');
  if (params) {
    rb.query('end', params.end, {});
    rb.query('mba', params.mba, {});
    rb.query('resolution', params.resolution, {});
    rb.query('start', params.start, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

exp13AggregateGet.PATH = '/EXP13/Aggregate';
