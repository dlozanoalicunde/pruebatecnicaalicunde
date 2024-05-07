/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RetailerBalanceResponsibilityDto } from '../../models/retailer-balance-responsibility-dto';

export interface Exp04RetailerBalanceResponsibilityGet$Params {

/**
 * Search by BRP name
 */
  brpName?: string;

/**
 * MBA EIC CODE, multiple mbas supported by providing multiple mba query parameters
 */
  mba: Array<string>;

/**
 * Search by MGA name
 */
  mga?: string;

/**
 * Search by Retailer name
 */
  retailerName?: string;
}

export function exp04RetailerBalanceResponsibilityGet(http: HttpClient, rootUrl: string, params: Exp04RetailerBalanceResponsibilityGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RetailerBalanceResponsibilityDto>>> {
  const rb = new RequestBuilder(rootUrl, exp04RetailerBalanceResponsibilityGet.PATH, 'get');
  if (params) {
    rb.query('brpName', params.brpName, {});
    rb.query('mba', params.mba, {});
    rb.query('mga', params.mga, {});
    rb.query('retailerName', params.retailerName, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RetailerBalanceResponsibilityDto>>;
    })
  );
}

exp04RetailerBalanceResponsibilityGet.PATH = '/EXP04/RetailerBalanceResponsibility';
