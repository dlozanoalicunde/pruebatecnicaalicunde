/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MbaOptionsDto } from '../../models/mba-options-dto';

export interface Exp17MbaOptionsGet$Params {
}

export function exp17MbaOptionsGet(http: HttpClient, rootUrl: string, params?: Exp17MbaOptionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MbaOptionsDto>>> {
  const rb = new RequestBuilder(rootUrl, exp17MbaOptionsGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MbaOptionsDto>>;
    })
  );
}

exp17MbaOptionsGet.PATH = '/EXP17/MBAOptions';
