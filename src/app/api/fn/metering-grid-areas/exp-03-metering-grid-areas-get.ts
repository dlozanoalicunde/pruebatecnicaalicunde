/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MeteringGridAreaDto } from '../../models/metering-grid-area-dto';

export interface Exp03MeteringGridAreasGet$Params {

/**
 * DSO Name, free text search
 */
  dsoName?: string;

/**
 * MBA EIC CODE, multiple MBAs supported by providing multiple mba query parameters
 */
  mba?: Array<string>;

/**
 * MGA Code, free text search
 */
  mgaCode?: string;

/**
 * MGA Name, free text search
 */
  mgaName?: string;

/**
 * MGA Type, free text search
 */
  mgaType?: string;
}

export function exp03MeteringGridAreasGet(http: HttpClient, rootUrl: string, params?: Exp03MeteringGridAreasGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MeteringGridAreaDto>>> {
  const rb = new RequestBuilder(rootUrl, exp03MeteringGridAreasGet.PATH, 'get');
  if (params) {
    rb.query('dsoName', params.dsoName, {});
    rb.query('mba', params.mba, {});
    rb.query('mgaCode', params.mgaCode, {});
    rb.query('mgaName', params.mgaName, {});
    rb.query('mgaType', params.mgaType, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MeteringGridAreaDto>>;
    })
  );
}

exp03MeteringGridAreasGet.PATH = '/EXP03/MeteringGridAreas';
