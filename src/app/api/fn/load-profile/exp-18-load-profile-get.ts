/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoadProfileDto } from '../../models/load-profile-dto';

export interface Exp18LoadProfileGet$Params {

/**
 * End date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  end: string;

/**
 * MBA EIC CODE, multiple MBAs supported by providing multiple MBA query parameters
 */
  mba: Array<string>;

/**
 * MGA EIC CODE
 */
  mga?: string;

/**
 * Start date, format is yyyy-MM-dd'T'HH:mm:ss.SSSX
 */
  start: string;
}

export function exp18LoadProfileGet(http: HttpClient, rootUrl: string, params: Exp18LoadProfileGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LoadProfileDto>>> {
  const rb = new RequestBuilder(rootUrl, exp18LoadProfileGet.PATH, 'get');
  if (params) {
    rb.query('end', params.end, {});
    rb.query('mba', params.mba, {});
    rb.query('mga', params.mga, {});
    rb.query('start', params.start, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LoadProfileDto>>;
    })
  );
}

exp18LoadProfileGet.PATH = '/EXP18/LoadProfile';
