import { Routes } from '@angular/router';
import { MarketPartiesComponent } from '../components/market-parties/market-parties.component';

export const routes: Routes = [
    { path: '', redirectTo: '/marketParties', pathMatch: 'full' },
    { path: 'marketParties', component: MarketPartiesComponent }
];
