/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BalanceResponsiblePartyDto } from '../../models/balance-responsible-party-dto';

export interface Exp01BalanceResponsiblePartiesGet$Params {

/**
 * BRP Code, free text search
 */
  code?: string;

/**
 * Country 2 letter ISO code
 */
  country?: string;

/**
 * BRP Name, free text search
 */
  name?: string;
}

export function exp01BalanceResponsiblePartiesGet(http: HttpClient, rootUrl: string, params?: Exp01BalanceResponsiblePartiesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BalanceResponsiblePartyDto>>> {
  const rb = new RequestBuilder(rootUrl, exp01BalanceResponsiblePartiesGet.PATH, 'get');
  if (params) {
    rb.query('code', params.code, {});
    rb.query('country', params.country, {});
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<BalanceResponsiblePartyDto>>;
    })
  );
}

exp01BalanceResponsiblePartiesGet.PATH = '/EXP01/BalanceResponsibleParties';
