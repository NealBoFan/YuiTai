import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { materialRoundBarComponent }   from './component/material-roundBar.component';
import { materialPiecesComponent }      from './component/material-pieces.component';
import { materialDetailComponent }      from './component/material-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/material-pieces', pathMatch: 'full' },
  { path: 'material-pieces',  component: materialPiecesComponent },
  { path: 'material-roundBar', component: materialRoundBarComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true,enableTracing:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}