/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ImbalanceVolumeTwobalanceDto } from '../../models/imbalance-volume-twobalance-dto';

export interface Exp09ImbalancePowerVolumeGet$Params {

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

export function exp09ImbalancePowerVolumeGet(http: HttpClient, rootUrl: string, params: Exp09ImbalancePowerVolumeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ImbalanceVolumeTwobalanceDto>>> {
  const rb = new RequestBuilder(rootUrl, exp09ImbalancePowerVolumeGet.PATH, 'get');
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
      return r as StrictHttpResponse<Array<ImbalanceVolumeTwobalanceDto>>;
    })
  );
}

exp09ImbalancePowerVolumeGet.PATH = '/EXP09/ImbalancePowerVolume';
