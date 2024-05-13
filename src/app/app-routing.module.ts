import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { EMPTY_STRING, INTERNAL_PATHS } from '@data/constants/routes';
import { MarketPartiesModule } from '@modules/market-parties/market-parties.module';

// Components
import { SkeletonComponent } from './layouts/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
      {
        path: INTERNAL_PATHS.OPENDATA_DEFAULT,
        loadChildren: () => import('@modules/market-parties/market-parties.module').then((m): typeof MarketPartiesModule => m.MarketPartiesModule),
      },
      { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
