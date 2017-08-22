import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent} from './app.component';
import { materialPiecesComponent} from './component/material-pieces.component';
import { materialDetailComponent} from './component/material-detail.component';
import { materialRoundBarComponent} from './component/material-roundBar.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    materialPiecesComponent,
    materialRoundBarComponent,
    materialDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
