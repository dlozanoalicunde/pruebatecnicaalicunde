/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReconciliationPriceDto } from '../../models/reconciliation-price-dto';

export interface Exp17ReconciliationPricesGet$Params {

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

export function exp17ReconciliationPricesGet(http: HttpClient, rootUrl: string, params: Exp17ReconciliationPricesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReconciliationPriceDto>>> {
  const rb = new RequestBuilder(rootUrl, exp17ReconciliationPricesGet.PATH, 'get');
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
      return r as StrictHttpResponse<Array<ReconciliationPriceDto>>;
    })
  );
}

exp17ReconciliationPricesGet.PATH = '/EXP17/ReconciliationPrices';
