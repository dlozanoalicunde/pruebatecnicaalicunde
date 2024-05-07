/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BalanceServiceProviderDto } from '../../models/balance-service-provider-dto';

export interface Exp01BalanceServiceProvidersGet$Params {

/**
 * BSP Code, free text search
 */
  code?: string;

/**
 * Country 2 letter ISO code
 */
  country?: string;

/**
 * BSP Name, free text search
 */
  name?: string;
}

export function exp01BalanceServiceProvidersGet(http: HttpClient, rootUrl: string, params?: Exp01BalanceServiceProvidersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BalanceServiceProviderDto>>> {
  const rb = new RequestBuilder(rootUrl, exp01BalanceServiceProvidersGet.PATH, 'get');
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
      return r as StrictHttpResponse<Array<BalanceServiceProviderDto>>;
    })
  );
}

exp01BalanceServiceProvidersGet.PATH = '/EXP01/BalanceServiceProviders';
