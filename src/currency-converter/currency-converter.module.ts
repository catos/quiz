import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FixedPipe } from '../shared/fixed.pipe';

import { ExchangeService } from './exchange.service';
import { CurrencySelectComponent } from './currency-select.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    CurrencySelectComponent,
    FixedPipe
  ],
  providers: [
    ExchangeService
  ]
})

export class CurrencyConverterModule {

}