/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ImbalanceVolumeDto } from '../../models/imbalance-volume-dto';

export interface Exp13ImbalancePowerVolumeGet$Params {

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

export function exp13ImbalancePowerVolumeGet(http: HttpClient, rootUrl: string, params: Exp13ImbalancePowerVolumeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ImbalanceVolumeDto>>> {
  const rb = new RequestBuilder(rootUrl, exp13ImbalancePowerVolumeGet.PATH, 'get');
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
      return r as StrictHttpResponse<Array<ImbalanceVolumeDto>>;
    })
  );
}

exp13ImbalancePowerVolumeGet.PATH = '/EXP13/ImbalancePowerVolume';
