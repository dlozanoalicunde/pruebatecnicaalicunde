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
  filteredItems: ResponsiblePartiesInterface[];
  sortBy: string = '';
  sortOrder: number = 1;
  orderIconToggle: boolean = false;

  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;

  inputBrpName: string = '';
  inputBrpCode: string = '';
  inputCodingScheme: string = '';
  inputBusinessId: string = '';
  inputCountry: string = '';

  constructor(
    private balanceResponsiblePartiesService: BalanceResponsiblePartiesService
  ){
    this.responsible_parties = [];
    this.filteredItems = [];
  }

  ngOnInit() {
    // ** CORS ERROR **
    // this.balanceResponsiblePartiesService
    //   .getResponsibleParties()
    //   .subscribe(data => this.responsible_parties = data);

    this.responsible_parties = RESPONSIBLE_PARTIES_DATA;
    this.filteredItems = this.responsible_parties;
    this.totalItems = this.responsible_parties.length;
  }

  sort(property: string) {
    this.orderIconToggle = !this.orderIconToggle;
    this.sortBy = property;
    this.sortOrder = this.sortOrder * -1;
  }

  pageChanged(event: any) {
    this.currentPage = event;
  }

  filterByBrpName() {
      this.filteredItems = this.responsible_parties.filter(item => item.brpName.includes(this.inputBrpName))
  }
  filterByBrpCode() {
      this.filteredItems = this.responsible_parties.filter(item => item.brpCode.includes(this.inputBrpCode))
  }
  filterByCodingScheme() {
      this.filteredItems = this.responsible_parties.filter(item => item.codingScheme.includes(this.inputCodingScheme))
  }
  filterByBusinessId() {
      this.filteredItems = this.responsible_parties.filter(item => item.businessId.includes(this.inputBusinessId))
  }
  filterByCountry() {
      this.filteredItems = this.responsible_parties.filter(item => item.country.includes(this.inputCountry))
  }
}
