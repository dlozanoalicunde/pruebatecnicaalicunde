/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DistributionSystemOperatorDto } from '../../models/distribution-system-operator-dto';

export interface Exp01DistributionSystemOperatorsGet$Params {

/**
 * DSO Code, free text search
 */
  code?: string;

/**
 * Country 2 letter ISO code
 */
  country?: string;

/**
 * DSO Name, free text search
 */
  name?: string;
}

export function exp01DistributionSystemOperatorsGet(http: HttpClient, rootUrl: string, params?: Exp01DistributionSystemOperatorsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DistributionSystemOperatorDto>>> {
  const rb = new RequestBuilder(rootUrl, exp01DistributionSystemOperatorsGet.PATH, 'get');
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
      return r as StrictHttpResponse<Array<DistributionSystemOperatorDto>>;
    })
  );
}

exp01DistributionSystemOperatorsGet.PATH = '/EXP01/DistributionSystemOperators';
