/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AggregatedConsumptionDto } from '../../models/aggregated-consumption-dto';

export interface Exp15ConsumptionGet$Params {

/**
 * End date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  end: string;

/**
 * MBA EIC CODE, multiple MBAs supported by providing multiple mba query parameters
 */
  mba: Array<string>;

/**
 * Start date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  start: string;
}

export function exp15ConsumptionGet(http: HttpClient, rootUrl: string, params: Exp15ConsumptionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AggregatedConsumptionDto>>> {
  const rb = new RequestBuilder(rootUrl, exp15ConsumptionGet.PATH, 'get');
  if (params) {
    rb.query('end', params.end, {});
    rb.query('mba', params.mba, {});
    rb.query('start', params.start, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AggregatedConsumptionDto>>;
    })
  );
}

exp15ConsumptionGet.PATH = '/EXP15/Consumption';
