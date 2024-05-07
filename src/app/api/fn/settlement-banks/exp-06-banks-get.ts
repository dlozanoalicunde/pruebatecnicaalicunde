/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SettlementBankDto } from '../../models/settlement-bank-dto';

export interface Exp06BanksGet$Params {
}

export function exp06BanksGet(http: HttpClient, rootUrl: string, params?: Exp06BanksGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SettlementBankDto>>> {
  const rb = new RequestBuilder(rootUrl, exp06BanksGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SettlementBankDto>>;
    })
  );
}

exp06BanksGet.PATH = '/EXP06/Banks';
