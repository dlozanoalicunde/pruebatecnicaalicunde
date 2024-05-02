import { Component, OnInit } from '@angular/core';

import { ResponsiblePartiesInterface } from '@modules/market-parties/interfaces/ResponsibleParties.interface';
import { BalanceResponsiblePartiesService } from '@modules/market-parties/services/balance-responsible-parties.service';

import { RESPONSIBLE_PARTIES_DATA } from '@data/constants/mock/responsible_parties'

@Component({
  selector: 'app-balance-responsible-parties',
  templateUrl: './balance-responsible-parties.component.html',
  styleUrl: './balance-responsible-parties.component.scss'
})
export class BalanceResponsiblePartiesComponent implements OnInit {
  
  responsible_parties: ResponsiblePartiesInterface[];

  constructor(
    private balanceResponsiblePartiesService: BalanceResponsiblePartiesService
  ){
    this.responsible_parties = [];
  }

  ngOnInit() {
    // ** CORS ERROR **
    // this.balanceResponsiblePartiesService
    //   .getResponsibleParties()
    //   .subscribe(data => this.responsible_parties = data);

    this.responsible_parties = RESPONSIBLE_PARTIES_DATA
  }
}
