/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { exp06BanksGet } from '../fn/settlement-banks/exp-06-banks-get';
import { Exp06BanksGet$Params } from '../fn/settlement-banks/exp-06-banks-get';
import { SettlementBankDto } from '../models/settlement-bank-dto';

@Injectable({ providedIn: 'root' })
export class SettlementBanksService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exp06BanksGet()` */
  static readonly Exp06BanksGetPath = '/EXP06/Banks';

  /**
   * Get Settlement Banks.
   *
   * Returns list of Banks
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exp06BanksGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp06BanksGet$Response(params?: Exp06BanksGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SettlementBankDto>>> {
    return exp06BanksGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Settlement Banks.
   *
   * Returns list of Banks
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exp06BanksGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exp06BanksGet(params?: Exp06BanksGet$Params, context?: HttpContext): Observable<Array<SettlementBankDto>> {
    return this.exp06BanksGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SettlementBankDto>>): Array<SettlementBankDto> => r.body)
    );
  }

}
