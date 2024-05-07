/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeesDto } from '../../models/fees-dto';

export interface Exp05FeesGet$Params {
}

export function exp05FeesGet(http: HttpClient, rootUrl: string, params?: Exp05FeesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FeesDto>>> {
  const rb = new RequestBuilder(rootUrl, exp05FeesGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FeesDto>>;
    })
  );
}

exp05FeesGet.PATH = '/EXP05/Fees';
