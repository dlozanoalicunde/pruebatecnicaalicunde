import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { BalanceResponsiblePartiesComponent } from './pages/balance-responsible-parties/balance-responsible-parties.component';

const routes: Routes = [{ path: '', component: BalanceResponsiblePartiesComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MarketPartiesRoutingModule {}