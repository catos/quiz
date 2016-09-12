import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FixedPipe } from '../shared/index';

import { ExchangeService } from './exchange.service';
import { CurrencyConverterComponent } from './currency-converter.component';
import { CurrencySelectComponent } from './currency-select.component';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencySelectComponent,
    FixedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ExchangeService
  ]
})

export class CurrencyConverterModule {

}